import { error } from '@sveltejs/kit';
import type { EnvVariable, Movie } from 'src/global';

interface Params {
	params: { id: string };
}

export async function load(value: Params) {
	const variable: EnvVariable = import.meta.env.VITE_API_KEY;
	const id = value.params.id;
	const res = await fetch(
		`https://api.themoviedb.org/3/movie/${id}?api_key=${variable}&language=en-US&page=1`
	);
	const movie: Movie = await res.json();
	// console.log(movies);
	if (res.ok) {
		return {
			movie
		};
	}

	throw error(500, 'Somethign went Wrong');
}
