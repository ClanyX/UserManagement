<script lang="ts">
    import { page } from '$app/stores';

    $: if (!$page.data.user) {
        window.location.href = '/login';
    }
</script>

<h1>Welcome, {$page.data.user?.username}!</h1>
<p>This is your dashboard.</p>