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
    if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) {
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

<div class="min-h-screen flex flex-col bg-neutral-950 text-neutral-100 font-sans relative overflow-x-hidden">
  <!-- Grid Background Pattern -->
  <div class="absolute inset-0 bg-grid opacity-100 pointer-events-none z-0"></div>
  
  <!-- Glowing gradient spots for depth -->
  <div class="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
  <div class="absolute top-[40%] right-10 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none z-0"></div>
  <div class="absolute bottom-10 left-10 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

  <!-- Header -->
  <header class="sticky top-0 z-50 w-full border-b border-neutral-900 bg-neutral-950/70 backdrop-blur-md transition-all duration-300">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
      <!-- Logo -->
      <a href="{localizeHref('/')}#about" class="flex items-center gap-2 group">
        <span class="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-display font-black text-white text-base shadow-[0_0_15px_var(--color-primary-border)] transition-transform duration-300 group-hover:scale-105 select-none">
          JJ
        </span>
        <span class="font-display font-bold text-sm tracking-tight text-neutral-200 group-hover:text-white transition-colors">
          Jon Jampen
        </span>
      </a>

      <!-- Desktop Nav Links -->
      <nav class="hidden md:flex items-center gap-6">
        {#each navItems as item}
          <a 
            href="{localizeHref('/')}#{item.id}" 
            class="text-xs font-medium text-neutral-400 hover:text-neutral-100 transition-colors uppercase tracking-wider"
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
        <div class="flex items-center gap-1 bg-neutral-900/60 border border-neutral-800/60 p-1 rounded-lg">
          {#each locales as locale}
            <button 
              onclick={() => setLocale(locale)}
              class="text-[10px] font-bold px-2 py-1 rounded transition-all uppercase cursor-pointer {activeLocale === locale ? 'bg-primary text-white shadow-sm' : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/50'}"
            >
              {locale === 'en' ? 'EN' : 'DE'}
            </button>
          {/each}
        </div>
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <main class="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 py-8 relative z-10">
    {@render children()}
  </main>

  <!-- Footer -->
  <footer class="border-t border-neutral-900 bg-neutral-950/40 relative z-10">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
      <div class="flex flex-col items-center md:items-start gap-2">
        <div class="flex items-center gap-2">
          <span class="w-5 h-5 rounded bg-primary/20 border border-primary/30 flex items-center justify-center font-display font-bold text-[10px] text-primary">J</span>
          <span class="font-display font-semibold text-xs tracking-tight text-neutral-450 font-sans">Jon Jampen</span>
        </div>
        <span class="text-xs text-neutral-600">
          © {new Date().getFullYear()} {m.footer_rights()}
        </span>
      </div>

      <div class="flex items-center gap-4 text-xs text-neutral-500 font-mono">
        <a href={localizeHref('/uses')} class="hover:text-primary transition-colors">{activeLocale === 'de-ch' ? 'Ausrüstung' : 'Uses'}</a>
        <span class="text-neutral-800">•</span>
        <a href="https://github.com/jonjampen" target="_blank" rel="noopener noreferrer" class="hover:text-primary transition-colors">GitHub</a>
        <span class="text-neutral-800">•</span>
        <a href="https://linkedin.com/in/jonjampen" target="_blank" rel="noopener noreferrer" class="hover:text-primary transition-colors">LinkedIn</a>
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
