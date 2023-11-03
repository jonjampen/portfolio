<script>
	import { Check, Moon, Palette, Sun } from 'lucide-svelte';
	import { theme } from '../stores.js'
	let currentTheme = "";
	theme.subscribe((value) => currentTheme = value)

	let themes = ["dark", "green", "light"]
	
	function toggleTheme(e) {
		document.getElementById("darkIcon").classList.add("hidden");
		document.getElementById("greenIcon").classList.add("hidden");
		document.getElementById("lightIcon").classList.add("hidden");
		document.getElementById(e.target.id + "Icon").classList.remove("hidden");
		
		theme.set(e.target.id);
		toggleThemePicker();
	}

	function toggleThemePicker() {
		document.getElementById("picker").classList.toggle("hidden");
	}


</script>

<div class="relative">
	<button on:click={toggleThemePicker}><Sun class="text-foreground h-6 w-6 cursor-pointer" id="lightIcon" /></button>
	<button on:click={toggleThemePicker}><Palette class="text-foreground h-6 w-6 cursor-pointer hidden" id="greenIcon" /></button>
	<button on:click={toggleThemePicker}><Moon class="text-foreground h-6 w-6 cursor-pointer hidden" id="darkIcon" /></button>

	<div class="bg-card text-card-foreground px-3 py-3 w-24 absolute top-7 right-0 rounded hidden" id="picker">
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
						<!-- 

				<button on:click={(e) => toggleTheme(e)} id="dark">Dark</button>
				<button on:click={(e) => toggleTheme(e)} id="green">Green</button>
				<button on:click={(e) => toggleTheme(e)} id="light">Light</button>
			-->
			</ul>
	</div>
</div>