<script lang="ts">
	import type { Movies } from 'src/global';

	import MovieCard from './MovieCard.svelte';
	export let movies: Movies;
</script>

<div class="movie-container">
	{#each movies.results as movie}
		<MovieCard {movie} />
	{/each}
</div>

<style>
	.movie-container {
		display: grid;
		grid-gap: 20px;
		grid-template-columns: repeat(4, 1fr);
	}
	@media (max-width: 768px) {
		.movie-container {
			grid-gap: 10px;
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>
