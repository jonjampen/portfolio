<script>
    import { goto } from "$app/navigation";
    import "./admin.scss";
</script>

<nav>
    <ul>
        <li class="btn primary" on:click={() => goto("/admin")} style="cursor:pointer">
            Dashboard
        </li>
        <li class="btn primary" on:click={() => goto("/admin/create/new")} style="cursor:pointer">
            Create Project
        </li>
    </ul>
</nav>

<slot />
