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
        <span class="text-sm font-semibold">Here you have full acess to students, edit,delete,add</span>
      </div>
      <div class="mt-8">
        <form action="{{route("students.search")}}" method="POST">
          @csrf
          <select name="grade" class="rounded-lg py-2 px-3 borde-none outline-blue-700 mt-1 border-gray-500 dark:bg-gray-700 cursor-pointer">
            <option value="">Current grade</option>
            <option value="TC">TC</option>
            <option value="1BAC">1BAC</option>
            <option value="2BAC">2BAC</option>
          </select>
  
          <input type="text" 
          placeholder="username"
          name="username"
          class="rounded-lg py-2 px-3 borde-none outline-blue-700 mt-1 border-gray-500 dark:bg-gray-700 focus:outline focus:outline-2 focus:outline-blue-500"/>
  
          <input type="text" 
          placeholder="Search for student buy full name"
          name="student_name"
          class="rounded-lg py-2 px-3 borde-none outline-blue-700 mt-1 border-gray-500 dark:bg-gray-700 focus:outline focus:outline-2 focus:outline-blue-500"/>
  
          <input type="submit" 
          class="text-white bg-green-700 rounded-lg py-2 px-3 cursor-pointer hover:bg-green-600"
          value="Search"
          />
        <button class="text-white bg-blue-700 rounded-lg py-2 px-3 cursor-pointer hover:bg-blue-600" type="button"><a href="{{route('student.profile.create')}}">Add Student</a></button>
        </form>
      </div>
      <div class="mt-4">
        <table class="border border-gray-500">
          <thead class="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th class="py-3 px-2">#</th>
              <th class="py-3 px-2">Full name</th>
              <th class="py-3 px-2">username</th>
              <th class="py-3 px-2">Current grade</th>
              <th class="py-3 px-2">Gender</th>
              <th class="py-3 px-2">Email</th>
              <th class="py-3 px-2">Parent phone</th>
              <th class="py-3 px-2">Action</th>
            </tr>
          </thead>
          @foreach ($students as $student)
            <tbody class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <tr>
                <td class="px-2 py-2 text-center">{{$student->id}}</td>
                <td class="px-2 py-2 text-center">{{$student->full_name}}</td>
                <td class="px-2 py-2 text-center">{{$student->username}}</td>
                <td class="px-2 py-2 text-center">{{$student->current_grade}}</td>
                <td class="px-2 py-2 text-center">{{$student->gender}}</td>
                <td class="px-2 py-2 text-center">{{$student->email}}</td>
                <td class="px-2 py-2 text-center">{{$student->parent_phone}}</td>
                <td class="px-2 py-2 text-center">
                  <button class="bg-red-700 text-white rounded-sm px-2 py-1 hover:bg-red-600">Delete</button>
                  <button class="bg-green-700 text-white rounded-sm px-2 py-1 hover:bg-green-600">Edit</button>
                </td>
              </tr>
            </tbody>
          @endforeach
        </table>
        <br>
        <div class="w-[30%]">
          {{$students->links()}}
        </div>
      </div>
    </x-admin-side-bar>
</body>
</html>
