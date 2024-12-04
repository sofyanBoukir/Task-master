import { TrashIcon } from "@heroicons/react/24/outline"
import image from "../../../public/defaultImage.png";
export const AssignedTask = () => {
  return (
    <div className="bg-white shadow-lg rounded-md px-5 py-4 w-[88%]">
        <div className="flex gap-2 items-center mb-3">
            <div className="flex w-[100%] justify-between items-center">
                <div className="flex gap-2 items-center">
                    <img className="w-10 h-10 rounded-full" src={image}/>
                    <div className="flex flex-col">
                        <span className="text-lg font-semibold">Soufian boukir</span>
                        <span>sofya</span>
                    </div>
                </div>
                <div className="bg-green-700 text-white rounded-sm px-3 py-1">
                    <span>Project title</span>
                </div>
            </div>
        </div>
        <h1 className="text-xl font-semibold">Task title</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta amet optio voluptatem, temporibus molestias odit totam, minus, fugit cumque aliquid illo ex. Quas facilis at tenetur perferendis magnam unde commodi.</p>
        <div className="flex justify-between px-5 mt-2">
            <span className="text-md font-semibold">Heigh</span>
            <span className="text-md font-semibold">Pending</span>
            <TrashIcon className="w-6 h-6 text-red-600 cursor-pointer"/>
        </div>
    </div>
  )
}
