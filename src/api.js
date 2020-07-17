import axios from "axios";

const aKey = "7d5fb8b638a62957dfbecdb86edc6eb1"

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: aKey,
        language: "en-US"
    }
});

export const moviesApi = {
    nowPlaying: () => api.get("movie/now_playing", {
        params: {
            api_key: aKey
        }
    }),
    upcoming: () =>  api.get("movie/upcoming", {
        params: {
            api_key: aKey
        }
    }),
    popular: () => api.get("movie/popular", {
        params: {
            api_key: aKey
        }
    }),
    movieDetail: id => 
        api.get(`moive/${id}`, {
            params: {
                append_to_response: "videos"
            }
        }),
    search: term =>
        api.get("search/movie", {
            params: {
                query: encodeURIComponent(term)
            }
        })
};

export const tvApi = {
    topRated: () => api.get("tv/top_rated", {
        params: {
            api_key: aKey
        }
    }),
    popular: () => api.get("tv/popular", {
        params: {
            api_key: aKey
        }
    }),
    airingToday: () => api.get("tv/airing_today", {
        params: {
            api_key: aKey
        }
    }),
    showDetail: id =>
        api.get(`tv/${id}`, {
            params: {
                append_to_response: "videos"
            }
        }),
    search: term => 
        api.get("search/tv", {
            params: {
                query: encodeURIComponent(term)
            }
        })
}