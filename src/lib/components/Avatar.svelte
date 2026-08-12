<script lang="ts">
	import { onMount } from 'svelte';

	// Calculate system "uptime" representing the user's age based on birth date (October 24, 2004)
	const getUptime = () => {
		const birth = new Date(2004, 9, 24); // October 24, 2004
		const now = new Date();
		let years = now.getFullYear() - birth.getFullYear();
		const months = now.getMonth() - birth.getMonth();
		if (months < 0 || (months === 0 && now.getDate() < birth.getDate())) {
			years--;
		}
		return `${years}y`;
	};

	const uptime = getUptime();

	// Dynamic ticking time
	let timeString = $state('');

	onMount(() => {
		const updateTime = () => {
			const now = new Date();
			timeString = now.toLocaleTimeString([], {
				hour: '2-digit',
				minute: '2-digit',
				second: '2-digit'
			});
		};
		updateTime();
		const interval = setInterval(updateTime, 1000);
		return () => clearInterval(interval);
	});
</script>

<div
	class="group antialiased-text relative h-[320px] w-full max-w-[480px] overflow-hidden rounded-2xl border border-neutral-900 bg-neutral-950 p-1 font-mono shadow-[0_0_35px_rgba(0,0,0,0.6)] select-none"
>
	<!-- Glowing background aura -->
	<div
		class="pointer-events-none absolute -inset-10 z-0 rounded-full bg-primary/10 opacity-60 blur-[70px] transition-opacity duration-700 group-hover:opacity-100"
	></div>

	<!-- Waybar Status Bar -->
	<div
		class="relative z-10 mx-1 mt-1 flex h-7 items-center justify-between rounded border border-neutral-900/60 bg-neutral-950 px-3 text-[11px] text-neutral-400"
	>
		<!-- Workspaces (Simpler blocks/pills with no numbers) -->
		<div class="flex items-center gap-1.5">
			<span
				class="h-2 w-4 rounded bg-primary shadow-[0_0_8px_var(--color-primary-glow)] transition-all"
			></span>
			<span class="h-2 w-2 rounded bg-neutral-800 transition-all hover:bg-neutral-700"></span>
			<span class="h-2 w-2 rounded bg-neutral-800 transition-all hover:bg-neutral-700"></span>
			<span class="h-2 w-2 rounded bg-neutral-800 transition-all hover:bg-neutral-700"></span>
		</div>

		<!-- Music status -->
		<div
			class="flex max-w-[180px] items-center gap-1.5 truncate font-sans text-[10px] text-neutral-300"
		>
			<span class="font-bold text-primary">🎵</span> Lofi Beats
		</div>

		<!-- System status tray with safe emoji icons -->
		<div class="flex items-center gap-2.5 font-sans text-[10px]">
			<span class="text-neutral-450 flex items-center gap-0.5">📶 100%</span>
			<span class="text-neutral-450 flex items-center gap-0.5">🔋 98%</span>
			<span class="pl-1 font-mono font-bold tracking-tight text-neutral-100"
				>{timeString || '23:22:07'}</span
			>
		</div>
	</div>

	<!-- Tiling Desktop Window Area -->
	<div class="relative z-10 grid h-[276px] grid-cols-2 gap-2 p-2">
		<!-- Column 1: Terminal (Running Fastfetch on Arch) -->
		<div
			class="group/win relative flex flex-col overflow-hidden rounded-lg p-[1.5px] shadow-[0_0_15px_var(--color-primary-glow)]"
		>
			<!-- Spinning active border (Hyprland styled) -->
			<div
				class="animate-border-spin pointer-events-none absolute inset-0 bg-gradient-to-r from-primary via-neutral-900 to-primary"
			></div>

			<!-- Content Window -->
			<div class="relative z-10 flex flex-1 flex-col overflow-hidden rounded-[6px] bg-neutral-950">
				<!-- Terminal Header -->
				<div
					class="flex h-6 items-center justify-between border-b border-neutral-950 bg-neutral-900/60 px-2.5"
				>
					<span class="text-[9px] font-semibold text-neutral-400">jon@arch:~</span>
					<div class="flex items-center gap-1">
						<span class="h-1.5 w-1.5 rounded-full bg-neutral-800"></span>
						<span class="h-1.5 w-1.5 rounded-full bg-neutral-800"></span>
						<span class="h-1.5 w-1.5 rounded-full bg-primary/70"></span>
					</div>
				</div>

				<!-- Terminal Output -->
				<div
					class="flex flex-1 flex-col gap-2 overflow-y-auto p-2.5 text-[10px] leading-relaxed text-neutral-300"
				>
					<div class="font-bold text-neutral-500">[jon@arch ~]$ fastfetch</div>

					<div class="mt-1 grid grid-cols-12 items-start gap-1">
						<!-- Arch Linux ASCII logo (Sharper text sizing) -->
						<pre
							class="col-span-5 font-mono text-[9.5px] leading-[1.1] font-black text-primary select-none">
      /\
     /  \
    /\   \
   /      \
  /   __   \
 /   (  )   \
