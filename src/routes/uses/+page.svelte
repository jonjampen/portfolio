<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import { getLocale, localizeHref } from '$lib/paraglide/runtime';

	const locale = getLocale();

	const usesData = $derived([
		{
			title: locale === 'de-ch' ? 'Hardware & EDC' : 'Hardware & EDC',
			items: [
				{
					name: 'Nothing Phone (3a) Pro',
					role: locale === 'de-ch' ? 'Smartphone' : 'Smartphone',
					desc:
						locale === 'de-ch'
							? 'Haupttelefon mit Glyph-Interface.'
							: 'Primary phone with Glyph interface.',
					icon: '📱'
				},
				{
					name: 'Amazfit Helio Strap & Bip 6',
					role: locale === 'de-ch' ? 'Wearables' : 'Wearables',
					desc:
						locale === 'de-ch'
							? 'Fitness-Tracker und Smartwatch für sportliche Aktivitäten.'
							: 'Fitness tracking ring and smartwatch setup.',
					icon: '⌚'
				},
				{
					name: 'Soundcore Liberty 4 NC',
					role: locale === 'de-ch' ? 'Kopfhörer' : 'Earbuds',
					desc:
						locale === 'de-ch'
							? 'Tolle Rauschunterdrückung für konzentriertes Arbeiten.'
							: 'Excellent ANC for focused coding sessions.',
					icon: '🎧'
				},
				{
					name: 'Lenovo ThinkPad X13 2-in-1',
					role: locale === 'de-ch' ? 'Laptop' : 'Laptop',
					desc:
						locale === 'de-ch'
							? 'Kompakte und vielseitige Workstation mit Touchscreen.'
							: 'Compact, versatile 2-in-1 portable workstation.',
					icon: '💻'
				},
				{
					name: 'Logitech MX Keys',
					role: locale === 'de-ch' ? 'Tastatur' : 'Keyboard',
					desc:
						locale === 'de-ch'
							? 'Sehr angenehmes Tippgefühl für stundenlanges Schreiben.'
							: 'Low-profile tactile keyboard for smooth typing.',
					icon: '⌨️'
				},
				{
					name: 'Logitech MX Master 3',
					role: locale === 'de-ch' ? 'Maus' : 'Mouse',
					desc:
						locale === 'de-ch'
							? 'Ergonomische Maus mit stufenlosem Scrollrad.'
							: 'Highly ergonomic workflow mouse with infinite scroll.',
					icon: '🖱️'
				}
			]
		},
		{
			title: locale === 'de-ch' ? 'Betriebssystem & Terminal' : 'Operating System & Shell',
			items: [
				{
					name: 'Arch Linux',
					role: 'OS',
					desc:
						locale === 'de-ch'
							? 'Minimalistische Linux-Distribution für maximale Kontrolle.'
							: 'Rolling-release distro for ultimate customizability.',
					icon: '❄️'
				},
				{
					name: 'Hyprland',
					role: 'WM',
					desc:
						locale === 'de-ch'
							? 'Moderner, flüssiger Wayland Tiling Window Manager mit Animationen.'
							: 'Fluid dynamic Wayland tiling window manager with rich effects.',
					icon: '⚙️'
				},
				{
					name: 'Alacritty',
					role: 'Terminal',
					desc:
						locale === 'de-ch'
							? 'GPU-beschleunigter Terminal-Emulator, extrem schnell.'
							: 'Fast, GPU-accelerated terminal emulator.',
					icon: '🐚'
				}
			]
		},
		{
			title: locale === 'de-ch' ? 'Entwicklung & Design' : 'Development & Design',
			items: [
				{
					name: 'Neovim (nvim)',
					role: 'Editor',
					desc:
						locale === 'de-ch'
							? 'Mein voll angepasster Texteditor für schnelles Coding.'
							: 'Fully riced terminal editor of choice.',
					icon: '📝'
				},
				{
					name: 'lazygit',
					role: 'VCS',
					desc:
						locale === 'de-ch'
							? 'TUI-Client für Git, macht Commits und Rebasen extrem einfach.'
							: 'TUI client for Git, makes staging and rebasing extremely simple.',
					icon: '🌳'
				},
				{
					name: 'Figma',
					role: 'Design',
					desc:
						locale === 'de-ch'
							? 'Zum Entwerfen von Benutzeroberflächen und Layouts.'
							: 'UI/UX layout design and prototyping.',
					icon: '🎨'
				}
			]
		},
		{
			title: locale === 'de-ch' ? 'Produktivität & Dokumente' : 'Productivity & Documents',
			items: [
				{
					name: 'Obsidian',
					role: 'Notizen',
					desc:
						locale === 'de-ch'
							? 'Mein persönliches Wiki und Wissensdatenbank.'
							: 'Markdown-based personal wiki and second brain.',
					icon: '📓'
				},
				{
					name: 'Xournal++',
					role: 'Skizzen',
					desc:
						locale === 'de-ch'
							? 'Für handschriftliche Notizen auf PDF-Dateien.'
							: 'Digital sketching and handwriting tool.',
					icon: '✍️'
				},
				{
					name: 'LaTeX',
					role: 'Dokumente',
					desc:
						locale === 'de-ch'
							? 'Für strukturierte Arbeiten und mathematische Formeln.'
							: 'Academic typesetting for reports and assignments.',
					icon: '📄'
				},
				{
					name: 'Syncthing',
					role: 'Sync',
					desc:
						locale === 'de-ch'
							? 'Sichere P2P-Dateisynchronisation zwischen Geräten.'
							: 'Decentralized peer-to-peer file synchronization.',
					icon: '🔄'
				},
				{
					name: 'Home Assistant',
					role: 'IoT',
					desc:
						locale === 'de-ch'
							? 'Zentrale Steuerung für mein Smart Home Setup.'
							: 'Local-first smart home hub and automation controller.',
					icon: '🏠'
				}
			]
		},
		{
			title: locale === 'de-ch' ? 'Kommunikation' : 'Communication',
			items: [
				{
					name: 'Signal',
					role: 'Chat',
					desc:
						locale === 'de-ch'
							? 'Sicherer und privater Messenger.'
							: 'Secure, encrypted instant messaging.',
					icon: '💬'
				},
				{
					name: 'Thunderbird',
					role: 'E-Mail',
					desc:
						locale === 'de-ch'
							? 'Mein primärer Desktop-E-Mail-Client.'
							: 'Powerful open-source email management.',
					icon: '✉️'
				},
				{
					name: 'Discord',
					role: 'Chat',
					desc:
						locale === 'de-ch'
							? 'Community- und Gaming-Unterhaltungen.'
							: 'Voice, video, and text chat for groups.',
					icon: '🎮'
				}
			]
		}
	]);
