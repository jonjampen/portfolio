<script>
	export let badge = false;
</script>

<div class="rounded-full bg-card {$$props.class}">
	<img src="/avatar/happy.png" alt="Avatar of Jon" class="w-full h-full" width={$$props.width} height={$$props.height} />
</div>
{#if badge}
	{#if badge.time + 1800000 > Date.now()}
		<div class="absolute top-2 left-[64px] text-xs flex items-center justify-center h-10 w-[200px] z-20">
			<div class="absolute translate-x-[-50%] translate-y-[-50%] left-0 top-0 statusIndicator">
				<div class="bg-[#47b34740] rounded-full text-xs flex items-center justify-center h-10 w-10  px-1"></div>
			</div>
			<div class="absolute translate-x-[-50%] translate-y-[-50%] left-[110px] top-5 w-full h-full flex items-center justify-start status">
				<div class="bg-primary rounded-full text-xs flex items-center justify-center h-5 w-5 px-2 statusText">
					<div class="w-full h-full flex items-center justify-center">
						<p class="text-primary-foreground font-light">Now: {badge.type} in {badge.language}</p>
					</div>
				</div>
			</div>
		</div>
	{:else}
	<div class="absolute top-2 left-[64px] text-xs flex items-center justify-center h-10 w-[200px]  z-20">
		<div class="absolute translate-x-[-50%] translate-y-[-50%] left-[110px] top-5 w-full h-full flex items-center justify-start status">
			<div class="bg-error rounded-full text-xs flex items-center justify-center h-5 w-5 px-2 statusText">
				<div class="w-full h-full flex items-center justify-center">
					<p class="text-error-foreground font-light">Offline (Last: {badge.type} in {badge.language})</p>
				</div>
			</div>
		</div>
	</div>
	{/if}
{/if}

<style>
	.statusIndicator {
		animation: growShrink 1s infinite alternate ease-in-out;
	}

	@keyframes growShrink {
      0% {
        transform: scale(0.5);
      }
      100% {
        transform: scale(0.8);
      }
    }

	.status p {
		opacity: 0;
	}
	.status:hover p {
		opacity: 1;
	}
	.status:hover .statusText {
		width: auto;
	}
</style>