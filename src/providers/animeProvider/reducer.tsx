import { handleActions } from "redux-actions";
import { INITIAL_STATE, IAnimeStateContext } from "./context";
import { AnimeActionEnums } from "./actions";

export const AnimeReducer = handleActions<IAnimeStateContext, IAnimeStateContext>({
    [AnimeActionEnums.getAnimeByIdPending]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [AnimeActionEnums.getAnimeByIdSuccess]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [AnimeActionEnums.getAnimeByIdError]: (state, action) => ({
        ...state,
        ...action.payload,
    }),

    [AnimeActionEnums.getAnimeListPending]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [AnimeActionEnums.getAnimeListSuccess]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [AnimeActionEnums.getAnimeListError]: (state, action) => ({
        ...state,
        ...action.payload,
    }),

    [AnimeActionEnums.searchAnimePending]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [AnimeActionEnums.searchAnimeSuccess]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [AnimeActionEnums.searchAnimeError]: (state, action) => ({
        ...state,
        ...action.payload,
    }),

    [AnimeActionEnums.filterAnimeByGenrePending]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [AnimeActionEnums.filterAnimeByGenreSuccess]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [AnimeActionEnums.filterAnimeByGenreError]: (state, action) => ({
        ...state,
        ...action.payload,
    }),

    [AnimeActionEnums.filterAnimeByStatusPending]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [AnimeActionEnums.filterAnimeByStatusSuccess]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [AnimeActionEnums.filterAnimeByStatusError]: (state, action) => ({
        ...state,
        ...action.payload,
    }),

    [AnimeActionEnums.filterAnimeByScorePending]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [AnimeActionEnums.filterAnimeByScoreSuccess]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [AnimeActionEnums.filterAnimeByScoreError]: (state, action) => ({
        ...state,
        ...action.payload,
    }),

    [AnimeActionEnums.deleteAnimeByNamePending]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [AnimeActionEnums.deleteAnimeByNameSuccess]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [AnimeActionEnums.deleteAnimeByNameError]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
}, INITIAL_STATE);