<script lang="ts">
	export let name: string = 'Namee';
</script>

<button type="button">
	{name}
</button>

<style>
	button {
		background-color: #6025a1;
		border: 0;
		outline: 0;
		padding: 12px 17px;
		color: white;
		border-radius: 5px;
		font-family: 'Courier New', Courier, monospace;
		font-size: 16px;
		font-weight: bold;
		width: 100%;
		transition: all 0.2s;
	}
	button:hover {
		cursor: pointer;
		opacity: 0.9;
	}
	@media (max-width: 425px) {
		button {
			font-size: 15px;
			padding: 10px 10px;
		}
	}
</style>
