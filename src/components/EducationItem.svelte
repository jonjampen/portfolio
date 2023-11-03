<script>
	import { BookCopy } from 'lucide-svelte';
	export let title, date;
</script>

<div class="flex items-center justify-start gap-4">
	<div class="rounded-full h-11 w-11 bg-card flex items-center justify-center text-card-foreground">
		<BookCopy class="w-7 h-7" />
	</div>
	<div class="flex flex-col gap-1 w-full sm:w-auto max-w-2xl">
		<div class="flex justify-between">
			<h4 class="text-foreground text-lg font-medium">{title}</h4>
			<h4 class="text-gray text-lg font-light">{date}</h4>
		</div>
		<p class="text-gray text-sm">
			<slot />
		</p>
	</div>
</div>
