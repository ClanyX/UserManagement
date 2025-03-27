<script>
    async function logout() {
        window.location.href = "/login";
    }
</script>

<h1>Welcome, user!</h1>
<p>This is your dashboard.</p>
<button on:click={logout}>Logout</button>
<button on:click={() => window.location.href = '/'}>Home</button>