<script>
	import { Check, Moon, Palette, Sun } from 'lucide-svelte';
	import { theme } from '../stores.js'
	import Icon from './ui/Icon.svelte';

	let currentTheme = "";
	theme.subscribe((value) => currentTheme = value)

	let themes = ["dark", "green", "light"]

	let isToggleOpen = false;
	
	function toggleTheme(e) {
		document.getElementById("darkIcon").classList.add("hidden");
		document.getElementById("greenIcon").classList.add("hidden");
		document.getElementById("lightIcon").classList.add("hidden");
		document.getElementById(e.target.id + "Icon").classList.remove("hidden");
		
		theme.set(e.target.id);
		toggleThemePicker();
	}
	
	function toggleThemePicker() {
		isToggleOpen = !isToggleOpen;
	}


</script>

<div class="relative h-6 w-6 {$$props.class}">
	<Icon handleClick={toggleThemePicker} class="absolute top-0 left-0"><Sun class="text-foreground h-6 w-6 cursor-pointer" id="lightIcon" /></Icon>
	<Icon handleClick={toggleThemePicker} class="absolute top-0 left-0"><Palette class="text-foreground h-6 w-6 cursor-pointer hidden" id="greenIcon" /></Icon>
	<Icon handleClick={toggleThemePicker} class="absolute top-0 left-0"><Moon class="text-foreground h-6 w-6 cursor-pointer hidden" id="darkIcon" /></Icon>

	<div class="bg-card text-card-foreground px-3 py-3 w-24 absolute top-7 right-0 rounded" class:hidden={!isToggleOpen} id="picker">
		<ul class="flex flex-col items-start gap-3">
			{#each themes as themeOption}
				{#if themeOption === currentTheme}
					<div class="flex gap-2">
						<Check />
						<button on:click={(e) => toggleTheme(e)} id={themeOption}>{themeOption}</button>
					</div>
				{:else}
					<button on:click={(e) => toggleTheme(e)} class="pl-8" id={themeOption}>{themeOption}</button>
				{/if}
			{/each}
		</ul>
	</div>
</div>