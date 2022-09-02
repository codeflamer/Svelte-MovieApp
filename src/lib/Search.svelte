<script>
	import { Icon, Search } from 'svelte-hero-icons';
</script>

<div>
	<Icon src={Search} size="17" />
	<input type="text" placeholder="Search" />
</div>

<style>
	div {
		display: flex;
		align-items: center;
		border: 1px solid #c9c9c9;
		padding: 7px 7px;
		border-radius: 4px;
		gap: 8px;
		background-color: transparent;
		opacity: 0.8;
	}
	input[type='text'] {
		width: 100%;
		margin: 0;
		border: 0;
		outline: 0;
		background-color: transparent;
		color: #c9c9c9;
		font-size: 17px;
		position: relative;
		top: 1px;
	}
</style>
