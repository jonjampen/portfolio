<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import { getLocale, localizeHref } from '$lib/paraglide/runtime';
	import Avatar from '$lib/components/Avatar.svelte';
	import HexConverter from '$lib/components/HexConverter.svelte';

	// Import all project markdown files eagerly to extract frontmatter
	const projectModules = import.meta.glob('/src/lib/projects/**/*.md', { eager: true });

	// Get current active locale (en / de-ch)
	let activeLocale = $derived(getLocale());

	// Derive dynamic list of projects with fallback to English if translation is missing
	let projectsList = $derived(() => {
		const list: Record<string, any> = {};

		// 1. Load English projects first as a baseline
		for (const [path, module] of Object.entries(projectModules)) {
			const parts = path.split('/');
			const fileLocale = parts[4];
			const slug = parts[5].replace('.md', '');
			const mod = module as any;

			if (fileLocale === 'en') {
				list[slug] = {
					slug,
					locale: 'en',
					...mod.metadata
				};
			}
		}

		// 2. Overwrite with active locale version if it exists and is not 'en'
		if (activeLocale !== 'en') {
			for (const [path, module] of Object.entries(projectModules)) {
				const parts = path.split('/');
				const fileLocale = parts[4];
				const slug = parts[5].replace('.md', '');
				const mod = module as any;

				if (fileLocale === activeLocale) {
					list[slug] = {
						slug,
						locale: fileLocale,
						...mod.metadata
					};
				}
			}
		}

		// Sort by order metadata
		return Object.values(list).sort((a: any, b: any) => (a.order || 0) - (b.order || 0));
	});

	// Derived featured and other projects
	let featuredProjects = $derived(projectsList().filter((p) => p.priority === 'featured'));
	let otherProjects = $derived(projectsList().filter((p) => p.priority === 'other'));

	// Active filter tag for featured projects
	let projectFilter = $state('all');

	const allProjectTags = [
		'all',
		'Next.js',
		'React',
		'SvelteKit',
		'Go',
		'Ruby on Rails',
		'TypeScript'
	];
</script>

