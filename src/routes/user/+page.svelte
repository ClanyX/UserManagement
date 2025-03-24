<script>
    async function logout() {
        await fetch("api/users/logout", { method: "POST" });
        window.location.href = "/login";
    }
</script>

<h1>Welcome, user!</h1>
<p>This is your dashboard.</p>
<button on:click={logout}>Logout</button>