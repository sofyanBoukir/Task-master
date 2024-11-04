<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 dark:bg-gray-900">

    <x-admin-side-bar>
        <h1 class="text-white mt-5 text-3xl font-semibold">Hello, {{$admin->full_name}}</h1>
        <h1 class="text-white mt-1 font-semibold text-sm">Here is your personal informations</h1>
        @if (session("success"))
            <x-alert>
                {{session("success")}}
            </x-alert>
        @endif
        
        <h1 class="text-white mt-4 text-2xl font-semibold">My profile</h1>
        <div class="flex gap-10 px-5 py-2 ">
            <div>
                <img src="{{$admin->image}}" class=""/>
            </div>
            <div>
                <h1 class="text-xl font-sm">{{$admin->full_name}}</h1> 
                <div class="bg-green-700 px-2 py-1 text-white rounded-sm">
                    Admin
                </div>
                <h1 class="text-xl font-sm">{{$admin->adress}}</h1> 
            </div>
        </div>
    </x-admin-side-bar>
</body>
</html>
