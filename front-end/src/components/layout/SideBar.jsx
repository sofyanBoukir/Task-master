import { ClipboardDocumentIcon,DocumentCheckIcon,
   Squares2X2Icon, TrashIcon,
   UserCircleIcon} from "@heroicons/react/24/outline"
   
export const SideBar = () => {
  return (
  <div className="bg-white shadow-sm h-screen w-16 flex flex-col items-center py-10 gap-5 fixed mt-10">
      <div>
        <Squares2X2Icon className="w-7 h-7 cursor-pointer hover:text-blue-700"/>
      </div>
      <div>
        <ClipboardDocumentIcon className="w-7 h-7 cursor-pointer hover:text-blue-700"/>
      </div>
      <div>
        <DocumentCheckIcon className="w-7 h-7 cursor-pointer hover:text-blue-700"/>
      </div>
      <div>
        <TrashIcon className="w-7 h-7 cursor-pointer hover:text-blue-700"/>
      </div>
      <div className="block lg:hidden">
        <UserCircleIcon className="w-7 h-7 cursor-pointer hover:text-blue-700"/>
      </div>
    </div>
  )
}
