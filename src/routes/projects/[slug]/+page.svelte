<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import { localizeHref } from '$lib/paraglide/runtime';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const Content = $derived(data.content);
	const metadata = $derived(data.metadata);
</script>

<svelte:head>
	<title>{metadata.title} — Jon Jampen</title>
</svelte:head>

<div class="animate-fade-in mx-auto flex max-w-4xl flex-col gap-8 py-8">
	<!-- Back Button -->
	<div>
		<a
			href={localizeHref('/') + '#projects'}
			class="inline-flex items-center gap-2 font-mono text-xs font-semibold text-neutral-400 transition-colors select-none hover:text-primary"
		>
			{m.proj_back()}
		</a>
	</div>

	<!-- Project Header Card -->
	<div
		class="relative flex flex-col gap-6 overflow-hidden rounded-2xl bg-neutral-900/20 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_30px_var(--color-primary-glow)] md:p-8"
	>
		<div
			class="pointer-events-none absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-primary/5 blur-[80px]"
		></div>

		<div class="flex flex-col gap-3">
			<h1
				class="font-display text-3xl leading-tight font-extrabold tracking-tight text-white md:text-4xl"
			>
				{metadata.title}
			</h1>
			<p class="text-neutral-450 max-w-2xl font-sans text-sm leading-relaxed md:text-base">
				{metadata.summary}
			</p>
		</div>

		<!-- Details/Tags and Actions -->
		<div class="mt-2 flex flex-col justify-between gap-4 pt-6 sm:flex-row sm:items-center">
			<!-- Tags Badges -->
			<div class="flex flex-wrap gap-2">
				{#each metadata.tags as tag}
					<span class="text-neutral-450 rounded bg-neutral-950 px-2.5 py-1 text-xs">{tag}</span>
				{/each}
			</div>

			<!-- Action Links -->
			{#if metadata.github || metadata.link}
				<div class="flex items-center gap-3">
					{#if metadata.github}
						<a
							href={metadata.github}
							target="_blank"
							rel="noopener noreferrer"
							class="flex items-center gap-2 rounded-xl bg-neutral-950 px-4 py-2 text-xs font-semibold text-neutral-300 transition-all select-none hover:bg-neutral-900"
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
							{m.proj_code()}
						</a>
					{/if}

					{#if metadata.link}
						<a
							href={metadata.link}
							target="_blank"
							rel="noopener noreferrer"
							class="flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-white shadow-[0_0_15px_var(--color-primary-glow)] transition-all select-none hover:bg-primary/95"
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
								<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline
									points="15 3 21 3 21 9"
								/><line x1="10" x2="21" y1="14" y2="3" />
							</svg>
							{m.proj_visit()}
						</a>
					{/if}
				</div>
			{/if}
		</div>

		<!-- Impact box -->
		{#if metadata.impact}
			<div
				class="mt-2 rounded-xl bg-primary/5 p-4 text-xs leading-relaxed font-medium text-primary"
			>
				<span class="mb-1 block text-[9px] font-bold tracking-wide text-neutral-500 uppercase"
					>{m.contact_linkedin()} Impact</span
				>
				{metadata.impact}
			</div>
		{/if}
	</div>

	<!-- Rendered Markdown Body -->
	<div class="prose mt-4 max-w-none px-4 md:px-8">
		<Content />
	</div>
</div>
