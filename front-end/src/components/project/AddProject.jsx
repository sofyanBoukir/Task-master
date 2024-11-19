import { PlusCircleIcon } from '@heroicons/react/24/outline'
import { Input } from '../UI/Input'
import { Label } from '../UI/Label'
import { TextArea } from '../UI/TextArea'
import { Button } from '../UI/Button'
import { useEffect, useState } from 'react'
import { searchUsers } from '../../services/projectService'
import { LinearProgress } from '@mui/material'

export const AddProject = ({toggleAddProject}) => {

  const [formData,setFormData] = useState({
    title:"",
    description:"",
    members:[],
  });

  const [users,setUsers] = useState([]);
  const [usernameValue,setUsernameValue] = useState('');
  const [loading,setLoading] = useState(false);

  const hanldeChange = (e) =>{
    const {name,value} = e.target;
    setFormData((prevState) =>({
      ...prevState,
      [name]:value,
    }));
  }

  const getSearchedUsers = async () =>{
    const data = new FormData();    
    data.append("username",usernameValue);
    setLoading(true);
    const response = await searchUsers(data,localStorage.getItem("token"));
    setLoading(false);
    console.log(response);
    setUsers(response.data.users.data);
  }

  useEffect(() =>{
    getSearchedUsers();
  },[usernameValue])

  return (
    <div>
        <div
          className="fixed inset-0 z-50 flex justify-center items-center w-full h-screen bg-gray-800 bg-opacity-50"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="relative p-4 w-[100%] md:w-[40%] max-w-2xl max-h-full">
            <div className="relative bg-white text-black rounded-md">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900" id="modal-title">
                  Add new Project
                </h3>
                <button
                  onClick={toggleAddProject}
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
                <form>
                    <Label text={"Project title"} />
                    <Input type={"text"} value={formData.title} onChange={hanldeChange} placeholder={"Ex: Edutrack project"} name={"title"}/>
                    <br></br>
                    <br></br>
                    <Label text={"Project description"} />
                    <TextArea name={"description"} onChange={hanldeChange} value={formData.description} placeholder={"Ex: EduTrack is a modern and user-friendly school management system designed to streamline...." }/>
                    <br></br>
                    <div>
                      <Label text={"Add members"} />
                      <Input type={"text"} value={usernameValue} onChange={(e) => setUsernameValue(e.target.value)} name={"search"} placeholder={"Search by username"} />
                    </div>
                    <div className='flex mt-2 gap-2 flex-wrap'>
                      <div className='rounded-3xl border-2 border-gray-500 px-2 flex items-center hover:bg-gray-200 cursor-pointer duration-150 ease-in-out'>
                        <div>
                          <span className='font-semibold text-md text-gray-500'>soufian</span>
                        </div>
                      </div>
                    </div>
                    {
                      loading && <LinearProgress />
                    }
                    <div className='mt-2'>
                      {
                        users && users.length ? 
                          users.map((user) =>{
                            return <>
                               <div className='flex justify-between'>
                                  <span className='text-gray-500 font-semibold'>{user.username}</span>
                                  <PlusCircleIcon className='w-5 h-5 text-gray-600 cursor-pointer'/>
                                </div>
                            </>
                          })
                        : "No users found"
                      }
                    </div>
                    <div className='mt-3'>
                      <Button text={"Create Project"} bg={"bg-blue-700"} />
                    </div>
                </form>
              </div>              
            </div>
          </div>
        </div>
    </div>
  )
}
