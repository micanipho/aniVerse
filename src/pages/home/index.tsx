import { useEffect, useState } from "react";
import { useStyles } from "./style/style";
import { useAnime, useAnimeActions } from "../../providers/animeProvider";
import { Input, Spin } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const Home = () => {
    const { animeList, isPending, isError } = useAnime();
    const { styles } = useStyles();
    const { searchAnime, getAnimeList } = useAnimeActions();
    const [query, setQuery] = useState('');
    

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
                    </div>
                ))}
            </div>
        );
    };


    return (
        <div className={styles.container}>
            <div className={styles.searchWrapper} style={{ height: '100%' }}>
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

        </div>
    );
};

export default Home;
