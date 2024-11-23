import { useContext, useEffect, useState } from "react"
import { Label } from "../UI/Label"
import { TextArea } from "../UI/TextArea"
import { getProjectMembers } from "../../services/projectService"
import { LinearLoading } from "../UI/LinearLoading"
import { AuthContext } from "../../context/AuthContext"
import { Button } from "../UI/Button"
import { Notification } from "../UI/Notification"
import { Input } from "../UI/Input"

export const AddTask = ({toggleAddTask,project}) => {

  const [members,setMembers] = useState([]);
  const [loading,setLoading] = useState(false);
  const [userSelected,setUserSelected] = useState(null);
  const [assignError,setAssignError] = useState(false);

  const {user} = useContext(AuthContext);
  const getProjectDetails = async ()=>{
    setLoading(true);
    const response = await getProjectMembers(project.id);
    setLoading(false);
    if(response.data.found){
      setMembers(response.data.members);
    }
  }
  
  useEffect(() => {
    getProjectDetails();
  },[])

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(userSelected === null){
      setAssignError(true);
      return;
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
          <div className="relative p-4 w-[100%] md:w-[60%] max-w-2xl max-h-full overflow-auto">
            <div className="relative bg-white text-black rounded-md">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900" id="modal-title">
                  Add new Task on <span className="text-xl font-bold">{project.title}</span>
                </h3>
                <button
                  onClick={toggleAddTask}
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
                    <Label text={"Task title"} />
                    <Input name={"title"} placeholder={"Task title"} type={"text"}/>
                    <br></br>
                    <br></br>
                    <Label text={"Task due date"} />
                    <Input name={"dueDate"} type={"date"}/>
                    <br></br>
                    <br></br>
                    <Label text={"Task Priority"} />
                    <select className="w-[100%] px-3 py-2 rounded-sm cursor-pointer border border-black bg-white" required>
                      <option value="">Select priority</option>
                      <option value="low">low</option>
                      <option value="medium">medium</option>
                      <option value="heigh">heigh</option>
                    </select>
                    <br></br>
                    <br></br>
                    <Label text={"Task description"} />
                    <TextArea name={"description"} placeholder={"Task description"} size={200}/>
                    <br></br>
                    <Label text={"Assign this task to"}/>
                    {
                        loading && <div className="mt-2">
                          <LinearLoading />
                        </div>
                    }
                    <div className="flex gap-2 mt-1 flex-wrap">
                      {
                        members && members.length ?
                          members.map((member) =>{ return <>
                            <div className={`${userSelected === member.id ? 'bg-black text-white':null} bg-white rounded-sm border border-black px-2 py-1 cursor-pointer`} onClick={() => setUserSelected(member.id)}>
                              <span>{member.username === user.username ? "Myself" : member.username}</span>
                            </div>
                          </>
                        }) : null
                      }
                    </div>
                    <br></br>
                    <Button text={"Assign task"} bg={"bg-blue-700"}/>
                </form>
              </div>   
              {
                assignError && <Notification message={"Please assign this task to someone!"} kind={"error"}/>
              }           
            </div>
          </div>
        </div>
    </div>
  )
}