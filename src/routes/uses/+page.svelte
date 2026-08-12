<script lang="ts">
  import { m } from '$lib/paraglide/messages.js';
  import { getLocale, localizeHref } from '$lib/paraglide/runtime';

  const locale = getLocale();

  const usesData = $derived([
    {
      title: locale === 'de-ch' ? 'Hardware & EDC' : 'Hardware & EDC',
      items: [
        { name: 'Nothing Phone (3a) Pro', role: locale === 'de-ch' ? 'Smartphone' : 'Smartphone', desc: locale === 'de-ch' ? 'Haupttelefon mit Glyph-Interface.' : 'Primary phone with Glyph interface.', icon: '📱' },
        { name: 'Amazfit Helio Strap & Bip 6', role: locale === 'de-ch' ? 'Wearables' : 'Wearables', desc: locale === 'de-ch' ? 'Fitness-Tracker und Smartwatch für sportliche Aktivitäten.' : 'Fitness tracking ring and smartwatch setup.', icon: '⌚' },
        { name: 'Soundcore Liberty 4 NC', role: locale === 'de-ch' ? 'Kopfhörer' : 'Earbuds', desc: locale === 'de-ch' ? 'Tolle Rauschunterdrückung für konzentriertes Arbeiten.' : 'Excellent ANC for focused coding sessions.', icon: '🎧' },
        { name: 'Lenovo ThinkPad X13 2-in-1', role: locale === 'de-ch' ? 'Laptop' : 'Laptop', desc: locale === 'de-ch' ? 'Kompakte und vielseitige Workstation mit Touchscreen.' : 'Compact, versatile 2-in-1 portable workstation.', icon: '💻' },
        { name: 'Logitech MX Keys', role: locale === 'de-ch' ? 'Tastatur' : 'Keyboard', desc: locale === 'de-ch' ? 'Sehr angenehmes Tippgefühl für stundenlanges Schreiben.' : 'Low-profile tactile keyboard for smooth typing.', icon: '⌨️' },
        { name: 'Logitech MX Master 3', role: locale === 'de-ch' ? 'Maus' : 'Mouse', desc: locale === 'de-ch' ? 'Ergonomische Maus mit stufenlosem Scrollrad.' : 'Highly ergonomic workflow mouse with infinite scroll.', icon: '🖱️' }
      ]
    },
    {
      title: locale === 'de-ch' ? 'Betriebssystem & Terminal' : 'Operating System & Shell',
      items: [
        { name: 'Arch Linux', role: 'OS', desc: locale === 'de-ch' ? 'Minimalistische Linux-Distribution für maximale Kontrolle.' : 'Rolling-release distro for ultimate customizability.', icon: '❄️' },
        { name: 'Hyprland', role: 'WM', desc: locale === 'de-ch' ? 'Moderner, flüssiger Wayland Tiling Window Manager mit Animationen.' : 'Fluid dynamic Wayland tiling window manager with rich effects.', icon: '⚙️' },
        { name: 'Alacritty', role: 'Terminal', desc: locale === 'de-ch' ? 'GPU-beschleunigter Terminal-Emulator, extrem schnell.' : 'Fast, GPU-accelerated terminal emulator.', icon: '🐚' }
      ]
    },
    {
      title: locale === 'de-ch' ? 'Entwicklung & Design' : 'Development & Design',
      items: [
        { name: 'Neovim (nvim)', role: 'Editor', desc: locale === 'de-ch' ? 'Mein voll angepasster Texteditor für schnelles Coding.' : 'Fully riced terminal editor of choice.', icon: '📝' },
        { name: 'lazygit', role: 'VCS', desc: locale === 'de-ch' ? 'TUI-Client für Git, macht Commits und Rebasen extrem einfach.' : 'TUI client for Git, makes staging and rebasing extremely simple.', icon: '🌳' },
        { name: 'Figma', role: 'Design', desc: locale === 'de-ch' ? 'Zum Entwerfen von Benutzeroberflächen und Layouts.' : 'UI/UX layout design and prototyping.', icon: '🎨' }
      ]
    },
    {
      title: locale === 'de-ch' ? 'Produktivität & Dokumente' : 'Productivity & Documents',
      items: [
        { name: 'Obsidian', role: 'Notizen', desc: locale === 'de-ch' ? 'Mein persönliches Wiki und Wissensdatenbank.' : 'Markdown-based personal wiki and second brain.', icon: '📓' },
        { name: 'Xournal++', role: 'Skizzen', desc: locale === 'de-ch' ? 'Für handschriftliche Notizen auf PDF-Dateien.' : 'Digital sketching and handwriting tool.', icon: '✍️' },
        { name: 'LaTeX', role: 'Dokumente', desc: locale === 'de-ch' ? 'Für strukturierte Arbeiten und mathematische Formeln.' : 'Academic typesetting for reports and assignments.', icon: '📄' },
        { name: 'Syncthing', role: 'Sync', desc: locale === 'de-ch' ? 'Sichere P2P-Dateisynchronisation zwischen Geräten.' : 'Decentralized peer-to-peer file synchronization.', icon: '🔄' },
        { name: 'Home Assistant', role: 'IoT', desc: locale === 'de-ch' ? 'Zentrale Steuerung für mein Smart Home Setup.' : 'Local-first smart home hub and automation controller.', icon: '🏠' }
      ]
    },
    {
      title: locale === 'de-ch' ? 'Kommunikation' : 'Communication',
      items: [
        { name: 'Signal', role: 'Chat', desc: locale === 'de-ch' ? 'Sicherer und privater Messenger.' : 'Secure, encrypted instant messaging.', icon: '💬' },
        { name: 'Thunderbird', role: 'E-Mail', desc: locale === 'de-ch' ? 'Mein primärer Desktop-E-Mail-Client.' : 'Powerful open-source email management.', icon: '✉️' },
        { name: 'Discord', role: 'Chat', desc: locale === 'de-ch' ? 'Community- und Gaming-Unterhaltungen.' : 'Voice, video, and text chat for groups.', icon: '🎮' }
      ]
    }
  ]);
