<script lang="ts">
	import HeroBg from '$lib/HeroBg.svelte';
	import MoviesContainer from '$lib/MoviesContainer.svelte';
	import type { Movies } from 'src/global';

	interface Data {
		movies: Movies;
	}

	export let data: Data;
</script>

<HeroBg firstMovie={data.movies.results[1]} />
<div class="container">
	<section class="movies">
		<MoviesContainer movies={data.movies} />
	</section>
</div>

<style>
	.container {
		padding: 20px 30px;
	}

	.movies {
		margin-top: 20px;
	}

	@media (max-width: 425px) {
		.container {
			padding: 20px 10px;
		}
	}
</style>
