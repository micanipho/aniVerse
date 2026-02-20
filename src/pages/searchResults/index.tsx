import React, { useEffect, useState } from 'react';
import { Spin, Input, Button, Modal, Form, Popconfirm, message } from 'antd';
import { SearchOutlined, EditOutlined, DeleteOutlined, HeartOutlined, HeartFilled } from '@ant-design/icons';
import { useAnime, useAnimeActions } from 'src/providers/animeProvider';
import { IAnime } from 'src/providers/animeProvider/context';
import { useStyles } from './style/style';

const SearchResults: React.FC = () => {
    const { styles } = useStyles();
    const { animeList, isPending, isError, favorites } = useAnime();
    const { getAnimeList, searchAnime, updateAnime, deleteAnimeByName, addToFavorites, removeFromFavorites } = useAnimeActions();

    const isFavorite = (id: number) => (favorites || []).some(a => a.id === id);

    const toggleFavorite = (anime: IAnime) => {
        if (isFavorite(anime.id)) {
            removeFromFavorites(anime.id);
            message.info(`Removed "${anime.title}" from favorites`);
        } else {
            addToFavorites(anime);
            message.success(`Added "${anime.title}" to favorites`);
        }
    };
    const [query, setQuery] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingAnime, setEditingAnime] = useState<IAnime | null>(null);
    const [form] = Form.useForm();

    useEffect(() => {
        const delay = setTimeout(() => {
            if (query.trim()) {
                searchAnime(query.trim());
            } else {
                getAnimeList();
            }
        }, 400);

        return () => clearTimeout(delay);
    }, [query]);

    const openEditModal = (anime: IAnime) => {
        setEditingAnime(anime);
        form.setFieldsValue(anime);
        setIsModalOpen(true);
    };

    const handleModalSubmit = () => {
        form.validateFields().then((values) => {
            if (editingAnime) {
                updateAnime({ ...editingAnime, ...values });
                message.success('Anime updated successfully');
            }
            setIsModalOpen(false);
            form.resetFields();
        });
    };

    const handleDelete = (name: string) => {
        deleteAnimeByName(name);
        message.success('Anime deleted successfully');
    };

    const renderContent = () => {
        if (isPending) {
            return (
                <div className={styles.loading}>
                    <Spin size="large" />
                </div>
            );
        }

        if (isError) {
            return (
                <div className={styles.error}>
                    Failed to load anime. Please try again later.
                </div>
            );
        }

        return (
            <div className={styles.grid}>
                {animeList?.map((anime) => (
                    <div key={anime.id} className={styles.card}>
                        <img
                            src={anime.image}
                            alt={anime.title}
                            className={styles.image}
                        />
                        <div className={styles.title}>{anime.title}</div>
                        <div className={styles.cardActions}>
                            <Button
                                type="text"
                                icon={isFavorite(anime.id) ? <HeartFilled /> : <HeartOutlined />}
                                className={isFavorite(anime.id) ? styles.favoriteActiveBtn : styles.favoriteBtn}
                                onClick={() => toggleFavorite(anime)}
                            />
                            <Button
                                type="text"
                                icon={<EditOutlined />}
                                className={styles.actionBtn}
                                onClick={() => openEditModal(anime)}
                            />
                            <Popconfirm
                                title="Delete this anime?"
                                description="This action cannot be undone."
                                onConfirm={() => handleDelete(anime.title)}
                                okText="Delete"
                                cancelText="Cancel"
                            >
                                <Button
                                    type="text"
                                    icon={<DeleteOutlined />}
                                    className={styles.deleteBtn}
                                />
                            </Popconfirm>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className={styles.container}>
            <div className={styles.searchWrapper}>
                <Input
                    className={styles.searchInput}
                    placeholder="Search anime..."
                    size="large"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    suffix={
                        <SearchOutlined
                            className={styles.searchIcon}
                        />
                    }
                />
            </div>

            {renderContent()}

            <Modal
                title="Edit Anime"
                open={isModalOpen}
                onOk={handleModalSubmit}
                onCancel={() => setIsModalOpen(false)}
                okText="Update"
                rootClassName={styles.modal}
                styles={{
                    root: { backgroundColor: '#222831' },
                    header: { backgroundColor: '#222831', borderBottom: '1px solid #393e46' },
                    body: { backgroundColor: '#222831' },
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

export default SearchResults;
