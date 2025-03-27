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

<div class="min-h-screen bg-gray-100 flex items-center justify-center p-4">
    <div class="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">Login</h2>
      
      <form class="space-y-4" on:submit|preventDefault={login}>
        <div>
          <label for="username" class="block text-sm font-medium text-gray-700 mb-1">Username</label>
          <input 
            type="text" 
            name="username"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
            placeholder="Username"
            bind:value={username}
          />
        </div>
  
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input 
            type="password"
            name="password"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
            placeholder="••••••••"
            bind:value={password}
          />
        </div>      

          {#if errorMessage}
             <div class="text-red-500 text-sm mt-2">{errorMessage}</div>
          {/if}

        <button type="submit" class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors">
            Login
        </button>
      </form>
  
      <div class="mt-6 text-center text-sm text-gray-600">
        Don't have an account? 
        <a href="/register" class="text-indigo-600 hover:text-indigo-500 font-medium">Register</a>
      </div>
    </div>
  </div>
