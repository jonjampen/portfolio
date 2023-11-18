<script>
    import PageSubTitle from './ui/PageSubTitle.svelte';
	import TechStackItem from './ui/TechStackItem.svelte';
    import { siSvelte, siJavascript, siTailwindcss, siReact, siNextdotjs, siPhp, siHtml5, siCss3, siGit, siFigma, siVisualstudiocode } from 'simple-icons';
</script>

<PageSubTitle class="mb-6 mt-16">TECH STACK</PageSubTitle>
<div class="grid grid-cols-auto gap-10 w-full">
    <div class="inline-block">    
        <TechStackItem icon={siJavascript} name="JavaScript" />
        <TechStackItem icon={siSvelte} name="Svelte" />
        <TechStackItem icon={siSvelte} name="SvelteKit" />
        <TechStackItem icon={siTailwindcss} name="TailwindCSS" />
        <TechStackItem icon={siReact} name="React JS" />
        <TechStackItem icon={siNextdotjs} name="Next.js" />
        <TechStackItem icon={siPhp} name="PHP" />
        <TechStackItem icon={siHtml5} name="HTML" />
        <TechStackItem icon={siCss3} name="CSS" />
        <TechStackItem icon={siGit} name="Git" />
        <TechStackItem icon={siFigma} name="Figma" />
        <TechStackItem icon={siVisualstudiocode} name="VS Code" />

    </div>
</div>

