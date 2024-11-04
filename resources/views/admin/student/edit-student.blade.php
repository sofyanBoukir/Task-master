<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 dark:bg-gray-900">

    <x-admin-side-bar>
      <h1 class="text-white mt-5 text-3xl font-semibold">Here you can Edit {{$student->full_name}} informations</h1>
      <h1 class="text-white mt-1 font-semibold text-sm">You can edit only this informations</h1>
      @if (session("success"))
          <x-alert>
            {{session("success")}}
          </x-alert>
      @endif
      <form class="text-white mt-6" method="POST" action="{{route("admin.student.update",$student->id)}}" enctype="multipart/form-data">
        @csrf
        @method("PATCH")     
        <labe class="mb-1">Profile photo</label>
        <div class="flex gap-1 items-center">
          <div class="">
            <img src="{{asset($student->image)}}" class="rounded-full w-11 h-11"/>
          </div>
          <div class="">
            <label for="file-upload" class="bg-blue-500 rounded-sm px-2 py-1 cursor-pointer hover:bg-blue-400">Change photo</label>
            <input type="file" id="file-upload" class="hidden" name="image"/>
            <span>PNG,GPG,GPEG max:10mb</span>
          </div>
        </div>
        <span class="text-sm text-red-500">
          @error('image')
            {{$message}}
          @enderror
        </span>

       <div class="flex justify-between gap-10 mt-4">
          <div>
            <label class="">Full name</label>
            <input type="text" 
                name="full_name" 
                class="w-[100%] rounded-lg py-2 px-3 borde-none outline-blue-700 mt-1 border-gray-500 dark:bg-gray-700"
                value="{{$student->full_name}}"/>
          </div>
       </div>
        <div class="mt-4">
          <label>Adress</label>
          <input type="text" 
          name="adress" 
          class="w-[100%] rounded-lg py-2 px-3 borde-none outline-blue-700 mt-1 border-gray-500 dark:bg-gray-700"
          value="{{$student->adress}}"/>
        </div>
        <div class="flex gap-10 mt-4">
          <div>
            <label class="">Birthday date</label>
            <input type="date" 
                name="birth_date" 
                class="w-[100%] rounded-lg py-2 px-3 borde-none outline-blue-700 mt-1 border-gray-500 dark:bg-gray-700"
                value="{{$student->birth_date}}"/>
          </div>
          <div class="">
            <label class="w-[30%]">Current grade ({{$student->current_grade}})</label><br>
            <select name="grade" class="rounded-lg py-2 px-3 borde-none outline-blue-700 mt-1 border-gray-500 dark:bg-gray-700">
                <option value={{$student->current_grade}}>Current grade</option>
                <option value="TC">TC</option>
                <option value="1BAC" selected>1BAC</option>
                <option value="2BAC">1BAC</option>
            </select>
          </div>
          <div>
            <label class="w-[30%]">Parent's phone number</label>
            <input type="text" 
                name="parent_phone" 
                class="w-[100%] rounded-lg py-2 px-3 borde-none outline-blue-700 mt-1 border-gray-500 dark:bg-gray-700"
                value="{{$student->parent_phone}}" readonly/>
          </div>
        </div>
        
        <div class="flex gap-10 mt-4">
          <div>
            <label class="">Parent's full name</label>
            <input type="text" 
                name="parent_name" 
                class="w-[100%] rounded-lg py-2 px-3 borde-none outline-blue-700 mt-1 border-gray-500 dark:bg-gray-700"
                value="{{$student->parent_name}}"/>
          </div>
          <div>
            <label class="">Password</label>
            <input type="text" 
                name="password" 
                class="w-[100%] rounded-lg py-2 px-3 borde-none outline-blue-700 mt-1 border-gray-500 dark:bg-gray-700"
                placeholder="New password here"/>
          </div>
        </div>
        <div class="flex justify-end gap-2">
          <input type="reset" 
          class="dark:bg-gray-900 px-4 cursor-pointer py-1.5 border border-gray-500 text-white rounded-lg"
          value="Cancel"/>
          <input type="submit" 
          class="bg-green-700 px-4 py-1.5 text-white rounded-lg cursor-pointer hover:bg-green-600"
          value="Save changes"/>
        </div>
      </form>
    </x-admin-side-bar>
</body>
</html>
