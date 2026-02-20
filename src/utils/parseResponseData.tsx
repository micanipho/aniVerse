export const parseResponseData = (data: any) => {
    return data.map((item: any) => ({
        id: item.mal_id,    
        title: item.title,
        image: item.images?.jpg?.image_url || '',
        synopsis: item.synopsis,
        score: item.score,
        genres: item.genres?.map((g: any) => g.name) || [],
        studios: item.studios?.map((s: any) => s.name) || [],
        episodes: item.episodes,
        status: item.status,
        rating: item.rating,
        aired: item.aired?.string || '',
        premiered: item.season ? `${item.season} ${item.year}` : undefined,
        duration: item.duration,
        rank: item.rank,
        popularity: item.popularity,
        favorites: item.favorites,
        background: item.background,
    }));
};