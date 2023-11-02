<script>
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import Navigation from '../components/Navigation.svelte';
</script>

<div class="flex flex-col items-center w-full justify-between min-h-screen">
	<div class="max-w-4xl w-full">
		<Navigation />
		<slot />
	</div>
	<Footer/>
</div>
