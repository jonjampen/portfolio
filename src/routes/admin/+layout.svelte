<script>
	import { goto } from '$app/navigation';
	import './admin.scss';
</script>

<nav>
	<ul>
		<li class="btn primary" on:click={() => goto('/admin')}>Dashboard</li>
		<li class="btn primary" on:click={() => goto('/admin/create')}>Create Project</li>
	</ul>
</nav>

<slot />
