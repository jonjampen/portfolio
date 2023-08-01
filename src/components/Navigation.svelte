<script>
	function closeNav() {
		document.getElementById('NavItemsContainer').classList.add('hidden-content');
		document.getElementById('close').classList.add('hidden');
		document.getElementById('open').classList.remove('hidden');
	}
	function openNav() {
		document.getElementById('NavItemsContainer').classList.remove('hidden-content');
		document.getElementById('close').classList.remove('hidden');
		document.getElementById('open').classList.add('hidden');
	}
</script>

<nav>
	<span><a href="/">Jon Jampen</a></span>
	<img src="/icons/close.svg" id="close" on:click={closeNav} class="icon hidden" alt="" />
	<img src="/icons/menu.svg" id="open" on:click={openNav} class="icon" alt="" />
	<ul id="NavItemsContainer" class="hidden-content">
		<li><a href="/">Home</a></li>
		<li><a href="/projects">Projects</a></li>
		<li><a href="/#contact">Contact</a></li>
		<li>
			<a href="https://www.github.com/jonjampen/" target="_blank">
				<img src="/icons/github.svg" alt="Project on GitHub" class="icon-link" />
			</a>
		</li>
	</ul>
</nav>
