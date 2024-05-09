<script>
    export let title, link, image;
</script>

<a href={link} target="_blank" class="bg-card aspect-[6/4] rounded-lg flex items-center justify-center no-underline relative h-[180px] md:h-auto md:w-full hover:border hover:border-primary">
    <img src="/images/smallProjects/{image}" alt="" class="absolute w-full h-full rounded-lg object-cover">
    <div class="absolute w-full h-full hover:bg-card-transparent hover:text-card-foreground text-[#00000000] font-bold text-xl rounded-md transition-all flex items-center justify-center text-center">
        {title}
    </div>
</a>
