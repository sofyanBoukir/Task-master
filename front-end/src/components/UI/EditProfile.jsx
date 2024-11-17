import { PlusCircleIcon } from '@heroicons/react/24/outline'
import { Input } from '../UI/Input'
import { Label } from '../UI/Label'
import { TextArea } from '../UI/TextArea'
import { Button } from '../UI/Button'

export const EditProfile = ({toggleEditProfile}) => {
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
                    Edit profile
                </h3>
                <button
                  onClick={toggleEditProfile}
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
                    <Label text={"Full name"} />
                    <Input type={"text"} placeholder={"Soufian boukir"} name={"full_name"}/>
                    <br></br>
                    <br></br>
                    <Label text={"Username"} />
                    <Input type={"text"} placeholder={"sof1_boukir"} name={"username"}/>
                    <br></br>
                    <br></br>
                    <Label text={"Email adress"} />
                    <Input type={"email"} placeholder={"soufianeboukir0@gmail.com"} name={"email"}/>
                    <br></br>
                    <br></br>
                    <Label text={"Change profile photo"} />
                    <Input type={"file"} />
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
