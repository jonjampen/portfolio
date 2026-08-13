<script lang="ts">
	import { getLocale, setLocale, localizeHref } from '$lib/paraglide/runtime';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	const locale = getLocale();

	let isOpen = $state(false);
	let searchQuery = $state('' as string);
	let selectedIndex = $state(0);

	// Eagerly load projects to search through
	const projectModules = import.meta.glob('/src/lib/projects/**/*.md', { eager: true });

	let projects = $derived(
		Object.entries(projectModules)
			.map(([path, module]) => {
				const parts = path.split('/');
				const fileLocale = parts[4];
				const slug = parts[5].replace('.md', '');
				const mod = module as any;
				return {
					slug,
					locale: fileLocale,
					title: mod.metadata.title || slug
				};
			})
			.filter((p) => p.locale === locale)
	);

	const sections = [
		{ name: locale === 'de-ch' ? 'Über mich' : 'About Me', url: '/#about', category: 'Sections' },
		{ name: locale === 'de-ch' ? 'Projekte' : 'Projects', url: '/#projects', category: 'Sections' },
		{
			name: locale === 'de-ch' ? 'Erfahrung' : 'Experience',
			url: '/#experience',
			category: 'Sections'
		},
		{
			name: locale === 'de-ch' ? 'Ausbildung' : 'Education',
			url: '/#education',
			category: 'Sections'
		},
		{ name: locale === 'de-ch' ? 'Kontakt' : 'Contact', url: '/#contact', category: 'Sections' }
	];

	const pages = [
		{ name: locale === 'de-ch' ? 'Startseite' : 'Home', url: '/', category: 'Pages' },
		{
			name: locale === 'de-ch' ? 'Ausrüstung & Tools (Uses)' : 'Gear & Software (Uses)',
			url: '/uses',
			category: 'Pages'
		}
	];

	const socials = [
		{
			name: 'GitHub',
			url: 'https://github.com/jonjampen',
			category: 'Socials',
			username: 'jonjampen'
		},
		{
			name: 'LinkedIn',
			url: 'https://linkedin.com/in/jonjampen',
			category: 'Socials',
			username: 'jonjampen'
		},
		{
			name: 'E-Mail',
			url: 'mailto:hello@jonjampen.ch',
			category: 'Socials',
			username: 'hello@jonjampen.ch'
		},
		{
			name: 'X / Twitter',
			url: 'https://x.com/jonjampen',
			category: 'Socials',
			username: 'jonjampen'
		},
		{
			name: 'Ko-fi',
			url: 'https://ko-fi.com/jonjampen',
			category: 'Socials',
			username: 'jonjampen'
		},
		{
			name: 'Buy Me a Coffee',
			url: 'https://buymeacoffee.com/jonjampen',
			category: 'Socials',
			username: 'jonjampen'
		}
	];

	const languages = [
		{ name: 'Switch to English', action: () => setLocale('en'), category: 'Language Switcher' },
		{ name: 'Zu Deutsch wechseln', action: () => setLocale('de-ch'), category: 'Language Switcher' }
	];

	// Combine items
	let allItems = $derived([
		...pages.map((p) => ({ ...p, type: 'nav', action: null, username: null })),
		...sections.map((s) => ({ ...s, type: 'nav', action: null, username: null })),
		...projects.map((p) => ({
			name: p.title,
			url: `/projects/${p.slug}`,
			category: 'Projects',
			type: 'nav',
			action: null,
			username: null
		})),
		...socials.map((s) => ({ ...s, type: 'url', action: null })),
		...languages.map((l) => ({ ...l, type: 'action', url: null, username: null }))
	]);

	// Filtered items
	let filteredItems = $derived(
		allItems.filter((item) => {
			const query = searchQuery.toLowerCase().trim();
			if (!query) return true;
			return (
				item.name.toLowerCase().includes(query) ||
				item.category.toLowerCase().includes(query) ||
				(item.username && item.username.toLowerCase().includes(query))
			);
		})
	);

	// Reset index when query changes
	$effect(() => {
		searchQuery;
		selectedIndex = 0;
	});

	// Block scroll on document body when open
	$effect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	});

	function portal(node: HTMLElement) {
		document.body.appendChild(node);
		return {
			destroy() {
				if (node.parentNode) {
					node.parentNode.removeChild(node);
				}
			}
		};
	}

	function toggleOpen() {
		isOpen = !isOpen;
		if (isOpen) {
			searchQuery = '';
		}
	}

	function handleKeydown(e: KeyboardEvent) {
		if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
			e.preventDefault();
			toggleOpen();
			return;
		}

		if (!isOpen) return;

		if (e.key === 'Escape') {
			isOpen = false;
			return;
		}

		// Vim controls / Arrow keys inside list selection
		if (e.key === 'ArrowDown' || (e.ctrlKey && e.key === 'j')) {
			e.preventDefault();
			selectedIndex = (selectedIndex + 1) % filteredItems.length;
		} else if (e.key === 'ArrowUp' || (e.ctrlKey && e.key === 'k')) {
			e.preventDefault();
			selectedIndex = (selectedIndex - 1 + filteredItems.length) % filteredItems.length;
		} else if (e.key === 'Enter') {
			e.preventDefault();
			selectItem(filteredItems[selectedIndex]);
		}
	}

	function selectItem(item: any) {
		if (!item) return;
		isOpen = false;
		if (item.type === 'nav') {
			goto(localizeHref(item.url));
		} else if (item.type === 'url') {
			window.open(item.url, '_blank', 'noopener,noreferrer');
		} else if (item.type === 'action' && item.action) {
			item.action();
		}
	}

	onMount(() => {
		window.addEventListener('keydown', handleKeydown);
		return () => {
			window.removeEventListener('keydown', handleKeydown);
		};
	});
