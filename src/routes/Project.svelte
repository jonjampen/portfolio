<script>
	export let project;
</script>

<div class="project">
	<div class="project-image">
		<img src="/fatiguediary.png" alt="" />
	</div>
	<h3>{project.title}</h3>
	<p>{project.description}</p>

	<div class="links">
		<button class="btn primary">Read More</button>
		<div class="icons">
			<a href={project.links.website} target="_blank">
				<img src="/icons/external.svg" alt="Live version of the Project" class="icon" />
			</a>
			<a href={project.links.github} target="_blank">
				<img src="/icons/github.svg" alt="Project on GitHub" class="icon" />
			</a>
		</div>
	</div>
</div>
