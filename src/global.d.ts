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
