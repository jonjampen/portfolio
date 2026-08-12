<script lang="ts">
  import { m } from '$lib/paraglide/messages.js';

  let nameInput = $state('Jon');

  // Compute character breakdown
  let charBreakdown = $derived.by(() => {
    return Array.from(nameInput).map(char => {
      const code = char.charCodeAt(0);
      const hex = code.toString(16).padStart(2, '0');
      return { char, code, hex };
    });
  });

  // Compute total hex
  let hexCode = $derived.by(() => {
    return charBreakdown.map(c => c.hex).join('');
  });

  // Calculate clean 6-character hex for theme color
  let themeColor = $derived.by(() => {
    let raw = hexCode;
    if (raw.length === 0) return '#4a6f6e';
    if (raw.length < 6) {
      raw = raw.padEnd(6, '0');
    }
    return '#' + raw.slice(0, 6);
  });

  function applyTheme(color: string) {
    if (/^#[0-9a-fA-F]{6}$/.test(color)) {
      document.documentElement.style.setProperty('--theme-primary', color);
      
      // Parse RGB for alpha transparency variables
      const r = parseInt(color.slice(1, 3), 16);
      const g = parseInt(color.slice(3, 5), 16);
      const b = parseInt(color.slice(5, 7), 16);
      
      document.documentElement.style.setProperty('--theme-primary-glow', `rgba(${r}, ${g}, ${b}, 0.15)`);
      document.documentElement.style.setProperty('--theme-primary-border', `rgba(${r}, ${g}, ${b}, 0.3)`);
    }
  }

  function resetTheme() {
    nameInput = 'Jon';
    applyTheme('#4a6f6e');
  }
</script>

<div class="glow-card rounded-2xl p-6 md:p-8 flex flex-col gap-6 max-w-xl w-full mx-auto">
  <div class="flex items-center justify-between border-b border-neutral-800 pb-4">
    <h3 class="font-display font-bold text-lg text-neutral-100 flex items-center gap-2">
      <span class="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
      {m.joke_title()}
    </h3>
    <span class="text-xs text-neutral-500 font-mono">UTF-8 → HEX</span>
  </div>

  <p class="text-sm text-neutral-400 leading-relaxed">
    {m.joke_desc()}
  </p>

  <div class="flex flex-col gap-4">
    <!-- Input -->
    <div class="relative">
      <input 
        type="text" 
        bind:value={nameInput} 
        maxlength="15"
        placeholder={m.joke_placeholder()} 
        class="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-neutral-200 focus:outline-none focus:border-primary/60 transition-colors placeholder:text-neutral-600 font-sans"
      />
    </div>

    <!-- Character to Hex Map -->
    {#if charBreakdown.length > 0}
      <div class="flex flex-wrap gap-2 py-2">
        {#each charBreakdown as item}
          <div class="flex flex-col items-center bg-neutral-950 border border-neutral-800/80 rounded-md px-2.5 py-1.5 min-w-[3.5rem] transition-colors hover:border-primary/30">
            <span class="text-xs text-neutral-500 font-mono">'{item.char}'</span>
            <span class="text-sm font-semibold text-primary font-mono">{item.hex}</span>
          </div>
        {/each}
      </div>
    {/if}

    <!-- Result / Preview -->
    <div class="bg-neutral-950/80 border border-neutral-800/60 rounded-xl p-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <!-- Live Color Circle -->
        <div 
          class="w-10 h-10 rounded-lg border border-neutral-800 shadow-md transition-all duration-300"
          style="background-color: {themeColor}"
        ></div>
        
        <div class="flex flex-col">
          <span class="text-[10px] uppercase tracking-wider text-neutral-500 font-mono">{m.joke_hex_code()}</span>
          <span class="text-base font-bold font-mono text-neutral-200">{themeColor}</span>
        </div>
      </div>

      <div class="flex items-center gap-2">
        <button 
          onclick={() => applyTheme(themeColor)}
          class="flex-1 sm:flex-initial bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-all font-medium text-xs px-4 py-2.5 rounded-lg active:scale-95 cursor-pointer"
        >
          {m.joke_btn_apply()}
        </button>
        <button 
          onclick={resetTheme}
          aria-label="Reset Theme"
          class="bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800 transition-all text-xs px-3 py-2.5 rounded-lg active:scale-95 cursor-pointer"
        >
          Reset
        </button>
      </div>
    </div>
  </div>
</div>
