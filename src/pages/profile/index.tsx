import React, { useState } from 'react';
import { Empty, Button, Modal, Form, Input, message } from 'antd';
import { HeartFilled, DeleteOutlined, UserOutlined, PlusOutlined } from '@ant-design/icons';
import { useAnime, useAnimeActions } from 'src/providers/animeProvider';
import { IAnime } from 'src/providers/animeProvider/context';
import { useAuth } from 'src/providers/authProvider';
import { useStyles } from './style/style';

const Profile: React.FC = () => {
    const { styles } = useStyles();
    const { favorites } = useAnime();
    const { removeFromFavorites, createAnime } = useAnimeActions();
    const { user } = useAuth();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();

    const handleRemove = (id: number, title: string) => {
        removeFromFavorites(id);
        message.success(`Removed "${title}" from favorites`);
    };

    const openCreateModal = () => {
        form.resetFields();
        setIsModalOpen(true);
    };

    const handleCreate = () => {
        form.validateFields().then((values) => {
            const newAnime: IAnime = {
                ...values,
                id: Date.now(),
                genres: values.genres ? values.genres.split(',').map((g: string) => g.trim()) : [],
                studios: [],
                favorites: 0,
            };
            createAnime(newAnime);
            message.success('Anime created successfully');
            setIsModalOpen(false);
            form.resetFields();
        });
    };

    const initials = user
        ? `${user.firstName?.charAt(0) || ''}${user.lastName?.charAt(0) || ''}`.toUpperCase()
        : '?';

    return (
        <div className={styles.container}>
            <div className={styles.profileHeader}>
                <div className={styles.avatar}>
                    {user?.firstName ? initials : <UserOutlined />}
                </div>
                <div className={styles.userInfo}>
                    <h1 className={styles.userName}>
                        {user?.firstName} {user?.lastName}
                    </h1>
                    <p className={styles.userHandle}>@{user?.username}</p>
                </div>
                <div className={styles.stats}>
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>{favorites?.length || 0}</span>
                        <span className={styles.statLabel}>Favorites</span>
                    </div>
                </div>
            </div>

            <div className={styles.favoritesSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        <HeartFilled className={styles.heartIcon} />
                        My Favorites
                    </h2>
                    <Button
                        type="primary"
                        icon={<PlusOutlined />}
                        className={styles.createBtn}
                        onClick={openCreateModal}
                    >
                        Add Anime
                    </Button>
                </div>

                {!favorites || favorites.length === 0 ? (
                    <Empty
                        description={
                            <span className={styles.emptyText}>
                                No favorites yet. Browse anime and click the heart icon to add some!
                            </span>
                        }
                        className={styles.empty}
                    />
                ) : (
                    <div className={styles.grid}>
                        {favorites.map((anime) => (
                            <div key={anime.id} className={styles.card}>
                                <img
                                    src={anime.image}
                                    alt={anime.title}
                                    className={styles.cardImage}
                                />
                                <div className={styles.cardOverlay}>
                                    <div className={styles.cardTitle}>{anime.title}</div>
                                    {anime.score && (
                                        <div className={styles.cardScore}>★ {anime.score}</div>
                                    )}
                                    <Button
                                        type="text"
                                        icon={<DeleteOutlined />}
                                        className={styles.removeBtn}
                                        onClick={() => handleRemove(anime.id, anime.title)}
                                    >
                                        Remove
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            
            <Modal
                title="CREATE ANIME"
                open={isModalOpen}
                onOk={handleCreate}
                onCancel={() => setIsModalOpen(false)}
                okText="Create"
                okButtonProps={{
                    style: {
                        justifyContent: 'center',
                        backgroundColor: '#00ADB5',
                        borderColor: '#00ADB5',
                        fontWeight: 600,
                        borderRadius: '8px',
                    }
                }}
                cancelButtonProps={{
                    style: {
                        justifyContent: 'center',
                        color: '#eeeeee',
                        borderColor: '#393e46',
                        backgroundColor: 'transparent',
                        borderRadius: '8px',
                    }
                }}
                rootClassName={styles.modal}
                styles={{
                    title: { fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center' },
                    root: { backgroundColor: '#222831', padding: '20px' },
                    header: { backgroundColor: '#222831', borderBottom: '1px solid #393e46' },
                    body: { backgroundColor: '#222831', padding: '20px 24px' },
                    footer: { backgroundColor: '#222831', borderTop: '1px solid #393e46' },
                    container: { backgroundColor: '#222831', padding: 0 },
                }}
            >
                <Form form={form} layout="vertical">
                    <Form.Item name="title" label="Title" rules={[{ required: true, message: 'Please enter a title' }]}>
                        <Input placeholder="Anime title" />
                    </Form.Item>
                    <Form.Item name="image" label="Image URL" rules={[{ required: true, message: 'Please enter an image URL' }]}>
                        <Input placeholder="https://example.com/image.jpg" />
                    </Form.Item>
                    <Form.Item name="synopsis" label="Synopsis">
                        <Input.TextArea placeholder="Brief description..." rows={3} />
                    </Form.Item>
                    <Form.Item name="score" label="Score">
                        <Input type="number" placeholder="0-10" />
                    </Form.Item>
                    <Form.Item name="genres" label="Genres">
                        <Input placeholder="Action, Comedy, Drama" />
                    </Form.Item>
                    <Form.Item name="episodes" label="Episodes">
                        <Input type="number" placeholder="Number of episodes" />
                    </Form.Item>
                    <Form.Item name="status" label="Status" rules={[{ required: true, message: 'Please enter a status' }]}>
                        <Input placeholder="Airing, Finished, etc." />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default Profile;
