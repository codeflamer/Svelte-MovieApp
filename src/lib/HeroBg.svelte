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
		src="https://image.tmdb.org/t/p/original/{firstMovie.backdrop_path}"
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
			<a data-sveltekit-prefetch href="/{firstMovie.id}"><Button name="View Details" /></a>
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
		top: 15vh;
		z-index: 2;
		margin: 30px;
		left: 0;
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
	.button {
		max-width: 500px;
	}

	@media (max-width: 768px) {
		.description {
			top: 15vh;
		}
		h2 {
			font-size: 40px;
			letter-spacing: 1px;
		}
	}
	@media (max-width: 425px) {
		h2 {
			font-size: 35px;
			letter-spacing: 1px;
		}
		.description {
			font-size: 15px;
		}
	}
</style>
