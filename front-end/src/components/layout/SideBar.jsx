import { BookmarkIcon, ClipboardDocumentIcon,DocumentCheckIcon,
   PencilSquareIcon,
   RectangleStackIcon,
   Squares2X2Icon, TrashIcon,
   UserCircleIcon} from "@heroicons/react/24/outline"
import { useNavigate } from "react-router-dom"
   
export const SideBar = () => {
  const navigate = useNavigate();
  const path = location.pathname;
  
  return (
  <div className="bg-white shadow-sm h-screen w-16 flex flex-col items-center gap-5 fixed pt-20">
      <div>
        <Squares2X2Icon className={`w-7 h-7 cursor-pointer hover:text-blue-700 ${path === '/main/dashboard'? `text-blue-700`:null}`}
         onClick={() => navigate("/main/dashboard")}/>
      </div>
      <div>
        <PencilSquareIcon className={`w-7 h-7 cursor-pointer hover:text-blue-700 ${path === '/main/addTasks'? `text-blue-700`:null}`}
         onClick={() => navigate("/main/addTasks")}/>
      </div>
      <div>
        <ClipboardDocumentIcon className={`w-7 h-7 cursor-pointer hover:text-blue-700 ${path === '/main/tasks'? `text-blue-700`:null}`}
         onClick={() => navigate("/main/tasks")}/>
      </div>
      <div>
        <DocumentCheckIcon className={`w-7 h-7 cursor-pointer hover:text-blue-700 ${path === '/main/completed'? `text-blue-700`:null}`}
         onClick={() => navigate("/main/completed")}/>
      </div>
      <div>
        <RectangleStackIcon className={`w-7 h-7 cursor-pointer hover:text-blue-700 ${path === '/main/projectsWith'? `text-blue-700`:null}`}
         onClick={() => navigate("/main/projectsWith")}/>
      </div>
      <div>
        <TrashIcon className={`w-7 h-7 cursor-pointer hover:text-blue-700 ${path === '/main/deleted'? `text-blue-700`:null}`}
         onClick={() => navigate("/main/deleted")}/>
      </div>
      
      <div>
        <BookmarkIcon className={`w-7 h-7 cursor-pointer hover:text-blue-700 ${path === '/main/saved'? `text-blue-700`:null}`}
         onClick={() => navigate("/main/saved")}/>
      </div>
    </div>
  )
}