</script>

<svelte:head>
	<title>{locale === 'de-ch' ? 'Ausrüstung — Jon Jampen' : 'Uses — Jon Jampen'}</title>
</svelte:head>

<div class="animate-fade-in mx-auto flex max-w-4xl flex-col gap-8 py-8">
	<!-- Back Button -->
	<div>
		<a
			href={localizeHref('/')}
			class="text-neutral-450 inline-flex items-center gap-2 font-mono text-xs font-semibold transition-colors select-none hover:text-primary"
		>
			{m.proj_back()}
		</a>
	</div>

	<!-- Page Header -->
	<div class="flex flex-col gap-4">
		<div class="flex flex-col gap-3">
			<h1
				class="font-display text-3xl leading-tight font-extrabold tracking-tight text-white md:text-4xl"
			>
				{locale === 'de-ch' ? 'Ausstattung & Tools' : 'Gear & Software'}
			</h1>
			<p class="text-neutral-450 max-w-2xl font-sans text-sm leading-relaxed md:text-base">
				{locale === 'de-ch'
					? 'Ein detaillierter Überblick über die Hardware, Software und täglichen Werkzeuge, die ich zum Programmieren, Studieren und Organisieren verwende.'
					: 'A detailed catalog of the hardware, software, and productivity tools I use for development, studying, and everyday life.'}
			</p>
		</div>

		<!-- Dotfiles Repository Link -->
		<div class="flex">
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
				{locale === 'de-ch' ? 'Mein .dotfiles Repository' : 'My .dotfiles Repository'}
			</a>
		</div>
	</div>

	<!-- Grid of Categories -->
	<div class="mt-2 flex flex-col gap-10">
		{#each usesData as category}
			<div class="relative flex flex-col gap-5 border-l border-neutral-900 pl-4 md:pl-6">
				<!-- Vertical accent bar -->
				<div class="absolute top-0 bottom-0 left-0 w-[2px] bg-primary/20"></div>

				<h2 class="font-mono text-base font-bold tracking-widest text-neutral-300 uppercase">
					{category.title}
				</h2>

				<!-- Tiled Items Grid -->
				<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
					{#each category.items as item}
						<div
							class="glow-card flex gap-4 rounded-xl p-4 transition-all duration-300 hover:-translate-y-0.5"
						>
							<!-- Item Icon/Emoji Block -->
							<div
								class="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-neutral-950 text-xl shadow-[inset_0_1px_3px_rgba(255,255,255,0.02)] select-none"
							>
								{item.icon}
							</div>

							<!-- Item info -->
							<div class="flex min-w-0 flex-col">
								<div class="flex flex-wrap items-center gap-2">
									<h3 class="max-w-xs truncate text-sm font-bold text-white">{item.name}</h3>
									<span
										class="rounded-md border border-primary/25 bg-primary/10 px-2 py-0.5 font-mono text-[9px] font-bold tracking-wider text-primary uppercase antialiased select-none"
									>
										{item.role}
									</span>
								</div>
								<p class="text-neutral-450 mt-1 text-[11px] leading-relaxed">{item.desc}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>
