<script lang="ts">
    import { page } from "$app/stores";

    //dont work
    let user = $page.data.user;

    async function logout() {
        await fetch('/api/auth/logout', { method: 'POST' });
        window.location.href = '/login';
    }
</script>

<main class="container">
    <h1>Vítejte v aplikaci</h1>

    {#if user}
        <p>Přihlášen jako: <strong>{user.username}</strong></p>
        <button on:click={logout}>Odhlásit se</button>
        {#if user.role === "admin"}
            <a href="/admin">Admin Panel</a>
        {:else}
            <a href="/dashboard">Můj Dashboard</a>
        {/if}
    {:else}
        <p>Nejste přihlášeni.</p>
        <a href="/login">Přihlásit se</a>
        <a href="/register">Registrovat se</a>
    {/if}
</main>

<style>
    .container {
        max-width: 600px;
        margin: 0 auto;
        text-align: center;
    }
    a {
        display: block;
        margin: 10px;
        text-decoration: none;
        font-size: 18px;
        color: #007bff;
    }
    button {
        margin-top: 10px;
        padding: 8px 16px;
        font-size: 16px;
        cursor: pointer;
    }
</style>