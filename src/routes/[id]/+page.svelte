<script lang="ts">
	import DetailsBg from '$lib/DetailsBg.svelte';
	import type { Movie } from 'src/global';
	interface DataType {
		movie: Movie;
	}
	export let data: DataType;
	console.log(data.movie);
</script>

<div>
	<DetailsBg movie={data.movie} />
</div>

<style>
</style>
