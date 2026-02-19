import { getPublicAxiosInstance } from "src/utils/axiosInstance";
import { INITIAL_STATE, AnimeActionContext, AnimeStateContext } from "./context";
import { useReducer, useMemo } from "react";
import { AnimeReducer } from "./reducer";
import {getAnimeListSuccess, getAnimeByIdPending, getAnimeByIdSuccess, getAnimeByIdError, getAnimeListPending, getAnimeListError, searchAnimeError, searchAnimeSuccess, searchAnimePending, filterAnimeByScoreSuccess, filterAnimeByScoreError, deleteAnimeByNameSuccess, deleteAnimeByNameError, deleteAnimeByNamePending, filterAnimeByScorePending, filterAnimeByStatusSuccess, filterAnimeByStatusError, filterAnimeByStatusPending, filterAnimeByGenreSuccess, filterAnimeByGenreError, filterAnimeByGenrePending } from "./actions";


export const AnimeProvider = ({ children }: {children: React.ReactNode}) => {
    const [state, dispatch] = useReducer(AnimeReducer, INITIAL_STATE);
    const actions = useMemo(() => {
        const publicInstance = getPublicAxiosInstance();

        const getAnimeById = async(id: number) => {
            dispatch(getAnimeByIdPending());
            const endpoint = `/anime/${id}`;
            await publicInstance.get(endpoint).then((response) => {
                dispatch(getAnimeByIdSuccess(response.data));
            }).catch((error) => {   
                console.error(error);
                dispatch(getAnimeByIdError());
            });

        };

        const getAnimeList = async() => {
            dispatch(getAnimeListPending());
            const endpoint = `/anime`;
            await publicInstance.get(endpoint).then((response) => {
                dispatch(getAnimeListSuccess(response.data));
            }).catch((error) => {
                console.error(error);
                dispatch(getAnimeListError());
            });
        };

        const searchAnime = async(query: string) => {   
            dispatch(searchAnimePending());
            const endpoint = `/anime?q=${query}`;
            await publicInstance.get(endpoint).then((response) => {
                dispatch(searchAnimeSuccess(response.data));
            }).catch((error) => {
                console.error(error);
                dispatch(searchAnimeError());
            });
        };

        const filterAnimeByGenre = async(genre: string) => {
            dispatch(filterAnimeByGenrePending());
            const endpoint = `/anime?genre=${genre}`;
            await publicInstance.get(endpoint).then((response) => {
                dispatch(filterAnimeByGenreSuccess(response.data));
            }).catch((error) => {
                console.error(error);
                dispatch(filterAnimeByGenreError());
            });
        };

        const filterAnimeByStatus = async(status: string) => {
            dispatch(filterAnimeByStatusPending());
            const endpoint = `/anime?status=${status}`;
            await publicInstance.get(endpoint).then((response) => {
                dispatch(filterAnimeByStatusSuccess(response.data));
            }).catch((error) => {
                console.error(error);
                dispatch(filterAnimeByStatusError());
            });
        };

        const filterAnimeByScore = async(score: number) => {
            dispatch(filterAnimeByScorePending());
            const endpoint = `/anime?score=${score}`;
            await publicInstance.get(endpoint).then((response) => {
                dispatch(filterAnimeByScoreSuccess(response.data));
            }).catch((error) => {
                console.error(error);
                dispatch(filterAnimeByScoreError());
            });
        };

        const deleteAnimeByName = async(name: string) => {
            dispatch(deleteAnimeByNamePending());
            const endpoint = `/anime?name=${name}`;
            await publicInstance.delete(endpoint).then((response) => {
                dispatch(deleteAnimeByNameSuccess(response.data));
            }).catch((error) => {
                console.error(error);
                dispatch(deleteAnimeByNameError());
            });
        };

        return {getAnimeById, getAnimeList, searchAnime, filterAnimeByGenre, filterAnimeByStatus, filterAnimeByScore, deleteAnimeByName};
    }, []);

    return (
        <AnimeStateContext.Provider value={state}>
            <AnimeActionContext.Provider value={actions}>
                {children}
            </AnimeActionContext.Provider>
        </AnimeStateContext.Provider>
    );
}
