<script>
	import { Icon, LocationMarker, Menu } from 'svelte-hero-icons';
	import Search from './Search.svelte';
</script>

<header>
	<nav>
		<div class="left-hand">
			<div class="logo"><a data-sveltekit-prefetch href="/">CodeFlamer</a></div>
			<div class="location"><Icon src={LocationMarker} size="18" />Russia</div>
		</div>
		<div class="search"><Search /></div>
		<ul>
			<li><a data-sveltekit-prefetch href="/">Popular</a></li>
			<li><a data-sveltekit-prefetch href="/coming-soon">Coming Soon</a></li>
			<li><a data-sveltekit-prefetch href="/top-rated">Top Rated</a></li>
		</ul>
		<div class="togglebar">
			<Icon src={Menu} size="20" />
		</div>
	</nav>
</header>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600&display=swap');
	header {
		background-color: #2e2e2e;
		overflow: hidden;
	}
	nav {
		display: flex;
		justify-content: space-between;
		gap: 30px;
		align-items: center;
		padding: 20px 20px;
		color: #c9c9c9;
		font-family: 'acumin-pro', 'Acumin Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
		/* max-width: 1500px; */
		margin: 0 auto;
	}
	ul {
		display: flex;
		justify-content: space-between;
		flex: 1;
		white-space: nowrap;
		max-width: 500px;
	}
	li {
		padding: 0 20px;
		transition: all 0.2s ease-in-out;
		text-decoration: none;
	}
	li:hover {
		cursor: pointer;
		color: white;
		scale: 1.1;
	}
	.togglebar {
		display: none;
	}
	.togglebar:hover {
		cursor: pointer;
	}
	.left-hand {
		display: flex;
		flex: 1;
		max-width: 300px;
		justify-content: space-between;
		/* border: 1px solid black; */
	}
	.search {
		flex: 2;
		max-width: 600px;
	}
	.location {
		display: flex;
		align-items: center;
		gap: 2px;
		font-weight: bold;
	}
	.logo {
		font-weight: bold;
		letter-spacing: 6px;
		font-family: 'Dancing Script', cursive;
		font-size: 20px;
	}
	@media (max-width: 768px) {
		.search {
			display: none;
		}
		.togglebar {
			display: flex;
		}
		ul {
			display: none;
		}
	}
</style>
