<script>
	import { siAlacritty, siDiscord, siFigma, siGarmin, siGit, siGnome, siHetzner, siHomeassistant, siIntellijidea, siKodi, siLatex, siLenovo, siLogitech, siNeovim, siObsidian, siSignal, siThinkpad, siThunderbird, siUbuntu, siUptimekuma, siVisualstudiocode, siVscodium, siZsh } from "simple-icons";
	import UsesCard from "../../components/ui/UsesCard.svelte";
	import PageSubTitle from "../../components/ui/PageSubTitle.svelte";
	import Paragraph from '../../components/ui/Paragraph.svelte';
	import PageTitle from "../../components/ui/PageTitle.svelte";
	import Xorunalpp from "../../components/apps/Xorunalpp.svelte";
	import Tandoor from "../../components/apps/Tandoor.svelte";
	import Nothing from "../../components/apps/Nothing.svelte";
    import { goto } from '$app/navigation';
	import Syncthing from "../../components/apps/Syncthing.svelte";
	import Soundcore from "../../components/apps/Soundcore.svelte";
	import Cloudpanel from "../../components/apps/Cloudpanel.svelte";

    const uses = [
        {
            name: "EDC",
            items: [
                { name: "(3a) pro", description: "Phone", href: "https://ch.nothing.tech/products/phone-3a-pro?Colour=Grey&Capacity=12%2B256GB", icon: Nothing },
                { name: "Venu 2", description: "Wearable", href: "https://garmin.com/", icon: siGarmin },
                { name: "Air 2 Pro", description: "Earbuds", href: "https://soundcore.com/", icon: Soundcore },
            ]
        },
        {
            name: "Setup",
            items: [
                { name: "X13 2-in-1", description: "Laptop", href: "https://lenovo.com/", icon: siThinkpad },
                { name: "Ubuntu", description: "OS", href: "https://ubuntu.com/", icon: siUbuntu },
                { name: "GNOME", description: "DE", href: "https://gnome.org/", icon: siGnome },
                { name: "Alacritty", description: "Terminal", href: "https://alacritty.org/", icon: siAlacritty },
                { name: "Zsh", description: "Shell", href: "https://zsh.org/", icon: siZsh },
                { name: "MX Keys", description: "Keyboard", href: "https://www.logitech.com/", icon: siLogitech },
                { name: "Master 3", description: "Mouse", href: "https://www.logitech.com/", icon: siLogitech },
            ]
        },
        {
            name: "Development",
            items: [
                { name: "NeoVim", description: "Editor", href: "https://neovim.io/", icon: siNeovim },
                { name: "IntelliJ", description: "IDE", href: "https://www.jetbrains.com/idea/", icon: siIntellijidea },
                { name: "VS Code", description: "Editor", href: "https://code.visualstudio.com/", icon: siVisualstudiocode },
                { name: "Git", description: "VCS", href: "https://git-scm.com/", icon: siGit },
                { name: "Figma", description: "Design", href: "https://www.figma.com/", icon: siFigma },
            ]
        },
        {
            name: "Productivity",
            items: [
                { name: "Obsidian", description: "Notetaking", href: "https://obsidian.md/", icon: siObsidian },
                { name: "Xournal++", description: "Notetaking", href: "https://xournalpp.github.io/", icon: Xorunalpp },
                { name: "LaTeX", description: "Documents", href: "https://www.latex-project.org/", icon: siLatex },
                { name: "Syncthing", description: "Sync", href: "https://syncthing.net/", icon: Syncthing },
            ]
        },
        {
            name: "Self Hosting",
            items: [
                { name: "HA", description: "IoT", href: "https://www.home-assistant.io/", icon: siHomeassistant },
                { name: "Kuma", description: "Monitoring", href: "https://uptimekuma.org/", icon: siUptimekuma },
                { name: "Kodi", description: "Media", href: "https://kodi.tv/", icon: siKodi },
                { name: "CloudPanel", description: "Hosting", href: "https://CloudPanel.io/", icon: Cloudpanel },
                { name: "Hetzner", description: "Server", href: "https://hetzner.com/", icon: siHetzner },
            ]
        },
        {
            name: "Communication",
            items: [
                { name: "Signal", description: "Chat", href: "https://signal.org/", icon: siSignal },
                { name: "Thunderbird", description: "Email", href: "https://thunderbird.net/", icon: siThunderbird },
                { name: "Discord", description: "Chat", href: "https://discord.com/", icon: siDiscord },
            ]
        }
    ]


    function activate(item) {
        activeUse = item;
    }
</script>

<PageTitle>Uses</PageTitle>
<PageSubTitle class="mb-6">Tools I use daily</PageSubTitle>

<!-- <Paragraph>Click on a tool to learn more about my setup and to check out my configs.</Paragraph> -->

<div class="flex flex-col gap-8 mt-6">
    {#each uses as category}
        <div class="flex gap-4 flex-col">
            <PageSubTitle>{category.name}</PageSubTitle>
            <div class="flex gap-4 flex-wrap">
                {#each category.items as item}
                <UsesCard {item} activate={() => goto("/uses/" + item.name)}/>
                {/each}
            </div>
        </div>
    {/each}
</div>