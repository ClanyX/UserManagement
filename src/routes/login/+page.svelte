<script lang="ts">
    let username = "";
    let password = "";
    let role = "";
    let errorMessage = "";

    async function login() {
        const res = await fetch("/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password, role }),
        });

        const data = await res.json();

        if (res.ok) {
            if (data.role === 'admin') {
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