/_/        \_\</pre>

						<!-- Host Details (Larger text, safe emoji icons) -->
						<div class="col-span-7 flex flex-col gap-1 pl-2 font-mono text-[10px]">
							<div>
								<span class="font-bold text-primary">jon</span>@<span class="font-bold text-primary"
									>arch</span
								>
							</div>
							<div class="leading-none text-neutral-700">------------</div>
							<div class="flex items-center gap-1.5">
								<span class="text-primary">⏱️</span> <span class="text-neutral-450">up:</span>
								{uptime}
							</div>
							<div class="flex items-center gap-1.5">
								<span class="text-primary">💻</span> <span class="text-neutral-450">os:</span> Arch
							</div>
							<div class="flex items-center gap-1.5">
								<span class="text-primary">⚙️</span> <span class="text-neutral-450">wm:</span> Hypr
							</div>
							<div class="flex items-center gap-1.5">
								<span class="text-primary">🐚</span> <span class="text-neutral-450">sh:</span> zsh
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Column 2 Layout: Neovim Editor & cava Audio Visualizer -->
		<div class="flex h-full flex-col gap-2">
			<!-- Window 2: Neovim Editor -->
			<div
				class="flex flex-1 flex-col overflow-hidden rounded-lg border border-neutral-900 bg-neutral-950"
			>
				<!-- Editor Header -->
				<div
					class="flex h-6 items-center justify-between border-b border-neutral-950 bg-neutral-900/60 px-2.5"
				>
					<span class="font-mono text-[9px] font-semibold text-neutral-400">nvim index.ts</span>
					<div class="flex items-center gap-1">
						<span class="h-1.5 w-1.5 rounded-full bg-neutral-800"></span>
						<span class="h-1.5 w-1.5 rounded-full bg-neutral-800"></span>
						<span class="h-1.5 w-1.5 rounded-full bg-neutral-800"></span>
					</div>
				</div>

				<!-- Code Content (Sharper text sizing, full coloring) -->
				<div
					class="text-neutral-350 flex-1 overflow-hidden p-2.5 font-mono text-[10.5px] leading-relaxed"
				>
					<div class="flex gap-2">
						<span class="w-3 text-right text-neutral-700">1</span>
						<span
							><span class="font-semibold text-purple-400">export</span>
							<span class="font-semibold text-purple-400">const</span>
							<span class="text-blue-400">jon</span>
							= {'{'}</span
						>
					</div>
					<div class="flex gap-2">
						<span class="w-3 text-right text-neutral-700">2</span>
						<span class="pl-2">role: <span class="text-emerald-400">'Software Dev'</span>,</span>
					</div>
					<div class="flex gap-2">
						<span class="w-3 text-right text-neutral-700">3</span>
						<span class="pl-2">status: <span class="text-emerald-400">'Ricing Linux'</span></span>
					</div>
					<div class="flex gap-2">
						<span class="w-3 text-right text-neutral-700">4</span>
						<span
							>{'};'}
							<span class="inline-block h-3.5 w-1.5 animate-pulse bg-primary align-middle"
							></span></span
						>
					</div>
				</div>

				<!-- Lualine status bar (Sharper text sizing) -->
				<div
					class="flex h-4.5 items-center justify-between border-t border-neutral-950 bg-neutral-900 px-2.5 font-mono text-[8.5px] text-neutral-500"
				>
					<span class="rounded-sm bg-primary/20 px-1.5 py-0.5 font-bold text-primary">NORMAL</span>
					<span class="text-neutral-450 font-semibold">index.ts</span>
					<span>typescript</span>
				</div>
			</div>

			<!-- Window 3: Audio Visualizer (cava) -->
			<div
				class="flex h-20 flex-col justify-between gap-1.5 rounded-lg border border-neutral-900 bg-neutral-950 p-2"
			>
				<div
					class="flex items-center justify-between font-mono text-[8.5px] font-semibold text-neutral-500"
				>
					<span>cava</span>
					<span class="text-neutral-450">stereo</span>
				</div>
				<!-- Visualizer Bar Graph -->
				<div class="flex h-9 items-end justify-between px-1">
					<div class="animate-bar-1 w-1.5 rounded-t bg-primary/50"></div>
					<div class="animate-bar-2 w-1.5 rounded-t bg-primary/75"></div>
					<div class="animate-bar-3 w-1.5 rounded-t bg-primary/95"></div>
					<div class="animate-bar-4 w-1.5 rounded-t bg-primary/60"></div>
					<div class="animate-bar-5 w-1.5 rounded-t bg-primary/80"></div>
					<div class="animate-bar-2 w-1.5 rounded-t bg-primary/50"></div>
					<div class="animate-bar-4 w-1.5 rounded-t bg-primary/70"></div>
					<div class="animate-bar-3 w-1.5 rounded-t bg-primary/90"></div>
					<div class="animate-bar-1 w-1.5 rounded-t bg-primary/65"></div>
					<div class="animate-bar-5 w-1.5 rounded-t bg-primary/50"></div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	/* Standard system monospaced configuration for extra sharp rendering */
	.font-mono {
		font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace !important;
	}

	.antialiased-text {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	/* Hyprland active window rotating border gradient */
	@keyframes borderSpin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	.animate-border-spin {
		animation: borderSpin 6s linear infinite;
		transform-origin: center;
		scale: 2; /* Scale up to cover window corners fully */
	}

	/* Audio visualizer bar animations */
	@keyframes barGrow {
		0%,
		100% {
			height: 20%;
		}
		50% {
			height: 100%;
		}
	}
	.animate-bar-1 {
		animation: barGrow 1.4s ease-in-out infinite;
	}
	.animate-bar-2 {
		animation: barGrow 0.9s ease-in-out infinite 0.15s;
	}
	.animate-bar-3 {
		animation: barGrow 1.7s ease-in-out infinite 0.3s;
	}
	.animate-bar-4 {
		animation: barGrow 1.1s ease-in-out infinite 0.1s;
	}
	.animate-bar-5 {
		animation: barGrow 1.5s ease-in-out infinite 0.4s;
	}
</style>
