<script lang="ts">
    import { page } from "$app/stores";

    //dont work
    let user = $page.data.user;

    async function logout() {
        await fetch("/api/auth/logout", { method: "POST" });
        window.location.href = "/login";
    }
</script>

<main class="container text-center mx-auto mt-5 text-red-500">
    <h1>Vítejte, uživateli!</h1>

    <a href="/login">Přihlásit se</a>
    <a href="/register">Registrovat se</a>
</main>