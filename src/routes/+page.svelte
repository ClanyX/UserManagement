<script lang="ts">
    import { page } from "$app/stores";

    //dont work
    let user = $page.data.user;

    async function logout() {
        await fetch("/api/auth/logout", { method: "POST" });
        window.location.href = "/login";
    }
</script>

<main class="container">
    <h1>Vítejte v aplikaci</h1>

    <a href="/login">Přihlásit se</a>
    <a href="/register">Registrovat se</a>
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
</style>
