import { createAction } from "redux-actions";
import { IAnime, IAnimeStateContext } from "./context";

export enum AnimeActionEnums {
    getAnimeListError = "GET_ANIME_LIST_ERROR",
    getAnimeListSuccess = "GET_ANIME_LIST_SUCCESS",
    getAnimeListPending = "GET_ANIME_LIST_PENDING",

    getAnimeByIdError = "GET_ANIME_BY_ID_ERROR",
    getAnimeByIdSuccess = "GET_ANIME_BY_ID_SUCCESS",
    getAnimeByIdPending = "GET_ANIME_BY_ID_PENDING",

    searchAnimeError = "SEARCH_ANIME_ERROR",
    searchAnimeSuccess = "SEARCH_ANIME_SUCCESS",
    searchAnimePending = "SEARCH_ANIME_PENDING",

    filterAnimeByGenreError="FILTER_ANIME_BY_GENRE_ERROR",
    filterAnimeByGenreSuccess="FILTER_ANIME_BY_GENRE_SUCCESS",
    filterAnimeByGenrePending="FILTER_ANIME_BY_GENRE_PENDING",

    filterAnimeByStatusError="FILTER_ANIME_BY_STATUS_ERROR",
    filterAnimeByStatusSuccess="FILTER_ANIME_BY_STATUS_SUCCESS",
    filterAnimeByStatusPending="FILTER_ANIME_BY_STATUS_PENDING",

    filterAnimeByScoreError="FILTER_ANIME_BY_SCORE_ERROR",
    filterAnimeByScoreSuccess="FILTER_ANIME_BY_SCORE_SUCCESS",
    filterAnimeByScorePending="FILTER_ANIME_BY_SCORE_PENDING",

    deleteAnimeByNameError="DELETE_ANIME_BY_NAME_ERROR",
    deleteAnimeByNameSuccess="DELETE_ANIME_BY_NAME_SUCCESS",
    deleteAnimeByNamePending="DELETE_ANIME_BY_NAME_PENDING",

    createAnimeError="CREATE_ANIME_ERROR",
    createAnimeSuccess="CREATE_ANIME_SUCCESS",
    createAnimePending="CREATE_ANIME_PENDING",

    updateAnimeError="UPDATE_ANIME_ERROR",
    updateAnimeSuccess="UPDATE_ANIME_SUCCESS",
    updateAnimePending="UPDATE_ANIME_PENDING",

    addToFavoritesSuccess="ADD_TO_FAVORITES_SUCCESS",
    addToFavoritesError="ADD_TO_FAVORITES_ERROR",
    addToFavoritesPending="ADD_TO_FAVORITES_PENDING",

    removeFromFavoritesSuccess="REMOVE_FROM_FAVORITES_SUCCESS",
    removeFromFavoritesError="REMOVE_FROM_FAVORITES_ERROR",
    removeFromFavoritesPending="REMOVE_FROM_FAVORITES_PENDING",

    updateFavoritesSuccess="UPDATE_FAVORITES_SUCCESS",
    updateFavoritesError="UPDATE_FAVORITES_ERROR",
    updateFavoritesPending="UPDATE_FAVORITES_PENDING",

    setFavorites="SET_FAVORITES",
}

export const getAnimeListError = createAction<IAnimeStateContext>(AnimeActionEnums.getAnimeListError,
    () => ({isError: true, isPending: false, isSuccess: false})
);
export const getAnimeListSuccess = createAction<
IAnimeStateContext, IAnime[]>(
    AnimeActionEnums.getAnimeListSuccess,
    (animeList: IAnime[]) => 
        ({isError: false,
            isPending: false,
            isSuccess: true,
            animeList
        })
);
export const getAnimeListPending = createAction<IAnimeStateContext>(AnimeActionEnums.getAnimeListPending,
    () => ({isError: false, isPending: true, isSuccess: false})
);

export const getAnimeByIdError = createAction<IAnimeStateContext>(AnimeActionEnums.getAnimeByIdError,
    () => ({isError: true, isPending: false, isSuccess: false})
);
export const getAnimeByIdSuccess = createAction<IAnimeStateContext, IAnime>(AnimeActionEnums.getAnimeByIdSuccess,
    (anime: IAnime) => ({isError: false, isPending: false, isSuccess: true, anime})
);
export const getAnimeByIdPending = createAction<IAnimeStateContext>(AnimeActionEnums.getAnimeByIdPending,
    () => ({isError: false, isPending: true, isSuccess: false})
);

export const searchAnimeError = createAction<IAnimeStateContext>(AnimeActionEnums.searchAnimeError,
    () => ({isError: true, isPending: false, isSuccess: false})
);
export const searchAnimeSuccess = createAction<IAnimeStateContext, IAnime[]>(AnimeActionEnums.searchAnimeSuccess,
    (animeList: IAnime[]) => ({isError: false, isPending: false, isSuccess: true, animeList})
);
export const searchAnimePending = createAction<IAnimeStateContext>(AnimeActionEnums.searchAnimePending,
    () => ({isError: false, isPending: true, isSuccess: false})
);

