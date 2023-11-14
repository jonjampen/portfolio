<script>
    export let icon, name;
</script>

<div class="inline-block mr-4 mb-4">
    <div class="bg-card flex gap-4 h-10 rounded-lg text-foreground fill-secondary px-3 py-2 w-auto">
        {@html icon.svg}
        <p class="h-full flex items-center">{name}</p>
    </div>
</div>