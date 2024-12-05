import { TrashIcon } from "@heroicons/react/24/outline"
import image from "../../../public/defaultImage.png";
export const AssignedTask = ({assignedTask}) => {
  return (
    <div className="bg-white shadow-lg rounded-md px-5 py-4 w-[88%]">
        <div className="flex gap-2 items-center mb-3">
            <div className="flex w-[100%] justify-between items-center">
                <div className="flex gap-2 items-center">
                    <img className="w-10 h-10 rounded-full" src={assignedTask.assigned_user.profile_photo}/>
                    <div className="flex flex-col">
                        <span className="text-lg font-semibold">{assignedTask.assigned_user.full_name}</span>
                        <span>{assignedTask.assigned_user.username}</span>
                    </div>
                </div>
            </div>
        </div>
        <h1 className="text-xl font-semibold">{assignedTask.title}</h1>
        <p>{assignedTask.description}</p>
        <div className="flex justify-between px-5 mt-2">
            <span className="text-md font-semibold">{assignedTask.priority}</span>
            <span className="text-md font-semibold">{assignedTask.status}</span>
            <TrashIcon className="w-6 h-6 text-red-600 cursor-pointer"/>
        </div>
    </div>
  )
}
