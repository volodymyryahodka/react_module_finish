import {keyApi} from "./URL_KEY";

export const urls = {
	movies: (page) => `/discover/movie?sort_by=popularity.desc&api_key=${keyApi}&page=${page}`,
	oneMovie: (id) => `/movie/${id}?api_key=${keyApi}`,
	genres: `/genre/movie/list?api_key=${keyApi}`,
	genresFilter: (id, page) => `/discover/movie?&language=uk-UK&api_key=${keyApi}&with_genres=${id}&page=${page}`,
};
