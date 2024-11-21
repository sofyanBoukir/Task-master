import { PlusCircleIcon } from '@heroicons/react/24/outline'
import { Input } from '../UI/Input'
import { Label } from '../UI/Label'
import { TextArea } from '../UI/TextArea'
import { Button } from '../UI/Button'
import { useEffect, useState } from 'react'
import { getProjectMembers, searchUsers } from '../../services/projectService'
import { LinearLoading } from '../UI/LinearLoading'
import { NormalNotification } from '../UI/NormalNotification'

export const ProjectDetails = ({project,toggleEditProject}) => {

  const [formData,setFormData] = useState({
    title : project.title,
    description : project.description,
  });
  const [loading,setLoading] = useState(false);
  const [members,setMembers] = useState([]);
  const [usernameValue,setUsernameValue] = useState('');
  const [message,setMessage] = useState("");
  const [searchLoading,setSearchLoading] = useState(false);
  const [users,setUsers] = useState([]);
  const [userExistError,setUserExistError] = useState(false);

  const getSearchedUsers = async () =>{
    const data = new FormData();    
    data.append("username",usernameValue);
    setSearchLoading(true);
    const response = await searchUsers(data,localStorage.getItem("token"));
    setSearchLoading(false);

    if(response.data.noUsers){
      setUsers([]);
      setMessage("No users founded!");
    }else{
      setUsers(response.data.users.data);
      setMessage("");
    }
  }

  const getProjectDetails = async () =>{
    setLoading(true);
    const response = await getProjectMembers(project.id);
    setLoading(false)
    if(response.data.found){
      setMembers(response.data.members);
    }
  }

  const addMembers = (username,id) =>{
    setUserExistError(false);
    if(members.some(user => user.username === username)){
      setUserExistError(true);
      return;
    }
    setMembers([...members,{
        id : id,
        username : username,
      }
    ]);
  }

  useEffect(() =>{
    if(usernameValue !== ''){
      getSearchedUsers();
    }
  },[usernameValue]);

  useEffect(() =>{
    getProjectDetails();
  },[]);

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
                  Edit project details
                </h3>
                <button
                  onClick={toggleEditProject}
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
                    <Input type={"text"} value={formData.title} placeholder={"Ex: Edutrack project"} name={"title"}/>
                    <br></br>
                    <br></br>
                    <Label text={"Project description"} />
                    <TextArea name={"description"} value={formData.description} placeholder={"Ex: EduTrack is a modern and user-friendly school management system designed to streamline...." }/>
                    <br></br>
                    <div>
                      <Label text={"Add users"} />
                      <Input type={"text"} name={"search"} value={usernameValue} onChange={(e) => setUsernameValue(e.target.value)} required={false} placeholder={"Search by username"} />
                    </div>
                    {
                      loading && <div className='mt-2'><LinearLoading /></div>
                    }
                    <div className='flex mt-2 gap-2 flex-wrap'>
                      {
                        members && members.length ? 
                        members.map((member,index) =>{ return <>
                          <div key={index} className={`rounded-3xl ${member.role === 'owner' ? 'bg-green-700 hover:bg-green-600' : 'bg-blue-700'} px-2 py-1 border-2 border-black cursor-pointer hover:bg-blue-600 duration-150 ease-in`}>
                            <div>
                              <span className='font-semibold text-md text-white'>{member.username} | {member.role ? member.role : 'member'}</span>
                            </div>
                          </div>
                        </>
                        })
                        : null
                      }
                    </div>
                    <div className='mt-2'>
                      {
                        searchLoading && <LinearLoading />
                      }
                      {
                        userExistError && <NormalNotification message={"Already exist!"} />
                      }
                      {
                        users && users.length ? 
                          users.map((user) =>{
                            return <>
                              <div className='flex justify-between mt-2 border border-black px-2 py-1 rounded-sm hover:bg-gray-300 duration-150 ease-in cursor-pointer bg-gray-200'>
                                  <span className='text-gray-500 font-semibold'>{user.username}</span>
                                  <PlusCircleIcon className='w-5 h-5 text-gray-700 cursor-pointer' onClick={() => addMembers(user.username,user.id)}/>
                                </div>
                            </>
                          })
                        : null
                      }
                      {
                        message && <span className='font-semibold text-lg'>No users founded!</span>
                      }
                    </div>
                    <div className='mt-3'>
                      <Button text={"Save changes"} bg={"bg-blue-700"} />
                    </div>
                </form>
              </div>              
            </div>
          </div>
        </div>
    </div>
  )
}
