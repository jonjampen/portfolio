<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';

	let nameInput = $state('Jon');

	// Compute character breakdown
	let charBreakdown = $derived.by(() => {
		return Array.from(nameInput).map((char) => {
			const code = char.charCodeAt(0);
			const hex = code.toString(16).padStart(2, '0');
			return { char, code, hex };
		});
	});

	// Compute total hex
	let hexCode = $derived.by(() => {
		return charBreakdown.map((c) => c.hex).join('');
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

			document.documentElement.style.setProperty(
				'--theme-primary-glow',
				`rgba(${r}, ${g}, ${b}, 0.15)`
			);
			document.documentElement.style.setProperty(
				'--theme-primary-border',
				`rgba(${r}, ${g}, ${b}, 0.3)`
			);
		}
	}

	function resetTheme() {
		nameInput = 'Jon';
		applyTheme('#4a6f6e');
	}
</script>

<div class="glow-card mx-auto flex w-full max-w-xl flex-col gap-6 rounded-2xl p-6 md:p-8">
	<div class="flex items-center justify-between border-b border-neutral-800 pb-4">
		<h3 class="flex items-center gap-2 font-display text-lg font-bold text-neutral-100">
			<span class="h-2.5 w-2.5 animate-pulse rounded-full bg-primary"></span>
			{m.joke_title()}
		</h3>
		<span class="font-mono text-xs text-neutral-500">UTF-8 → HEX</span>
	</div>

	<p class="text-sm leading-relaxed text-neutral-400">
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
				class="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-4 py-3 font-sans text-neutral-200 transition-colors placeholder:text-neutral-600 focus:border-primary/60 focus:outline-none"
			/>
		</div>

		<!-- Character to Hex Map -->
		{#if charBreakdown.length > 0}
			<div class="flex flex-wrap gap-2 py-2">
				{#each charBreakdown as item}
					<div
						class="flex min-w-[3.5rem] flex-col items-center rounded-md border border-neutral-800/80 bg-neutral-950 px-2.5 py-1.5 transition-colors hover:border-primary/30"
					>
						<span class="font-mono text-xs text-neutral-500">'{item.char}'</span>
						<span class="font-mono text-sm font-semibold text-primary">{item.hex}</span>
					</div>
				{/each}
			</div>
		{/if}

		<!-- Result / Preview -->
		<div
			class="flex flex-col items-stretch justify-between gap-4 rounded-xl border border-neutral-800/60 bg-neutral-950/80 p-4 sm:flex-row sm:items-center"
		>
			<div class="flex items-center gap-3">
				<!-- Live Color Circle -->
				<div
					class="h-10 w-10 rounded-lg border border-neutral-800 shadow-md transition-all duration-300"
					style="background-color: {themeColor}"
				></div>

				<div class="flex flex-col">
					<span class="font-mono text-[10px] tracking-wider text-neutral-500 uppercase"
						>{m.joke_hex_code()}</span
					>
					<span class="font-mono text-base font-bold text-neutral-200">{themeColor}</span>
				</div>
			</div>

			<div class="flex items-center gap-2">
				<button
					onclick={() => applyTheme(themeColor)}
					class="flex-1 cursor-pointer rounded-lg border border-primary/20 bg-primary/10 px-4 py-2.5 text-xs font-medium text-primary transition-all hover:bg-primary/20 active:scale-95 sm:flex-initial"
				>
					{m.joke_btn_apply()}
				</button>
				<button
					onclick={resetTheme}
					aria-label="Reset Theme"
					class="cursor-pointer rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2.5 text-xs text-neutral-400 transition-all hover:bg-neutral-800 hover:text-neutral-200 active:scale-95"
				>
					Reset
				</button>
			</div>
		</div>
	</div>
</div>
