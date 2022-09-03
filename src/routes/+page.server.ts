import { error } from '@sveltejs/kit';
import type { EnvVariable, Movies } from 'src/global';

export async function load() {
	const variable: EnvVariable = import.meta.env.VITE_API_KEY;
	const res = await fetch(
		`https://api.themoviedb.org/3/movie/popular?api_key=${variable}&language=en-US&page=1`
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