</script>

<svelte:head>
  <title>{locale === 'de-ch' ? 'Ausrüstung — Jon Jampen' : 'Uses — Jon Jampen'}</title>
</svelte:head>

<div class="max-w-4xl mx-auto py-8 animate-fade-in flex flex-col gap-8">
  <!-- Back Button -->
  <div>
    <a 
      href={localizeHref('/')} 
      class="inline-flex items-center gap-2 text-xs font-semibold text-neutral-450 hover:text-primary transition-colors select-none font-mono"
    >
      {m.proj_back()}
    </a>
  </div>

  <!-- Page Header -->
  <div class="flex flex-col gap-4">
    <div class="flex flex-col gap-3">
      <h1 class="font-display font-extrabold text-3xl md:text-4xl text-white tracking-tight leading-tight">
        {locale === 'de-ch' ? 'Ausstattung & Tools' : 'Gear & Software'}
      </h1>
      <p class="text-sm md:text-base text-neutral-450 leading-relaxed max-w-2xl font-sans">
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
        class="flex items-center gap-2.5 bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 hover:border-neutral-700 text-neutral-200 hover:text-white font-semibold text-sm px-5 py-3 rounded-xl transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.03)] hover:scale-[1.02] active:scale-98 select-none"
      >
        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>
        </svg>
        {locale === 'de-ch' ? 'Mein .dotfiles Repository' : 'My .dotfiles Repository'}
      </a>
    </div>
  </div>

  <!-- Grid of Categories -->
  <div class="flex flex-col gap-10 mt-2">
    {#each usesData as category}
      <div class="flex flex-col gap-5 border-l border-neutral-900 pl-4 md:pl-6 relative">
        <!-- Vertical accent bar -->
        <div class="absolute left-0 top-0 bottom-0 w-[2px] bg-primary/20"></div>

        <h2 class="text-base font-bold text-neutral-300 uppercase tracking-widest font-mono">
          {category.title}
        </h2>

        <!-- Tiled Items Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {#each category.items as item}
            <div class="glow-card rounded-xl p-4 flex gap-4 hover:-translate-y-0.5 transition-all duration-300">
              <!-- Item Icon/Emoji Block -->
              <div class="w-12 h-12 shrink-0 rounded-xl bg-neutral-950 flex items-center justify-center text-xl select-none relative shadow-[inset_0_1px_3px_rgba(255,255,255,0.02)]">
                {item.icon}
              </div>

              <!-- Item info -->
              <div class="flex flex-col min-w-0">
                <div class="flex items-center gap-2 flex-wrap">
                  <h3 class="text-sm font-bold text-white truncate max-w-xs">{item.name}</h3>
                  <span class="text-[9px] font-mono uppercase bg-primary/10 border border-primary/25 text-primary px-2 py-0.5 rounded-md font-bold select-none tracking-wider antialiased">
                    {item.role}
                  </span>
                </div>
                <p class="text-[11px] leading-relaxed text-neutral-450 mt-1">{item.desc}</p>
              </div>
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</div>
