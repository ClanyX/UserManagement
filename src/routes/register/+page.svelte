<script lang="ts">
    let username = '';
    let password = '';
    let errorMessage = '';
    let successMessage = '';

    async function register(){
        const res = await fetch('/api/auth/register', {
            method: 'POST',
            headers: { 'Constent-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const data = await res.json();

        if(res.ok){
            successMessage = data.message;
            errorMessage = '';
            window.location.href = '/login';
        } else {
            successMessage = '';
            errorMessage = data.error;
        }
    }
</script>

<h2>Register</h2>

<form on:submit|preventDefault={register}>
    <label for="username">Username:</label>
    <input type="text" id="username" bind:value={username} required />

    <label for="password">Password:</label>
    <input type="password" id="password" bind:value={password} required />

    <button type="submit">Register</button>

    {#if errorMessage}
        <p style="color: red;">{errorMessage}</p>
    {/if}

    {#if successMessage}
        <p style="color: green;">{successMessage}</p>
    {/if}
</form>