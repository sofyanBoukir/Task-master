import { TrashIcon, PencilSquareIcon, StarIcon, CheckCircleIcon, ClockIcon } from "@heroicons/react/24/outline";

export const Task = ({task}) => {
    return ( 
    <div className="relative w-full lg:w-[21%] bg-white rounded-md p-3 h-52 cursor-pointer hover:bg-gray-200 duration-150 ease-in">
        <h1 className="text-xl font-semibold">{task.title}</h1>
        <h3 className="text-sm text-gray-600 font-semibold">
        {task.description}
        </h3>
        <div className="absolute flex justify-between items-center bottom-2 left-3 right-3">
            <div>
                <span className="text-gray-500 font-semibold text-sm">{task.due_date}</span>
            </div>
            <div>   
                <span className="text-gray-500 font-semibold text-sm">{task.priority}</span>
            </div>
            <div className="flex gap-1">
                <StarIcon className="w-6 h-6 text-gray-300 duration-150 ease-in-out hover:text-yellow-900"/>
                <CheckCircleIcon className="w-6 h-6 text-green-500 hover:text-green-800 duration-150 ease-in-out" />
                <ClockIcon className="w-6 h-6 text-blue-500 hover:text-blue-800 duration-150 ease-in-out"/>
            </div>
        </div>
    </div>
  )
}
