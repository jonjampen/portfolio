<script>
	import { Moon, Palette, Sun } from 'lucide-svelte';
	
	function toggleTheme(e) {
		document.getElementById("body").classList.remove("dark");
		document.getElementById("body").classList.remove("green");
		document.getElementById("body").classList.remove("light");
		document.getElementById("body").classList.add(e.target.id);
		
		document.getElementById("darkIcon").classList.add("hidden");
		document.getElementById("greenIcon").classList.add("hidden");
		document.getElementById("lightIcon").classList.add("hidden");
		document.getElementById(e.target.id + "Icon").classList.remove("hidden");
		
		document.getElementById("picker").classList.toggle("hidden");
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
		<ul class="flex flex-col gap-3">
			<button on:click={(e) => toggleTheme(e)} id="dark">Dark</button>
			<button on:click={(e) => toggleTheme(e)} id="green">Green</button>
			<button on:click={(e) => toggleTheme(e)} id="light">Light</button>
		</ul>
	</div>
</div>