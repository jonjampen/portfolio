<script>
    export let title, link, image;
</script>

<a href={link} target="_blank" class="bg-card aspect-[6/4] rounded-lg flex items-center justify-center no-underline relative h-[180px]">
    <img src="/images/smallProjects/{image}" alt="" class="absolute w-full h-full rounded-lg object-fill">
    <div class="absolute w-full h-full hover:bg-card-transparent hover:text-card-foreground text-[#00000000] font-bold text-2xl rounded-md transition-all flex items-center justify-center">
        {title}
    </div>
</a>
