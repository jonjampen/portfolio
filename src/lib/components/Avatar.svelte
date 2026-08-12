<script lang="ts">
  import avatar from '$lib/assets/avatar.png';
</script>

<div class="relative group">
  <!-- Glowing background ring -->
  <div class="absolute -inset-1 rounded-full bg-primary/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700"></div>
  
  <!-- Outer border animation -->
  <div class="relative p-1.5 rounded-full border border-neutral-800 bg-neutral-900/80 group-hover:border-primary/50 transition-all duration-500">
    <div class="rounded-full overflow-hidden w-40 h-40 md:w-48 md:h-48 border border-neutral-700 bg-neutral-950">
      <img 
        src={avatar} 
        alt="Jon Jampen Avatar" 
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>
  </div>
</div>
