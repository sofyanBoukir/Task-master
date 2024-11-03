<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
</head> 
<body class="bg-gray-50 dark:bg-gray-900 text-white">
    <x-admin-side-bar profilePhoto='{{$admin->image}}' fullName='{{$admin->full_name}}'>
      <div class="mt-8">
        <h2 class="text-2xl font-semibold">Welcome admin, {{$admin->full_name}}</h2>
      </div>
    </x-admin-side-bar>
</body>
</html>
