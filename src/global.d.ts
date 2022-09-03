export interface EnvVariable {
	VITE_API_KEY: string;
}

export interface Results {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: float;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: float;
	vote_count: number;
}

export interface Movies {
	page: number;
	results: results[];
}

interface genreFormat {
	id: number;
	name: string;
}
export interface Genres {
	genres: genreFormat[];
}

export interface Movie {
	adult: boolean;
	backdrop_path: string;
	belongs_to_collection: null;
	genres: genreFormat[];
	id: number;
	imbd_id: string;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: float;
	poster_path: string;
	release_date: string;
	runtime: string;
	spoken_languages: {
		english_name: string;
	}[];
	status: string;
	title: string;
	vote_average: float;
	production_countries: { iso_3166_1: string; name: string }[];
	production_companies: { name: string }[];
	genres: genreFormat[];
}
