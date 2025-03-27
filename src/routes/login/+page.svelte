<script lang="ts">
    let username = "";
    let password = "";
    let errorMessage = "";

    async function login() {
        const res = await fetch("/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        const data = await res.json();

        if (res.ok) {
            if (data.session.role === 'admin') {
                window.location.href = "/admin";
            } else {
                window.location.href = "/user";
            }
        } else {
            errorMessage = data.error;
        }
    }
</script>

<form on:submit|preventDefault={login}>
    <input type="text" bind:value={username} placeholder="Username" />
    <input type="password" bind:value={password} placeholder="Password" />
    <button type="submit">LogIn</button>
    {#if errorMessage}
        <p style="color: red;">{errorMessage}</p>
    {/if}
</form>
<button on:click={() => window.location.href = '/'}>Home</button>
