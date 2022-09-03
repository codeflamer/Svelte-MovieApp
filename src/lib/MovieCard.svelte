<script type="ts">
	import type { Results } from 'src/global';
	import { Icon, Heart, Star } from 'svelte-hero-icons';

	import Button from './Button.svelte';

	export let movie: Results;
</script>

<div class="card">
	<div class="detail-holder">
		<div class="rating">
			<span class="star-container"><Icon src={Star} size="18" style="color:white" /> 7.9</span>
			<span>18+</span>
		</div>
		<Icon src={Heart} size="25" style="color:white" />
	</div>
	<div class="image-container">
		<img src="https://image.tmdb.org/t/p/w500/{movie.poster_path}" alt="Movie pic" loading="lazy" />
	</div>
	<div class="bottom">
		<!-- <p>{movie.title}</p> -->
		<div class="button">
			<a data-sveltekit-prefetch href="/{movie.id}"><Button name="View Details" /></a>
		</div>
	</div>
</div>

<style>
	.card {
		position: relative;
		border-radius: 15px;
	}
	.detail-holder {
		position: absolute;
		background-color: rgba(0, 0, 0, 0.1);
		height: 100%;
		width: 100%;
		transition: all 0.2s;
		display: flex;
		justify-content: space-between;
		padding: 10px 15px;
	}
	.card:hover .detail-holder {
		background-color: rgba(0, 0, 0, 0.5);
		cursor: pointer;
	}
	/* .card:hover p {
		display: none;
	} */
	.card:hover .button {
		display: block;
	}

	.image-container img {
		height: 250px;
		width: 100%;
		border-radius: 15px;
	}
	.rating {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}
	.rating span {
		border: 1px solid white;
		text-align: center;
		border-radius: 10px;
		padding: 2px;
		font-size: 14px;
	}
	.bottom {
		position: absolute;
		text-align: center;
		width: 100%;
		bottom: 20px;
	}
	/* p {
		font-size: 20px;
		font-weight: bold;
		font-family: 'Courier New', Courier, monospace;
		letter-spacing: 2px;
		overflow: text-wrap;
	} */
	.button {
		display: none;
		width: 200px;
		margin: 0 auto;
		z-index: 2;
	}

	.star-container {
		display: flex;
		align-items: center;
	}
</style>
