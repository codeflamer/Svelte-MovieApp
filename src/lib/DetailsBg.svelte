<script type="ts">
	import Button from './Button.svelte';
	import { Icon, Calendar, Clock } from 'svelte-hero-icons';
	import type { genreFormat, Movie, Results } from 'src/global';

	export let movie: Movie;
	console.log(movie);
</script>

<section class="hero-image">
	<img
		src="https://image.tmdb.org/t/p/original/{movie.backdrop_path}"
		alt="Hero pic"
		loading="lazy"
	/>
	<div class="description">
		<h2>{movie.title}</h2>
		<div class="ratings">
			<span>{movie.vote_average.toFixed(2)}</span>
			{#if movie.adult}
				<span>PG-18</span>
			{:else}
				<span>PG-13</span>
			{/if}
		</div>
		<div class="duration-genre">
			<span><Icon src={Clock} size="18" style="color:#cdc8c4" /> {movie.runtime}m</span>
			<div class="genre">
				{#each movie.genres as genre}
					<span>{genre.name}</span>
				{/each}
			</div>
		</div>
		<div class="details">
			<div>
				<p>Production(s):</p>
				<ul>
					{#each movie.production_companies as company}
						<li>{company.name}</li>
					{/each}
				</ul>
			</div>
			<div>
				<p>Release Date:</p>
				{movie.release_date}
			</div>
			<div>
				<p>Status:</p>
				{movie.status}
			</div>
			<div>
				<p>Country:</p>
				<ul>
					{#each movie.production_countries as country}
						<li>{country.name}</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
	<div class="black-blend" />
	<div class="summary">
		<div class="blender" />
		<p class="content">
			{movie.overview}
		</p>
	</div>
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
		max-width: 600px;
		position: absolute;
		top: 5vh;
		z-index: 2;
		margin: 30px;
		left: 0;
		border: 2px dashed #cdc8c4;
		backdrop-filter: blur(15px);
		padding: 20px 35px;
		border-radius: 15px;
		/* #78736e */
	}

	h2 {
		text-transform: uppercase;
		font-size: 50px;
		letter-spacing: 2px;
		margin-bottom: 25px;
	}
	.details {
		display: flex;
		flex-direction: column;
		gap: 15px;
		margin-top: 20px;
		margin-bottom: 30px;
	}
	.details div {
		display: flex;
		gap: 5px;
	}
	.details div p {
		font-weight: bold;
		letter-spacing: 1px;
	}
	span {
		padding: 8px 15px;
		display: flex;
		border-radius: 6px;
		gap: 5px;
	}
	span:hover {
		cursor: pointer;
	}
	.ratings {
		margin-bottom: 30px;
		display: flex;
		gap: 20px;
		font-size: 15px;
		color: #464543;
	}
	.ratings span {
		background-color: #cdc8c4;
	}

	.duration-genre {
		display: flex;
		gap: 30px;
		color: #cdc8c4;
		margin-bottom: 40px;
	}
	.genre {
		display: flex;
		gap: 20px;
	}

	.duration-genre span {
		background-color: #464543;
	}

	.summary {
		font-size: 17px;
		line-height: 28px;
		display: flex;
		justify-content: start;
		position: relative;
		top: 0px;
	}
	p.content {
		max-width: 600px;
		margin-top: 30px;
		padding: 0 40px;
	}

	.blender {
		position: absolute;
		height: 40px;
		width: 100%;
		box-shadow: 0px -15px 20px black;
	}

	li {
		margin-top: 6px;
		cursor: pointer;
	}
	li:first-child {
		margin-top: 0;
	}

	@media (max-width: 768px) {
		h2 {
			font-size: 30px;
			letter-spacing: 1px;
		}
		.description {
			width: auto;
			top: 2vh;
			overflow: hidden;
		}
		.duration-genre {
			gap: 10px;
			white-space: nowrap;
			align-items: center;
		}
	}
	@media (max-width: 580px) {
		h2 {
			font-size: 25px;
			letter-spacing: 1px;
		}
		.genre {
			flex-direction: column;
			gap: 8px;
		}
	}
	@media (max-width: 425px) {
		h2 {
			font-size: 28px;
			letter-spacing: 1px;
		}
		.description {
			font-size: 15px;
		}
	}
</style>
