<script lang="ts">
    import { page } from '$app/stores';

    $: if (!$page.data.user || $page.data.user.role !== 'admin') {
        window.location.href = '/user';
    }

    async function logout(){
        await fetch('api/users/logout', { method: 'POST' });
        window.location.href = '/login';
    }
</script>

<h1>Admin Page</h1>
<p>Welcome, {$page.data.user?.username}!</p>
<button on:click={logout}>Logout</button>