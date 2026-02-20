import { createContext } from "react";
export interface IAnime {
    id: number;
    title: string;
    image: string;
    synopsis?: string;
    score?: number;
    genres: string[];
    studios: string[];
    episodes?: number;
    status: string;
    rating: string;
    aired: string;
    premiered?: string;
    duration: string;
    rank?: number;
    popularity?: number;
    favorites: number;
    background?: string;
}
export interface IAnimeStateContext{
    animeList?: IAnime[];
    isPending: boolean;
    isError: boolean;
    anime?: IAnime;
    isSuccess: boolean;
    searchResult?: IAnime[];
    deletedName?: string;
    favorites?: IAnime[];
}

export interface IAnimeActionContext{
    getAnimeList: () => void;
    searchAnime: (query: string) => void;
    filterAnimeByGenre: (genre: string) => void;
    deleteAnimeByName: (name: string) => void;
    createAnime: (anime: IAnime) => void;
    updateAnime: (anime: IAnime) => void;
    addToFavorites: (anime: IAnime) => void;
    removeFromFavorites: (id: number) => void;
}

export const INITIAL_STATE: IAnimeStateContext = {
    isPending: false,
    isError: false,
    isSuccess: false,
}

export const AnimeStateContext = createContext<IAnimeStateContext>(INITIAL_STATE);

export const AnimeActionContext = createContext<IAnimeActionContext | null>(null);
