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
export const deleteAnimeByNameSuccess = createAction<IAnimeStateContext, IAnime>(AnimeActionEnums.deleteAnimeByNameSuccess,
    (anime: IAnime) => ({isError: false, isPending: false, isSuccess: true, anime})
);
export const deleteAnimeByNamePending = createAction<IAnimeStateContext>(AnimeActionEnums.deleteAnimeByNamePending,
    () => ({isError: false, isPending: true, isSuccess: false})
);
