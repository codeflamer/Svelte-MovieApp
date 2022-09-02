<script lang="ts">
	import HeroBg from '$lib/HeroBg.svelte';
	import MoviesContainer from '$lib/MoviesContainer.svelte';
	import type { Movies } from 'src/global';

	interface Data {
		movies: Movies;
	}
	// let variable: EnvVariable = import.meta.env.VITE_API_KEY;
	export let data: Data;
	console.log(data.movies);
</script>

<HeroBg firstMovie={data.movies.results[1]} />
<div class="container">
	<!-- <section class="later">Later Things</section> -->
	<section class="movies">
		<MoviesContainer movies={data.movies} />
	</section>
</div>

<style>
	.container {
		padding: 20px 30px;
	}

	.later {
		height: 100px;
		border: 1px solid red;
	}
	.movies {
		margin-top: 20px;
	}
</style>
