import { useState } from "react";
import { Button } from "../UI/Button"
import { deleteProject } from "../../services/projectService";
import { Notification } from "../UI/Notification";


export const DeleteProject = ({project,toggleDeleteProject}) => {

  const [loading,setLoading] = useState(false);
  const [message,setMessage] = useState('');
  const [deleted,setDeleted] = useState(null);

  const handleSubmit = async (e) =>{
    setDeleted(null);
    e.preventDefault();
    setLoading(true);
    const response = await deleteProject(project.id,localStorage.getItem("token"));
    setLoading(false);
    console.log(response);
    
    if(response.data.deleted){
      setDeleted(true);
    }else{
      setDeleted(false);
      setMessage(response.data.message);
    }
  }
  return (
    <div>
        <div
          className="fixed inset-0 z-50 flex justify-center items-center w-full h-screen bg-gray-800 bg-opacity-50"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="relative p-4 w-[100%] md:w-[80%] max-w-2xl max-h-full overflow-auto">
            <div className="relative bg-white text-black rounded-md">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900" id="modal-title">
                  Delete <span className="text-2xl font-bold">{project.title} ?</span>
                </h3>
                <button
                  onClick={toggleDeleteProject}
                  type="button"
                  className="text-gray-400 bg-transparent text-sm w-8 h-8 inline-flex justify-center items-center "
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              <div className="p-4 md:p-5 space-y-4">
                <form onSubmit={handleSubmit}>
                    <h1 className="text-xl text-center">Are you sure you want to delete this project!</h1>
                    <br></br>
                  <div className='flex gap-5 w-[100%] md:w-[50%] mx-auto'>
                    <Button text={"Cancel"} bg={"bg-gray-400"} type={"button"} onclick={toggleDeleteProject}/>
                    <Button text={"Delete"} bg={"bg-red-700"} type={"submit"} loading={loading} />
                  </div>
                </form>
              </div>   
              {
                deleted && <Notification message={"Project deleted successfully!"} kind={"success"}/>
              }           
              {
                deleted === false && <Notification message={message} kind={"error"} />
              }
            </div>
          </div>
        </div>
    </div>
  )
}
