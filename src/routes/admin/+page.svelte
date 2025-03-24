<script lang="ts">
    async function logout(){
        await fetch('api/auth/logout', { method: 'POST' });
        window.location.href = '/login';
    }
</script>

<h1>Admin Page</h1>
<p>Welcome, admin!</p>
<button on:click={logout}>Logout</button>