</script>

<!-- Open Command Palette Button -->
<button
	onclick={toggleOpen}
	class="text-neutral-450 hover:bg-neutral-850/60 flex cursor-pointer items-center gap-1.5 rounded-lg border border-neutral-800/60 bg-neutral-900/60 px-2.5 py-1.5 font-mono text-xs font-semibold transition-all select-none hover:border-neutral-700 hover:text-white"
	title="Open Command Palette"
>
	<svg
		class="h-3.5 w-3.5"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2.5"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
	</svg>
	<span>⌘K</span>
</button>

{#if isOpen}
	<!-- Backdrop -->
	<!-- eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions -->
	<div
		use:portal
		class="fixed inset-0 z-[9999] flex items-start justify-center bg-black/70 px-4 pt-[15vh] backdrop-blur-md"
		onclick={toggleOpen}
	>
		<!-- Modal -->
		<!-- eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions -->
		<div
			class="flex max-h-[500px] w-full max-w-xl flex-col overflow-hidden rounded-2xl border border-neutral-900 bg-neutral-950 shadow-[0_0_50px_rgba(0,0,0,0.9)]"
			onclick={(e) => e.stopPropagation()}
		>
			<!-- Search Input -->
			<div
				class="flex items-center gap-3 border-b border-neutral-900 bg-neutral-950/80 px-4 py-3.5"
			>
				<svg
					class="h-4 w-4 shrink-0 text-neutral-500"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
				</svg>
				<input
					type="text"
					placeholder={locale === 'de-ch'
						? 'Suchen oder Befehl eingeben...'
						: 'Search or type a command...'}
					bind:value={searchQuery}
					class="w-full bg-transparent font-sans text-sm text-white placeholder-neutral-500 focus:outline-none"
					autofocus
				/>
				<div
					class="text-neutral-450 rounded border border-neutral-800 bg-neutral-900 px-1.5 py-0.5 font-mono text-[9px] uppercase"
				>
					ESC
				</div>
			</div>

			<!-- Items List -->
			<div class="flex min-h-[100px] flex-1 flex-col gap-0.5 overflow-y-auto p-2">
				{#if filteredItems.length === 0}
					<div class="p-4 text-center font-mono text-xs text-neutral-500">
						{locale === 'de-ch' ? 'Keine Ergebnisse gefunden.' : 'No results found.'}
					</div>
				{:else}
					{#each filteredItems as item, idx}
						<!-- eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions -->
						<div
							onclick={() => selectItem(item)}
							onmouseenter={() => (selectedIndex = idx)}
							class="flex cursor-pointer items-center justify-between rounded-xl px-3 py-2.5 transition-all select-none {idx ===
							selectedIndex
								? 'bg-primary/10 text-white shadow-[inset_0_1px_3px_rgba(255,255,255,0.01)]'
								: 'text-neutral-450 hover:text-neutral-200'}"
						>
							<div class="flex min-w-0 items-center gap-3">
								<!-- Icon mapping -->
								<span class="shrink-0 text-sm">
									{#if item.category === 'Sections'}
										⚓
									{:else}
										{#if item.name === 'GitHub'}
											🐙
										{:else if item.name === 'LinkedIn'}
											💼
										{:else if item.name === 'E-Mail'}
											✉️
										{:else if item.name.includes('Uses') || item.name.includes('Ausrüstung')}
											💻
										{:else if item.category === 'Projects'}
											🚀
										{:else if item.category === 'Language Switcher'}
											🌐
										{:else}
											🔗
										{/if}
									{/if}
								</span>
								<span class="truncate font-sans text-xs font-semibold">{item.name}</span>
								{#if item.username}
									<span class="truncate font-mono text-[10px] text-neutral-600"
										>@{item.username}</span
									>
								{/if}
							</div>

							<div class="flex shrink-0 items-center">
								<span
									class="font-mono text-[9px] tracking-widest text-neutral-500 uppercase select-none"
								>
									{item.category}
								</span>
							</div>
						</div>
					{/each}
				{/if}
			</div>

			<!-- Footer Info -->
			<div
				class="flex items-center justify-between border-t border-neutral-900 bg-neutral-950/40 px-4 py-2 font-mono text-[9px] text-neutral-500"
			>
				<div class="flex items-center gap-3">
					<span
						><kbd class="rounded bg-neutral-900 px-1 py-0.5">↑↓</kbd> /
						<kbd class="rounded bg-neutral-900 px-1 py-0.5">Ctrl+j/k</kbd>
						{locale === 'de-ch' ? 'navigieren' : 'navigate'}</span
					>
					<span
						><kbd class="rounded bg-neutral-900 px-1 py-0.5">Enter</kbd>
						{locale === 'de-ch' ? 'auswählen' : 'select'}</span
					>
				</div>
				<span>{filteredItems.length} {locale === 'de-ch' ? 'Einträge' : 'items'}</span>
			</div>
		</div>
	</div>
{/if}
