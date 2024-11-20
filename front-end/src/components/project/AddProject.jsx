import { PlusCircleIcon } from '@heroicons/react/24/outline'
import { Input } from '../UI/Input'
import { Label } from '../UI/Label'
import { TextArea } from '../UI/TextArea'
import { Button } from '../UI/Button'
import { useEffect, useState } from 'react'
import { addProject, searchUsers } from '../../services/projectService'
import { LinearLoading } from '../UI/LinearLoading'
import { Notification } from '../UI/Notification'

export const AddProject = ({toggleAddProject}) => {

  const [formData,setFormData] = useState({
    title:"",
    description:"",
    members:[],
  });
  const [users,setUsers] = useState([]);
  const [usernameValue,setUsernameValue] = useState('');
  const [loading,setLoading] = useState(false);
  const [buttonLoading,setButtonLoading] = useState(false);
  const [messsage,setMessage] = useState('');
  const [searchedUsers,setSearchedUsers] = useState([]);
  const [projectCreated,setProjectCreated] = useState(false);

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

    if(response.data.noUsers){
      setUsers([]);
      setMessage("No users founded!");
    }else{
      setUsers(response.data.users.data);
      setMessage("");
    }
  }

  useEffect(() =>{
    if(usernameValue !== ''){
      getSearchedUsers();
    }
  },[usernameValue])

  const addUsers = (username,id) =>{
    if(searchedUsers.some(user => user.username === username)){
      return;
    }    
    setSearchedUsers([...searchedUsers,{
      username : username,
      id : id,
    }]);
    setFormData((prevState)=>({
      ...prevState,
      members: [...(prevState.members || []),id],
    }))
  }

  const deleteSearchedUser = (index,id) =>{
    setSearchedUsers(searchedUsers.filter((user,i) => i !== index))
    setFormData((prevState)=>({
      ...prevState,
      members : prevState.members.filter((member) => id !== member)
    }))
  }

  const handleSubmit = async (e) =>{
    setProjectCreated(null);
    e.preventDefault();
    setButtonLoading(true);
    const response = await addProject(formData,localStorage.getItem("token"));
    setButtonLoading(false);
    if(response.data.created){
      setProjectCreated(true);
    }else{
      setProjectCreated(false);
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
                <form onSubmit={handleSubmit}>
                    <Label text={"Project title"} />
                    <Input type={"text"} value={formData.title} onChange={hanldeChange} placeholder={"Ex: Edutrack project"} name={"title"}/>
                    <br></br>
                    <br></br>
                    <Label text={"Project description"} />
                    <TextArea name={"description"} onChange={hanldeChange} value={formData.description} placeholder={"Ex: EduTrack is a modern and user-friendly school management system designed to streamline...." }/>
                    <br></br>
                    <div>
                      <Label text={"Add members"} />
                      <Input type={"text"} required={false} value={usernameValue} onChange={(e) => setUsernameValue(e.target.value)} name={"search"} placeholder={"Search by username"} />
                    </div>
                    <div className='flex mt-2 gap-2 flex-wrap'>
                      {
                        searchedUsers && searchedUsers.length ? 
                        searchedUsers.map((user,index) =>{ return <>
                          <div key={index} className='rounded-3xl bg-blue-700 px-2 py-1 border-2 border-black cursor-pointer hover:bg-blue-600 duration-150 ease-in'
                           onClick={() => deleteSearchedUser(index,user.id)}>
                            <div>
                              <span className='font-semibold text-md text-white'>{user.username}</span>
                            </div>
                          </div>
                        </>
                          
                        })
                        : null
                      }
                    </div>
                    {
                      loading && <LinearLoading />
                    }
                    <div className='mt-2'>
                      {
                        users && users.length ? 
                          users.map((user) =>{
                            return <>
                               <div className='flex justify-between mt-2 border border-black px-2 py-1 rounded-sm hover:bg-gray-300 duration-150 ease-in cursor-pointer bg-gray-200'>
                                  <span className='text-gray-500 font-semibold'>{user.username}</span>
                                  <PlusCircleIcon className='w-5 h-5 text-gray-700 cursor-pointer' onClick={() => addUsers(user.username,user.id)}/>
                                </div>
                            </>
                          })
                        : null
                      }
                      {
                        messsage && <span className='font-semibold text-lg'>No users founded!</span>
                      }
                      {
                        projectCreated && <Notification kind={"success"} message={"A new project created successfully!"}/>
                      }
                    </div>
                    <div className='mt-3'>
                      <Button text={"Create Project"} bg={"bg-blue-700"} loading={buttonLoading}/>
                    </div>
                </form>
              </div>              
            </div>
          </div>
        </div>
    </div>
  )
}