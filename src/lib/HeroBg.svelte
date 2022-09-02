<script type="ts">
	import Button from './Button.svelte';
	import { Icon, Calendar, Clock } from 'svelte-hero-icons';
	import type { genreFormat, Results } from 'src/global';

	export let firstMovie: Results;

	const getGenres = async (): Promise<genreFormat> => {
		const res = await fetch(
			'https://api.themoviedb.org/3/genre/movie/list?api_key=35703dca2837ef4cd5b1fd4ca47151ce&language=en-US'
		);

		return await await res.json();
	};

	let genres = getGenres();
	// console.log(genres);
</script>

<section class="hero-image">
	<img
		src="https://image.tmdb.org/t/p/w500/{firstMovie.backdrop_path}"
		alt="Hero pic"
		loading="lazy"
	/>
	<div class="description">
		<h2>{firstMovie.title}</h2>
		<div class="details">
			<div>Action, Adventure</div>
			<span style="display:flex;align-items:center;gap:4px"
				><Icon src={Calendar} size="18" style="color:#6025a1" />1h 56m</span
			>
			<span style="display:flex;align-items:center;gap:4px"
				><Icon src={Clock} size="18" style="color:#6025a1" />{firstMovie.release_date}</span
			>
		</div>
		<div class="button">
			<Button name="View Details" />
		</div>
	</div>
	<div class="black-blend" />
</section>

<style>
	.hero-image {
		min-height: 70vh;
		position: relative;
	}
	img {
		height: 70vh;
		width: 100%;
	}
	.black-blend {
		height: 70vh;
		position: absolute;
		background-color: rgba(0, 0, 0, 0.4);
		width: 100%;
		top: 0;
	}
	.description {
		max-width: 500px;
		position: absolute;
		top: 130px;
		z-index: 2;
		left: 30px;
	}
	h2 {
		text-transform: uppercase;
		font-size: 60px;
		letter-spacing: 2px;
	}
	.details {
		display: flex;
		gap: 30px;
		margin-top: 20px;
		margin-bottom: 30px;
	}
	/* .button {
		width: 300px;
	} */
</style>
