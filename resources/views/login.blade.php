<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 dark:bg-gray-900">
  <div class="w-[30%] rounded-lg border border-black px-6 py-8 mx-auto mt-20 dark:bg-gray-800 dark:border-gray-700 text-white">
    <h1 class="font-semibold text-2xl mb-4">Login to your dashboard</h1> 

    <form action="{{route('login.login')}}" method="POST">
        <label>Username</label>
        <input type="text" 
        name="username" 
        class="w-[100%] rounded-lg py-2 px-3 borde-none outline-blue-700 mt-1 border-gray-500 dark:bg-gray-700"
        placeholder="Ex: sof11_b"/>
        <br>
        <br>

        <label>Password</label>
        <input type="password" 
        name="password" 
        class="w-[100%] rounded-lg py-2 px-3 borde-none outline-blue-700 mt-1 border-gray-500 dark:bg-gray-700"
        placeholder="......"/>
        <a href="" class="text-blue-600 flex justify-end font-semibold text-sm hover:underline mt-2">Forgot Password?</a>
        <button class="bg-blue-700 text-white text-center py-2 rounded-lg w-[100%] mt-4 hover:bg-blue-600">Sign in</button>
    </form>
  </div>
</body>
</html>
