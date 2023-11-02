<script>
	import '../app.css';
	import Navigation from '../components/Navigation.svelte';
</script>

<div class="flex flex-col items-center w-full">
	<div class="max-w-4xl w-full">
		<Navigation />
		<slot />
	</div>
</div>
