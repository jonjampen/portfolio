<script lang="ts">
	import type { Pathname } from '$app/types';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { locales, localizeHref, getLocale, setLocale } from '$lib/paraglide/runtime';
	import { m } from '$lib/paraglide/messages.js';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import CommandPalette from '$lib/components/CommandPalette.svelte';
	import { onMount } from 'svelte';

	let { children } = $props();

	// Get current active locale (en / de-ch)
	let activeLocale = $derived(getLocale());

	// Navigation items mapping
	let navItems = $derived([
		{ id: 'about', label: m.nav_about() },
		{ id: 'projects', label: m.nav_projects() },
		{ id: 'experience', label: m.nav_experience() },
		{ id: 'education', label: m.nav_education() },
		{ id: 'contact', label: m.nav_contact() }
	]);

	let lastKeyPressed = '';

	function handleVimScroll(e: KeyboardEvent) {
		const target = e.target as HTMLElement;
		if (
			target &&
			(target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)
		) {
			return;
		}

		if (e.ctrlKey || e.metaKey || e.altKey) {
			return;
		}

		if (e.key === 'j') {
			window.scrollBy({ top: 150, behavior: 'smooth' });
		} else if (e.key === 'k') {
			window.scrollBy({ top: -150, behavior: 'smooth' });
		} else if (e.key === 'g') {
			if (lastKeyPressed === 'g') {
				window.scrollTo({ top: 0, behavior: 'smooth' });
				lastKeyPressed = '';
			} else {
				lastKeyPressed = 'g';
				setTimeout(() => {
					if (lastKeyPressed === 'g') lastKeyPressed = '';
				}, 400);
			}
		} else if (e.key === 'G') {
			window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
		}
	}

	onMount(() => {
		window.addEventListener('keydown', handleVimScroll);
		return () => {
			window.removeEventListener('keydown', handleVimScroll);
		};
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Jon Jampen — Portfolio</title>
</svelte:head>

<div
	class="relative flex min-h-screen flex-col overflow-x-hidden bg-neutral-950 font-sans text-neutral-100"
>
	<!-- Grid Background Pattern -->
	<div class="bg-grid pointer-events-none absolute inset-0 z-0 opacity-100"></div>

	<!-- Glowing gradient spots for depth -->
	<div
		class="pointer-events-none absolute top-0 left-1/4 z-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]"
	></div>
	<div
		class="pointer-events-none absolute top-[40%] right-10 z-0 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[150px]"
	></div>
	<div
		class="pointer-events-none absolute bottom-10 left-10 z-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]"
	></div>

	<!-- Header -->
	<header
		class="sticky top-0 z-50 w-full border-b border-neutral-900 bg-neutral-950/70 backdrop-blur-md transition-all duration-300"
	>
		<div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
			<!-- Logo -->
			<a href="{localizeHref('/')}#about" class="group flex items-center gap-2">
				<span
					class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary font-display text-base font-black text-white shadow-[0_0_15px_var(--color-primary-border)] transition-transform duration-300 select-none group-hover:scale-105"
				>
					JJ
				</span>
				<span
					class="font-display text-sm font-bold tracking-tight text-neutral-200 transition-colors group-hover:text-white"
				>
					Jon Jampen
				</span>
			</a>

			<!-- Desktop Nav Links -->
			<nav class="hidden items-center gap-6 md:flex">
				{#each navItems as item}
					<a
						href="{localizeHref('/')}#{item.id}"
						class="text-xs font-medium tracking-wider text-neutral-400 uppercase transition-colors hover:text-neutral-100"
					>
						{item.label}
					</a>
				{/each}
			</nav>

			<!-- Actions Container (Language + Search) -->
			<div class="flex items-center gap-2">
				<!-- Command Palette -->
				<CommandPalette />

				<!-- Language Selector -->
				<div
					class="flex items-center gap-1 rounded-lg border border-neutral-800/60 bg-neutral-900/60 p-1"
				>
					{#each locales as locale}
						<button
							onclick={() => setLocale(locale)}
							class="cursor-pointer rounded px-2 py-1 text-[10px] font-bold uppercase transition-all {activeLocale ===
							locale
								? 'bg-primary text-white shadow-sm'
								: 'text-neutral-400 hover:bg-neutral-800/50 hover:text-neutral-200'}"
						>
							{locale === 'en' ? 'EN' : 'DE'}
						</button>
					{/each}
				</div>
			</div>
		</div>
	</header>

	<!-- Main Content -->
	<main class="relative z-10 mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6">
		{@render children()}
	</main>

	<!-- Footer -->
	<footer class="relative z-10 border-t border-neutral-900 bg-neutral-950/40">
		<div
			class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-12 sm:px-6 md:flex-row"
		>
			<div class="flex flex-col items-center gap-2 md:items-start">
				<div class="flex items-center gap-2">
					<span
						class="flex h-5 w-5 items-center justify-center rounded border border-primary/30 bg-primary/20 font-display text-[10px] font-bold text-primary"
						>J</span
					>
					<span class="text-neutral-450 font-display font-sans text-xs font-semibold tracking-tight"
						>Jon Jampen</span
					>
				</div>
				<span class="text-xs text-neutral-600">
					© {new Date().getFullYear()}
					{m.footer_rights()}
				</span>
			</div>

			<div class="flex items-center gap-4 font-mono text-xs text-neutral-500">
				<a href={localizeHref('/uses')} class="transition-colors hover:text-primary"
					>{activeLocale === 'de-ch' ? 'Ausrüstung' : 'Uses'}</a
				>
				<span class="text-neutral-800">•</span>
				<a
					href="https://github.com/jonjampen"
					target="_blank"
					rel="noopener noreferrer"
					class="transition-colors hover:text-primary">GitHub</a
				>
				<span class="text-neutral-800">•</span>
				<a
					href="https://linkedin.com/in/jonjampen"
					target="_blank"
					rel="noopener noreferrer"
					class="transition-colors hover:text-primary">LinkedIn</a
				>
			</div>
		</div>
	</footer>
</div>

<!-- SEO Sitemap Helper Links (Hidden) -->
<div style="display:none">
	{#each locales as locale (locale)}
		<a href={resolve(localizeHref(page.url.pathname, { locale }) as Pathname)}>{locale}</a>
	{/each}
</div>
