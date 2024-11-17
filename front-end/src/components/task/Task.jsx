import { TrashIcon, PencilSquareIcon, StarIcon } from "@heroicons/react/24/outline";

export const Task = () => {
    return ( 
    <div className="relative w-full lg:w-[21%] bg-white rounded-md p-3 h-52 cursor-pointer hover:bg-gray-200 duration-150 ease-in">
        <h1 className="text-xl font-semibold">This is the task title</h1>
        <h3 className="text-sm text-gray-600 font-semibold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit debitis eaque ad fugit voluptatibus molestiae molestias soluta cupiditate obcaecati iusto!
        </h3>
        <div className="absolute flex justify-between items-center bottom-2 left-3 right-3">
            <div>
                <span className="text-gray-500 font-semibold text-sm">Yesterday</span>
            </div>
            <div>   
                <span className="text-gray-500 font-semibold text-sm">Low</span>
            </div>
            <div className="flex gap-1">
                <StarIcon className="w-6 h-6 text-gray-300 duration-150 ease-in-out hover:text-yellow-900"/>
                <PencilSquareIcon className="w-6 h-6 text-blue-500 hover:text-blue-800 duration-150 ease-in-out" />
                <TrashIcon className="w-6 h-6 text-red-500 hover:text-red-800 duration-150 ease-in-out"/>
            </div>
        </div>
    </div>
  )
}
