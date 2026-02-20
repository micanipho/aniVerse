import { getPublicAxiosInstance } from "src/utils/axiosInstance";
import { INITIAL_STATE, AnimeActionContext, AnimeStateContext, IAnime } from "./context";
import { useReducer, useMemo, useContext } from "react";
import { AnimeReducer } from "./reducer";
// import { useAuth } from "../authProvider";
import {getAnimeListSuccess, getAnimeByIdPending, getAnimeByIdSuccess, getAnimeByIdError, getAnimeListPending, getAnimeListError, searchAnimeError, searchAnimeSuccess, searchAnimePending, filterAnimeByScoreSuccess, filterAnimeByScoreError, deleteAnimeByNameSuccess, deleteAnimeByNameError, deleteAnimeByNamePending, filterAnimeByScorePending, filterAnimeByStatusSuccess, filterAnimeByStatusError, filterAnimeByStatusPending, filterAnimeByGenreSuccess, filterAnimeByGenreError, filterAnimeByGenrePending, createAnimePending, createAnimeSuccess, createAnimeError, updateAnimePending, updateAnimeSuccess, updateAnimeError, addToFavoritesSuccess, removeFromFavoritesSuccess } from "./actions";


export const AnimeProvider = ({ children }: {children: React.ReactNode}) => {
    const [state, dispatch] = useReducer(AnimeReducer, INITIAL_STATE);
    // const user = useAuth();

    // useEffect(() => {
    //     if (state.favorites) {
    //         localStorage.setItem('favorites', JSON.stringify({...user, user: `${}`}));
    //     }
    // }, [state.favorites]);

    const actions = useMemo(() => {
        const publicInstance = getPublicAxiosInstance();

        const getAnimeById = async(id: number) => {
            dispatch(getAnimeByIdPending());
            const endpoint = `/anime/${id}`;
            await publicInstance.get(endpoint).then((response) => {
                dispatch(getAnimeByIdSuccess(response.data.data));
            }).catch((error) => {   
                console.error(error);
                dispatch(getAnimeByIdError());
            });

        };

        const getAnimeList = async() => {
            dispatch(getAnimeListPending());
            const endpoint = `/anime`;
            await publicInstance.get(endpoint).then((response) => {
                const animeList = response.data.data.map((item: any) => ({
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
                dispatch(getAnimeListSuccess(animeList));
            }).catch((error) => {
                console.error(error);
                dispatch(getAnimeListError());
            });
        };

        const searchAnime = async(query: string) => {   
            dispatch(searchAnimePending());
            const endpoint = `/anime?q=${encodeURIComponent(query)}`;
            await publicInstance.get(endpoint).then((response) => {
                const animeList = response.data.data.map((item: any) => ({
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
                dispatch(searchAnimeSuccess(animeList));
            }).catch((error) => {
                console.error(error);
                dispatch(searchAnimeError());
            });
        };
        const filterAnimeByGenre = async(genre: string) => {
            dispatch(filterAnimeByGenrePending());
            const endpoint = `/anime?genre=${genre}`;
            await publicInstance.get(endpoint).then((response) => {
                dispatch(filterAnimeByGenreSuccess(response.data.data));
            }).catch((error) => {
                console.error(error);
                dispatch(filterAnimeByGenreError());
            });
        };

        const filterAnimeByStatus = async(status: string) => {
            dispatch(filterAnimeByStatusPending());
            const endpoint = `/anime?status=${status}`;
            await publicInstance.get(endpoint).then((response) => {
                dispatch(filterAnimeByStatusSuccess(response.data.data));
            }).catch((error) => {
                console.error(error);
                dispatch(filterAnimeByStatusError());
            });
        };

        const filterAnimeByScore = async(score: number) => {
            dispatch(filterAnimeByScorePending());
            const endpoint = `/anime?score=${score}`;
            await publicInstance.get(endpoint).then((response) => {
                dispatch(filterAnimeByScoreSuccess(response.data.data));
            }).catch((error) => {
                console.error(error);
                dispatch(filterAnimeByScoreError());
            });
        };

        const deleteAnimeByName = (name: string) => {
            dispatch(deleteAnimeByNamePending());
            try {
                dispatch(deleteAnimeByNameSuccess(name));
            } catch (error) {
                console.error(error);
                dispatch(deleteAnimeByNameError());
            }
        };

        const createAnime = (anime: IAnime) => {
            dispatch(createAnimePending());
            try {
                dispatch(createAnimeSuccess(anime));
            } catch (error) {
                console.error(error);
                dispatch(createAnimeError());
            }
        };

        const updateAnime = (anime: IAnime) => {
            dispatch(updateAnimePending());
            try {
                dispatch(updateAnimeSuccess(anime));
            } catch (error) {
                console.error(error);
                dispatch(updateAnimeError());
            }
        };

        const addToFavorites = (anime: IAnime) => {
            dispatch(addToFavoritesSuccess(anime));
        };

        const removeFromFavorites = (id: number) => {
            dispatch(removeFromFavoritesSuccess(id));
        };

        return {getAnimeById, getAnimeList, searchAnime, filterAnimeByGenre, filterAnimeByStatus, filterAnimeByScore, deleteAnimeByName, createAnime, updateAnime, addToFavorites, removeFromFavorites};
    }, []);

    return (
        <AnimeStateContext.Provider value={state}>
            <AnimeActionContext.Provider value={actions}>
                {children}
            </AnimeActionContext.Provider>
        </AnimeStateContext.Provider>
    );
}

export const useAnime = () => useContext(AnimeStateContext);
export const useAnimeActions = () => {
    const context = useContext(AnimeActionContext);
    if (!context) {
        throw new Error("useAnimeActions must be used within an AnimeProvider");
    }
    return context;
};