export const filterAnimeByGenreError = createAction<IAnimeStateContext>(AnimeActionEnums.filterAnimeByGenreError,
    () => ({isError: true, isPending: false, isSuccess: false})
);
export const filterAnimeByGenreSuccess = createAction<IAnimeStateContext, IAnime[]>(AnimeActionEnums.filterAnimeByGenreSuccess,
    (animeList: IAnime[]) => ({isError: false, isPending: false, isSuccess: true, animeList})
);
export const filterAnimeByGenrePending = createAction<IAnimeStateContext>(AnimeActionEnums.filterAnimeByGenrePending,
    () => ({isError: false, isPending: true, isSuccess: false})
);

export const filterAnimeByStatusError = createAction<IAnimeStateContext>(AnimeActionEnums.filterAnimeByStatusError,
    () => ({isError: true, isPending: false, isSuccess: false})
);
export const filterAnimeByStatusSuccess = createAction<IAnimeStateContext, IAnime[]>(AnimeActionEnums.filterAnimeByStatusSuccess,
    (animeList: IAnime[]) => ({isError: false, isPending: false, isSuccess: true, animeList})
);
export const filterAnimeByStatusPending = createAction<IAnimeStateContext>(AnimeActionEnums.filterAnimeByStatusPending,
    () => ({isError: false, isPending: true, isSuccess: false})
);

export const filterAnimeByScoreError = createAction<IAnimeStateContext>(AnimeActionEnums.filterAnimeByScoreError,
    () => ({isError: true, isPending: false, isSuccess: false})
);
export const filterAnimeByScoreSuccess = createAction<IAnimeStateContext, IAnime[]>(AnimeActionEnums.filterAnimeByScoreSuccess,
    (animeList: IAnime[]) => ({isError: false, isPending: false, isSuccess: true, animeList})
);
export const filterAnimeByScorePending = createAction<IAnimeStateContext>(AnimeActionEnums.filterAnimeByScorePending,
    () => ({isError: false, isPending: true, isSuccess: false})
);

export const deleteAnimeByNameError = createAction<IAnimeStateContext>(AnimeActionEnums.deleteAnimeByNameError  ,
    () => ({isError: true, isPending: false, isSuccess: false})
);
export const deleteAnimeByNameSuccess = createAction<IAnimeStateContext, string>(AnimeActionEnums.deleteAnimeByNameSuccess,
    (deletedName: string) => ({isError: false, isPending: false, isSuccess: true, deletedName})
);
export const deleteAnimeByNamePending = createAction<IAnimeStateContext>(AnimeActionEnums.deleteAnimeByNamePending,
    () => ({isError: false, isPending: true, isSuccess: false})
);

export const createAnimeError = createAction<IAnimeStateContext>(AnimeActionEnums.createAnimeError,
    () => ({isError: true, isPending: false, isSuccess: false})
);
export const createAnimeSuccess = createAction<IAnimeStateContext, IAnime>(AnimeActionEnums.createAnimeSuccess,
    (anime: IAnime) => ({isError: false, isPending: false, isSuccess: true, anime})
);
export const createAnimePending = createAction<IAnimeStateContext>(AnimeActionEnums.createAnimePending,
    () => ({isError: false, isPending: true, isSuccess: false})
);

export const updateAnimeError = createAction<IAnimeStateContext>(AnimeActionEnums.updateAnimeError,
    () => ({isError: true, isPending: false, isSuccess: false})
);
export const updateAnimeSuccess = createAction<IAnimeStateContext, IAnime>(AnimeActionEnums.updateAnimeSuccess,
    (anime: IAnime) => ({isError: false, isPending: false, isSuccess: true, anime})
);
export const updateAnimePending = createAction<IAnimeStateContext>(AnimeActionEnums.updateAnimePending,
    () => ({isError: false, isPending: true, isSuccess: false})
);

export const addToFavoritesSuccess = createAction<IAnimeStateContext, IAnime>(AnimeActionEnums.addToFavoritesSuccess,
    (anime: IAnime) => ({isError: false, isPending: false, isSuccess: true, anime})
);
export const updateFavoritesSuccess = createAction<IAnimeStateContext, number>(AnimeActionEnums.updateFavoritesSuccess,
    (id: number) => ({isError: false, isPending: false, isSuccess: true, id})
);
export const removeFromFavoritesSuccess = createAction<IAnimeStateContext, number>(AnimeActionEnums.removeFromFavoritesSuccess,
    (removedId: number) => ({isError: false, isPending: false, isSuccess: true, removedId})
);
export const setFavoritesAction = createAction<IAnimeStateContext, IAnime[]>(AnimeActionEnums.setFavorites,
    (favorites: IAnime[]) => ({isError: false, isPending: false, isSuccess: true, favorites})
);
