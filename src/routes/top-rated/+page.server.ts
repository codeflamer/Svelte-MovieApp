import { error } from '@sveltejs/kit';
import type { Movies } from 'src/global';

export async function load() {
	const res = await fetch(
		'https://api.themoviedb.org/3/movie/top_rated?api_key=35703dca2837ef4cd5b1fd4ca47151ce&language=en-US&page=1'
	);
	const movies: Movies = await res.json();
	// console.log(movies);
	if (res.ok) {
		return {
			movies
		};
	}

	throw error(500, 'Somethign went Wrong');
}
