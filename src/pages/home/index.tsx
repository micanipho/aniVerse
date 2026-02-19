import { useContext, useEffect } from "react";
import { AnimeActionContext, AnimeStateContext } from "../../providers/animeProvider/context";

const Home = () => {
    const { getAnimeList } = useContext(AnimeActionContext)!;
    const { animeList, isPending, isError } = useContext(AnimeStateContext);

    useEffect(() => {
        getAnimeList();
    }, []);

    if (isPending) return <div>Loading...</div>;
    if (isError) return <div>Error loading anime.</div>;

    return (
        <div style={{ padding: "20px" }}>
            <h1>Anime List</h1>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "20px" }}>
                {animeList?.map((anime) => (
                    <div key={anime.id} style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "8px" }}>
                        <img src={anime.image} alt={anime.title} style={{ width: "100%", height: "300px", objectFit: "cover" }} />
                        <h3>{anime.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
