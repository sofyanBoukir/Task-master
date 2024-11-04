<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
</head> 
<body class="bg-gray-50 dark:bg-gray-900 text-white">
    <x-admin-side-bar>
        <h1 class="text-white mt-5 text-3xl font-semibold">Add new Student</h1>
        <h1 class="text-white mt-1 font-semibold text-sm">Complete fieleds to add a Student</h1>
        @if (session("success"))
            <x-alert>
              {{session("success")}}
            </x-alert>
        @endif
        <form class="text-white mt-6" method="POST" action="{{route('student.profile.store')}}" enctype="multipart/form-data">
          @csrf  
          <labe class="mb-1">Profile photo</label>
          <div class="flex gap-1 items-center">
            <div class="bg-blue-300 rounded-full w-11 h-11">
              {{-- <img src="" class="rounded-full w-11 h-11"/> --}}
            </div>
            <div class="">
              <label for="file-upload" class="bg-blue-500 rounded-sm px-2 py-1 cursor-pointer hover:bg-blue-400">Upload photo</label>
              <input type="file" id="file-upload" class="hidden" name="image"/>
              <span>PNG,GPG,GPEG max:10mb</span>
            </div>
          </div>
  
         <div class="flex justify-between gap-10 mt-4">
            <div>
              <label class="">Full name</label>
              <input type="text" 
                  name="full_name"
                  placeholder="Ex: Sofyan bou" 
                  class="w-[100%] rounded-lg py-2 px-3 borde-none outline-blue-700 mt-1 border-gray-500 dark:bg-gray-700"
                  />
            </div>
            <div>
              <label class="w-[30%]">Username</label>
              <input type="text" 
                  placeholder="ex: sof1bo"
                  name="username" 
                  class="w-[100%] rounded-lg py-2 px-3 borde-none outline-blue-700 mt-1 border-gray-500 dark:bg-gray-700"
                  />
            </div>
            <div>
              <label class="w-[30%]">Gender</label>
              <br>
                <input type="radio" value="male" name="gender" id="male"/> <label class="cursor-pointer" for="male">Male</label>
                <input type="radio" value="female" name="gender" id="female" /> <label for="female" class="cursor-pointer">Female</label>
            </div>
            
         </div>
          <div class="mt-4">
            <div>
              <label>Email</label>
              <input type="email" 
              name="email" 
              placeholder="ex: ss@gmail.com"
              class="w-[100%] rounded-lg py-2 px-3 borde-none outline-blue-700 mt-1 border-gray-500 dark:bg-gray-700"
              />
            </div>
            <div class="flex gap-8 mt-4">
              <div>
                <label>Password</label>
                <input type="password" 
                name="password" 
                placeholder=".........."
                class="w-[100%] rounded-lg py-2 px-3 borde-none outline-blue-700 mt-1 border-gray-500 dark:bg-gray-700"
                />
              </div>
              <div>
                <label>Retype password</label>
                <input type="password" 
                name="password_confirmation" 
                placeholder=".........."
                class="w-[100%] rounded-lg py-2 px-3 borde-none outline-blue-700 mt-1 border-gray-500 dark:bg-gray-700"
                />
              </div>
            </div>
          </div>
          <div class="mt-4">
            <label>Adress</label>
            <input type="text" 
            name="adress" 
            placeholder="ex: 722 Chicago, USA"
            class="w-[100%] rounded-lg py-2 px-3 borde-none outline-blue-700 mt-1 border-gray-500 dark:bg-gray-700"
           />
          </div>
          <div class="flex gap-10 mt-4">
            <div>
              <label class="">Birthday date</label>
              <input type="date" 
                  name="birth_date" 
                  class="w-[100%] rounded-lg py-2 px-3 borde-none outline-blue-700 mt-1 border-gray-500 dark:bg-gray-700"
                  />
            </div>
            <div>
              <label class="w-[30%]">Current grade</label>
                <select name="grade" class="w-[100%] rounded-lg py-2 px-3 borde-none outline-blue-700 mt-1 border-gray-500 dark:bg-gray-700" >
                    <option value="">Current Grade</option>
                    <option value="TC">TC</option>
                    <option value="1BAC">1BAC</option>
                    <option value="2BAC">2BAC</option>
                </select>
            </div>
            <div>
              <label class="w-[30%]">Parent's phone number</label>
              <input type="text" 
                  name="parent_phone"
                  placeholder="ex: 0692239820" 
                  class="w-[100%] rounded-lg py-2 px-3 borde-none outline-blue-700 mt-1 border-gray-500 dark:bg-gray-700"
                   />
            </div>
          </div>
          
          <div class="flex gap-10 mt-4">
            <div>
              <label class="">Parent's full name</label>
              <input type="text" 
                  name="parent_name" 
                  class="w-[100%] rounded-lg py-2 px-3 borde-none outline-blue-700 mt-1 border-gray-500 dark:bg-gray-700"
                  placeholder="ex: Jon doe"  
                  />
            </div>
          </div>
          @if ($errors->any())
              @foreach ($errors->all() as $error)
                 <span class="text-red-500">{{$error}}</span><br>
              @endforeach
          @endif
          <div class="flex justify-end gap-2">
            <input type="reset" 
            class="dark:bg-gray-900 px-4 cursor-pointer py-1.5 border border-gray-500 text-white rounded-lg"
            value="Cancel"/>
            <input type="submit" 
            class="bg-green-700 px-4 py-1.5 text-white rounded-lg cursor-pointer hover:bg-green-600"
            value="Add student"/>
          </div>
        </form>
    </x-admin-side-bar>
</body>
</html>
