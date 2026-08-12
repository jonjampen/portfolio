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

<div class="max-w-4xl mx-auto py-8 animate-fade-in flex flex-col gap-8">
  <!-- Back Button -->
  <div>
    <a 
      href={localizeHref('/') + '#projects'} 
      class="inline-flex items-center gap-2 text-xs font-semibold text-neutral-400 hover:text-primary transition-colors select-none font-mono"
    >
      {m.proj_back()}
    </a>
  </div>

  <!-- Project Header Card -->
  <div class="glow-card rounded-2xl p-6 md:p-8 flex flex-col gap-6 relative overflow-hidden">
    <div class="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] pointer-events-none"></div>

    <div class="flex flex-col gap-3">
      <h1 class="font-display font-extrabold text-3xl md:text-4xl text-white tracking-tight leading-tight">
        {metadata.title}
      </h1>
      <p class="text-sm md:text-base text-neutral-450 leading-relaxed max-w-2xl font-sans">
        {metadata.summary}
      </p>
    </div>

    <!-- Details/Tags and Actions -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-neutral-900 pt-6 mt-2">
      <!-- Tags Badges -->
      <div class="flex flex-wrap gap-2">
        {#each metadata.tags as tag}
          <span class="text-xs bg-neutral-950 border border-neutral-850 px-2.5 py-1 rounded text-neutral-450">{tag}</span>
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
              class="flex items-center gap-2 bg-neutral-950 hover:bg-neutral-900 border border-neutral-850 hover:border-neutral-700 text-xs text-neutral-300 font-semibold px-4 py-2 rounded-xl transition-all select-none"
            >
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>
              </svg>
              {m.proj_code()}
            </a>
          {/if}

          {#if metadata.link}
            <a 
              href={metadata.link}
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 bg-primary hover:bg-primary/95 text-xs text-white font-semibold px-4 py-2 rounded-xl transition-all shadow-[0_0_15px_var(--color-primary-glow)] select-none"
            >
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/>
              </svg>
              {m.proj_visit()}
            </a>
          {/if}
        </div>
      {/if}
    </div>

    <!-- Impact box -->
    {#if metadata.impact}
      <div class="bg-primary/5 border border-primary/10 rounded-xl p-4 text-xs text-primary font-medium mt-2 leading-relaxed">
        <span class="font-bold block uppercase tracking-wide text-[9px] text-neutral-500 mb-1">{m.contact_linkedin()} Impact</span>
        {metadata.impact}
      </div>
    {/if}
  </div>

  <!-- Rendered Markdown Body -->
  <div class="prose max-w-none px-4 md:px-8 mt-4">
    <Content />
  </div>
</div>
