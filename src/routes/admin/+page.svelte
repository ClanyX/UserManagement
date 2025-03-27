<script lang="ts">
    async function logout(){
        window.location.href = '/login';
    }
</script>

<h1>Admin Page</h1>
<p>Welcome, admin!</p>
<button on:click={logout}>Logout</button>
<button on:click={() => window.location.href = '/'}>Home</button>