<div class="flex flex-col gap-24 pb-16 md:gap-32">
	<!-- Hero Section -->
	<section id="hero" class="animate-fade-in flex scroll-mt-24 flex-col gap-12 pt-8 md:pt-16">
		<div class="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
			<!-- Intro Info -->
			<div class="flex flex-col gap-6 text-left md:col-span-7">
				<div
					class="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary select-none"
				>
					<span class="h-1.5 w-1.5 animate-ping rounded-full bg-primary"></span>
					{m.hero_subtitle()}
				</div>

				<h1
					class="font-display text-4xl leading-tight font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
				>
					{m.hero_title()}
				</h1>

				<p class="text-neutral-450 max-w-xl font-sans text-base leading-relaxed sm:text-lg">
					{m.hero_intro()}
				</p>

				<!-- Professional Action Buttons -->
				<div class="mt-4 flex flex-wrap gap-4">
					<!-- Email Button -->
					<a
						href="mailto:hello@jonjampen.ch"
						class="flex items-center gap-2.5 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-[0_0_20px_var(--color-primary-glow)] transition-all select-none hover:scale-[1.02] hover:bg-primary/90 hover:shadow-[0_0_25px_var(--color-primary-glow)] active:scale-98"
					>
						<svg
							class="h-4 w-4"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<rect width="20" height="16" x="2" y="4" rx="2" /><path
								d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
							/>
						</svg>
						hello@jonjampen.ch
					</a>

					<!-- GitHub Button -->
					<a
						href="https://github.com/jonjampen"
						target="_blank"
						rel="noopener noreferrer"
						class="hover:bg-neutral-850 flex items-center gap-2.5 rounded-xl border border-neutral-800 bg-neutral-900 px-5 py-3 text-sm font-semibold text-neutral-200 transition-all select-none hover:scale-[1.02] hover:border-neutral-700 hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.03)] active:scale-98"
					>
						<svg
							class="h-4 w-4"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path
								d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
							/><path d="M9 18c-4.51 2-5-2-7-2" />
						</svg>
						GitHub
					</a>

					<!-- LinkedIn Button -->
					<a
						href="https://linkedin.com/in/jonjampen"
						target="_blank"
						rel="noopener noreferrer"
						class="hover:bg-neutral-850 flex items-center gap-2.5 rounded-xl border border-neutral-800 bg-neutral-900 px-5 py-3 text-sm font-semibold text-neutral-200 transition-all select-none hover:scale-[1.02] hover:border-neutral-700 hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.03)] active:scale-98"
					>
						<svg
							class="h-4 w-4"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path
								d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
							/><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
						</svg>
						LinkedIn
					</a>
				</div>
			</div>

			<!-- Avatar Graphic -->
			<div class="flex justify-center md:col-span-5 md:justify-end">
				<Avatar />
			</div>
		</div>
	</section>

	<!-- About Me Section -->
	<section id="about" class="flex scroll-mt-24 flex-col gap-12">
		<div class="flex flex-col gap-3 text-left">
			<h2 class="font-display text-3xl font-extrabold tracking-tight text-white md:text-4xl">
				{m.about_title()}
			</h2>
			<p class="max-w-xl text-sm leading-relaxed text-neutral-400 md:text-base">
				{m.about_subtitle()}
			</p>
		</div>

		<div class="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
			<!-- Bio Texts -->
			<div
				class="text-neutral-350 flex flex-col gap-6 font-sans text-sm leading-relaxed md:text-base lg:col-span-6"
			>
				<p>{@html m.about_p1()}</p>

				<div class="mt-2 flex flex-wrap gap-4">
					<!-- Uses Button -->
					<a
						href={localizeHref('/uses')}
						class="flex items-center gap-2.5 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-[0_4px_20px_var(--color-primary-glow)] transition-all select-none hover:scale-[1.02] hover:bg-primary/90 active:scale-98"
					>
						<svg
							class="h-4 w-4"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<rect width="20" height="14" x="2" y="3" rx="2" /><line
								x1="8"
								x2="16"
								y1="21"
								y2="21"
							/><line x1="12" x2="12" y1="17" y2="21" />
						</svg>
						{activeLocale === 'de-ch' ? 'Ausrüstung' : 'Uses'}
					</a>

					<!-- Dotfiles Button -->
					<a
						href="https://github.com/jonjampen/.dotfiles"
						target="_blank"
						rel="noopener noreferrer"
						class="hover:bg-neutral-850 flex items-center gap-2.5 rounded-xl border border-neutral-800 bg-neutral-900 px-5 py-3 text-sm font-semibold text-neutral-200 transition-all select-none hover:scale-[1.02] hover:border-neutral-700 hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.03)] active:scale-98"
					>
						<svg
							class="h-4 w-4"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path
								d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
							/>
						</svg>
						{activeLocale === 'de-ch' ? 'Mein .dotfiles Repo' : 'My .dotfiles Repo'}
					</a>
				</div>
			</div>

			<!-- Hobbies Grid -->
			<div class="flex flex-col gap-4 lg:col-span-6">
				<h3 class="mb-2 font-display text-base font-bold text-neutral-300">
					{m.about_hobbies_title()}
				</h3>

				<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
					<!-- Web Dev Hobby -->
					<div
						class="flex flex-col gap-2 rounded-xl border border-neutral-900 bg-neutral-900/35 p-4 transition-all hover:border-neutral-800"
					>
						<div class="flex items-center gap-2">
							<div
								class="flex h-7 w-7 items-center justify-center rounded border border-primary/20 bg-primary/10 text-primary"
							>
								<svg
									class="h-4 w-4"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
								</svg>
							</div>
							<span class="text-xs font-semibold text-neutral-200">{m.about_hobby_web()}</span>
						</div>
						<span class="text-[10px] leading-normal text-neutral-500"
							>{m.about_hobby_web_desc()}</span
						>
					</div>

					<!-- Linux Customizing Hobby -->
					<div
						class="flex flex-col gap-2 rounded-xl border border-neutral-900 bg-neutral-900/35 p-4 transition-all hover:border-neutral-800"
					>
						<div class="flex items-center gap-2">
							<div
								class="flex h-7 w-7 items-center justify-center rounded border border-primary/20 bg-primary/10 text-primary"
							>
								<svg
									class="h-4 w-4"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<rect width="20" height="12" x="2" y="4" rx="2" /><line
										x1="6"
										x2="6.01"
										y1="12"
										y2="12"
									/><line x1="10" x2="18" y1="12" y2="12" />
								</svg>
							</div>
							<span class="text-xs font-semibold text-neutral-200">{m.about_hobby_linux()}</span>
						</div>
						<span class="text-[10px] leading-normal text-neutral-500"
							>{m.about_hobby_linux_desc()}</span
						>
					</div>

					<!-- Climbing Hobby -->
					<div
						class="flex flex-col gap-2 rounded-xl border border-neutral-900 bg-neutral-900/35 p-4 transition-all hover:border-neutral-800"
					>
						<div class="flex items-center gap-2">
							<div
								class="flex h-7 w-7 items-center justify-center rounded border border-primary/20 bg-primary/10 text-primary"
							>
								<svg
									class="h-4 w-4"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path d="m19 14-3.4-3.4a1.82 1.82 0 0 0-2.6 0L9.4 14" /><path
										d="m14 10-1.4-1.4a1.82 1.82 0 0 0-2.6 0L6 12"
									/><circle cx="12" cy="18" r="4" />
								</svg>
							</div>
							<span class="text-xs font-semibold text-neutral-200">{m.about_hobby_climbing()}</span>
						</div>
						<span class="text-[10px] leading-normal text-neutral-500"
							>{m.about_hobby_climbing_desc()}</span
						>
					</div>

					<!-- Games Hobby -->
					<div
						class="flex flex-col gap-2 rounded-xl border border-neutral-900 bg-neutral-900/35 p-4 transition-all hover:border-neutral-800"
					>
						<div class="flex items-center gap-2">
							<div
								class="flex h-7 w-7 items-center justify-center rounded border border-primary/20 bg-primary/10 text-primary"
							>
								<svg
									class="h-4 w-4"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle
										cx="8.5"
										cy="8.5"
										r="1.5"
									/><circle cx="15.5" cy="8.5" r="1.5" /><circle
										cx="15.5"
										cy="15.5"
										r="1.5"
									/><circle cx="8.5" cy="15.5" r="1.5" /><circle cx="12" cy="12" r="1.5" />
								</svg>
							</div>
							<span class="text-xs font-semibold text-neutral-200">{m.about_hobby_games()}</span>
						</div>
						<span class="text-[10px] leading-normal text-neutral-500"
							>{m.about_hobby_games_desc()}</span
						>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Projects Section -->
	<section id="projects" class="flex scroll-mt-24 flex-col gap-8">
		<div class="flex flex-col gap-3 text-left">
			<h2 class="font-display text-3xl font-extrabold tracking-tight text-white md:text-4xl">
				{m.proj_title()}
			</h2>
			<p class="max-w-xl text-sm leading-relaxed text-neutral-400 md:text-base">
				{m.proj_subtitle()}
			</p>
		</div>

		<!-- Filter Pills -->
		<div class="flex flex-wrap gap-2">
			{#each allProjectTags as tag}
				<button
					onclick={() => (projectFilter = tag)}
					class="cursor-pointer rounded-full border px-3.5 py-1.5 text-xs font-medium capitalize transition-all {projectFilter ===
					tag
						? 'border-primary bg-primary text-white shadow-[0_0_10px_var(--color-primary-border)]'
						: 'hover:text-neutral-250 border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:border-neutral-700'}"
				>
					{tag === 'all' ? 'All' : tag}
				</button>
			{/each}
		</div>

		<!-- Projects Grid -->
		<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each featuredProjects as project}
				{#if projectFilter === 'all' || project.tags.includes(projectFilter)}
					<a
						href={localizeHref('/projects/' + project.slug)}
						class="glow-card group block flex cursor-pointer flex-col justify-between gap-6 rounded-2xl p-6"
					>
						<div class="flex flex-col gap-4">
							<div class="flex items-center justify-between">
								<span class="font-mono text-[10px] font-bold tracking-widest text-primary uppercase"
									>{project.tags[0] || 'Project'}</span
								>
								{#if project.github}
									<button
										type="button"
										class="text-neutral-500 transition-colors hover:text-white cursor-pointer bg-transparent border-0 p-0"
										onclick={(e) => {
											e.preventDefault();
											e.stopPropagation();
											window.open(project.github, '_blank', 'noopener,noreferrer');
										}}
										aria-label="GitHub Repository"
									>
										<svg
											class="h-4 w-4"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										>
											<path
												d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
											/><path d="M9 18c-4.51 2-5-2-7-2" />
										</svg>
									</button>
								{/if}
							</div>

							<h3
								class="font-display text-xl font-bold text-neutral-100 transition-colors group-hover:text-primary"
							>
								{project.title}
							</h3>

							<p class="font-sans text-xs leading-relaxed text-neutral-400">
								{project.summary}
							</p>

							{#if project.impact}
								<div
									class="rounded-lg border border-primary/10 bg-primary/5 p-3 text-xs font-medium text-primary"
								>
									{project.impact}
								</div>
							{/if}
						</div>

						<div class="flex flex-wrap gap-1.5">
							{#each project.tags as tag}
								<span
									class="border-neutral-850 rounded border bg-neutral-900 px-2 py-0.5 text-[9px] text-neutral-400"
									>{tag}</span
								>
							{/each}
						</div>
					</a>
				{/if}
			{/each}
		</div>

		<!-- Other Projects Section -->
		<div class="mt-4 flex flex-col gap-6 border-t border-neutral-900 pt-8">
			<h3 class="font-display text-lg font-bold text-neutral-300">
				{m.proj_other_title()}
			</h3>

			<div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
				{#each otherProjects as project}
					<a
						href={localizeHref('/projects/' + project.slug)}
						class="group block flex cursor-pointer flex-col gap-2 rounded-xl border border-neutral-900 bg-neutral-900/35 p-4 transition-all hover:scale-[1.02] hover:border-neutral-800 active:scale-98"
					>
						<span
							class="text-xs font-semibold text-neutral-200 transition-colors group-hover:text-primary"
							>{project.title}</span
						>
						<span class="font-mono text-[10px] text-neutral-500">{project.tags.join(' / ')}</span>
					</a>
				{/each}
			</div>
		</div>
	</section>

	<!-- Experience Section -->
	<section id="experience" class="flex scroll-mt-24 flex-col gap-12">
		<div class="flex flex-col gap-3 text-left">
			<h2 class="font-display text-3xl font-extrabold tracking-tight text-white md:text-4xl">
				{m.exp_title()}
			</h2>
			<p class="max-w-xl text-sm leading-relaxed text-neutral-400 md:text-base">
				{m.exp_subtitle()}
			</p>
		</div>

		<!-- Timeline Layout -->
		<div class="timeline-line flex flex-col gap-10 pl-8">
			<!-- Hilfsassistent -->
			<div class="group relative">
				<!-- Bullet dot -->
				<div
					class="absolute top-1.5 -left-[41px] flex h-6 w-6 items-center justify-center rounded-full border-4 border-neutral-950 bg-neutral-900 transition-all duration-300 group-hover:border-primary/20 group-hover:bg-primary"
				>
					<span class="h-1.5 w-1.5 rounded-full bg-neutral-600 group-hover:bg-white"></span>
				</div>

				<div class="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
					<div class="flex flex-col">
						<h3
							class="font-display text-lg font-bold text-neutral-100 transition-colors group-hover:text-primary"
						>
							{m.exp_ta_title()}
						</h3>
						<span class="text-xs font-semibold text-neutral-400">{m.exp_ta_company()}</span>
					</div>
					<span
						class="border-neutral-850 w-fit rounded-md border bg-neutral-900 px-2.5 py-1 font-mono text-xs text-neutral-500"
					>
						2026
					</span>
				</div>
				<p class="mt-3 max-w-2xl font-sans text-xs leading-relaxed text-neutral-400">
					{m.exp_ta_desc()}
				</p>
			</div>

			<!-- Internship -->
			<div class="group relative">
				<!-- Bullet dot -->
				<div
					class="absolute top-1.5 -left-[41px] flex h-6 w-6 items-center justify-center rounded-full border-4 border-neutral-950 bg-neutral-900 transition-all duration-300 group-hover:border-primary/20 group-hover:bg-primary"
				>
					<span class="h-1.5 w-1.5 rounded-full bg-neutral-600 group-hover:bg-white"></span>
				</div>

				<div class="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
					<div class="flex flex-col">
						<h3
							class="font-display text-lg font-bold text-neutral-100 transition-colors group-hover:text-primary"
						>
							{m.exp_intern_title()}
						</h3>
						<span class="text-xs font-semibold text-neutral-400">{m.exp_intern_company()}</span>
					</div>
					<span
						class="border-neutral-850 w-fit rounded-md border bg-neutral-900 px-2.5 py-1 font-mono text-xs text-neutral-500"
					>
						2026
					</span>
				</div>
				<p class="mt-3 max-w-2xl font-sans text-xs leading-relaxed text-neutral-400">
					{m.exp_intern_desc()}
				</p>
			</div>

			<!-- Freelance -->
			<div class="group relative">
				<!-- Bullet dot -->
				<div
					class="absolute top-1.5 -left-[41px] flex h-6 w-6 items-center justify-center rounded-full border-4 border-neutral-950 bg-neutral-900 transition-all duration-300 group-hover:border-primary/20 group-hover:bg-primary"
				>
					<span class="h-1.5 w-1.5 rounded-full bg-neutral-600 group-hover:bg-white"></span>
				</div>

				<div class="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
					<div class="flex flex-col">
						<h3
							class="font-display text-lg font-bold text-neutral-100 transition-colors group-hover:text-primary"
						>
							{m.exp_freelance_title()}
						</h3>
						<span class="text-xs font-semibold text-neutral-400">SvelteKit, WordPress</span>
					</div>
					<span
						class="border-neutral-850 w-fit rounded-md border bg-neutral-900 px-2.5 py-1 font-mono text-xs text-neutral-500"
					>
						2024
					</span>
				</div>
				<p class="mt-3 max-w-2xl font-sans text-xs leading-relaxed text-neutral-400">
					{m.exp_freelance_desc()}
				</p>
			</div>

			<!-- Tutor -->
			<div class="group relative">
				<!-- Bullet dot -->
				<div
					class="absolute top-1.5 -left-[41px] flex h-6 w-6 items-center justify-center rounded-full border-4 border-neutral-950 bg-neutral-900 transition-all duration-300 group-hover:border-primary/20 group-hover:bg-primary"
				>
					<span class="h-1.5 w-1.5 rounded-full bg-neutral-600 group-hover:bg-white"></span>
				</div>

				<div class="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
					<div class="flex flex-col">
						<h3
							class="font-display text-lg font-bold text-neutral-100 transition-colors group-hover:text-primary"
						>
							{m.exp_tutor_title()}
						</h3>
						<span class="text-xs font-semibold text-neutral-400">{m.exp_tutor_level()}</span>
					</div>
					<span
						class="border-neutral-850 w-fit rounded-md border bg-neutral-900 px-2.5 py-1 font-mono text-xs text-neutral-500"
					>
						seit 2024
					</span>
				</div>
				<p class="mt-3 max-w-2xl font-sans text-xs leading-relaxed text-neutral-400">
					{m.exp_tutor_desc()}
				</p>
			</div>
		</div>
	</section>

	<!-- Education Section -->
	<section id="education" class="flex scroll-mt-24 flex-col gap-12">
		<div class="flex flex-col gap-3 text-left">
			<h2 class="font-display text-3xl font-extrabold tracking-tight text-white md:text-4xl">
				{m.edu_title()}
			</h2>
			<p class="max-w-xl text-sm leading-relaxed text-neutral-400 md:text-base">
				{m.edu_subtitle()}
			</p>
		</div>

		<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
			<!-- BSc CS -->
			<div class="glow-card flex flex-col gap-4 rounded-2xl p-6 md:p-8">
				<div class="flex items-center justify-between border-b border-neutral-900 pb-4">
					<div class="flex flex-col">
						<h3 class="font-display text-lg font-bold text-neutral-100">{m.edu_bsc_title()}</h3>
						<span class="text-xs font-semibold text-primary">{m.edu_bsc_school()}</span>
					</div>
					<span
						class="rounded-md border border-neutral-900 bg-neutral-950 px-2.5 py-1 font-mono text-[10px] text-neutral-500"
						>seit 2024</span
					>
				</div>
				<p class="font-sans text-xs leading-relaxed text-neutral-400">
					{m.edu_bsc_desc()}
				</p>
			</div>

			<!-- Matura -->
			<div class="glow-card flex flex-col gap-4 rounded-2xl p-6 md:p-8">
				<div class="flex items-center justify-between border-b border-neutral-900 pb-4">
					<div class="flex flex-col">
						<h3 class="font-display text-lg font-bold text-neutral-100">{m.edu_matura_title()}</h3>
						<span class="text-xs font-semibold text-primary">{m.edu_matura_school()}</span>
					</div>
					<span
						class="rounded-md border border-neutral-900 bg-neutral-950 px-2.5 py-1 font-mono text-[10px] text-neutral-500"
						>2019 - 2023</span
					>
				</div>
				<p class="font-sans text-xs leading-relaxed text-neutral-400">
					{m.edu_matura_desc()}
				</p>
			</div>
		</div>
	</section>

	<!-- Contact Section -->
	<section id="contact" class="flex scroll-mt-24 flex-col gap-12">
		<div class="flex flex-col gap-3 text-left">
			<h2 class="font-display text-3xl font-extrabold tracking-tight text-white md:text-4xl">
				{m.contact_title()}
			</h2>
			<p class="max-w-xl text-sm leading-relaxed text-neutral-400 md:text-base">
				{m.contact_subtitle()}
			</p>
		</div>

		<!-- Spacious Contact Cards Grid -->
		<div class="grid w-full grid-cols-1 gap-6 sm:grid-cols-3">
			<!-- Email Card -->
			<a
				href="mailto:hello@jonjampen.ch"
				class="glow-card group block flex cursor-pointer flex-col items-center gap-4 rounded-2xl p-8 text-center"
			>
				<div
					class="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110"
				>
					<svg
						class="h-6 w-6"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<rect width="20" height="16" x="2" y="4" rx="2" /><path
							d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
						/>
					</svg>
				</div>
				<div class="flex flex-col gap-1">
					<span class="font-mono text-xs font-bold tracking-wider text-neutral-500 uppercase"
						>{m.contact_email()}</span
					>
					<span
						class="text-sm font-semibold text-neutral-200 transition-colors group-hover:text-primary"
						>hello@jonjampen.ch</span
					>
				</div>
			</a>

			<!-- GitHub Card -->
			<a
				href="https://github.com/jonjampen"
				target="_blank"
				rel="noopener noreferrer"
				class="glow-card group block flex cursor-pointer flex-col items-center gap-4 rounded-2xl p-8 text-center"
			>
				<div
					class="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110"
				>
					<svg
						class="h-6 w-6"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path
							d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
						/><path d="M9 18c-4.51 2-5-2-7-2" />
					</svg>
				</div>
				<div class="flex flex-col gap-1">
					<span class="font-mono text-xs font-bold tracking-wider text-neutral-500 uppercase"
						>{m.contact_github()}</span
					>
					<span
						class="text-sm font-semibold text-neutral-200 transition-colors group-hover:text-primary"
						>github.com/jonjampen</span
					>
				</div>
			</a>

			<!-- LinkedIn Card -->
			<a
				href="https://linkedin.com/in/jonjampen"
				target="_blank"
				rel="noopener noreferrer"
				class="glow-card group block flex cursor-pointer flex-col items-center gap-4 rounded-2xl p-8 text-center"
			>
				<div
					class="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110"
				>
					<svg
						class="h-6 w-6"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path
							d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
						/><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
					</svg>
				</div>
				<div class="flex flex-col gap-1">
					<span class="font-mono text-xs font-bold tracking-wider text-neutral-500 uppercase"
						>{m.contact_linkedin()}</span
					>
					<span
						class="text-sm font-semibold text-neutral-200 transition-colors group-hover:text-primary"
						>linkedin.com/in/jonjampen</span
					>
				</div>
			</a>
		</div>
	</section>

	<!-- Interactive Theme Picker Section (at the very bottom) -->
	<section id="theme-picker" class="flex flex-col gap-8 border-t border-neutral-900 pt-16">
		<div class="w-full">
			<HexConverter />
		</div>
	</section>
</div>
