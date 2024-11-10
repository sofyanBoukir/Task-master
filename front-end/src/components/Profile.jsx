import image from "../../public/image.png"
import { AdminHeader } from "./AdminHeader";
import { useState } from "react";
import { EditInfo } from "./Edit Forms/EditInfo";
import { EditAdress } from "./Edit Forms/EditAdress";

export const Profile = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openModal2 = () => setIsModalOpen2(true);
  const closeModal2 = () => setIsModalOpen2(false);

  return (
    <div className="px-4">
        <AdminHeader />
        <div className="mt-4">
          <h1 className="text-xl font-semibold">My profile</h1>
          <div className="mt-2 bg-gray-100 border-2 rounded-lg px-4 py-3 flex gap-6 items-center">
            <div>
              <img src={image} className="h-24 w-24 rounded-full"/>
            </div>
            <div>
              <span className="text-xl font-semibold">Soufian boukir</span><br></br>
              <span className="text-sm">Super Admin</span><br></br>
              <span className="text-sm">Tiznit, Morocco kingodm</span><br></br>
            </div>
          </div>


          <div className="mt-2 bg-gray-100 border-2 rounded-lg px-4 py-3">
            <div className="flex justify-between w-[100%]">
              <div>
                <h1 className="text-xl font-semibold">Personal informations</h1>
              </div>
              <div>
                <button
                  onClick={openModal}
                  className="bg-green-700 text-white px-3 py-1 rounded-sm"
                  type="button"
                >
                  <span>Edit</span>
                </button>
              </div>
            </div>
            <hr className="my-3 border-gray-400 brder-2"></hr>
            <div className="md:flex md:gap-48 ">
              <div className="md:w-[20%]">
                <label className="text-gray-600 text-sm">Full name</label><br></br>
                <span className="text-lg font-semibold">Soufian boukir</span>
              </div>
              <div className="md:w-[20%]">
                <label className="text-gray-600 text-sm">Username</label><br></br>
                <span className="text-lg font-semibold">sof1_boukir</span>
              </div>
              <div className="md:w-[20%]">
                <label className="text-gray-600 text-sm">Date of birth</label><br></br>
                <span className="text-lg font-semibold">13-11-2004</span>
              </div>
            </div>
            <div className="md:flex md:gap-48 mt-4">
              <div className="md:w-[20%]">
                  <label className="text-gray-600 text-sm">Email adress</label><br></br>
                  <span className="text-lg font-semibold">soufianboukir0@gmail.com</span>
                </div>
                <div className="md:w-[20%]">
                  <label className="text-gray-600 text-sm">Phone number</label><br></br>
                  <span className="text-lg font-semibold">0659523000</span>
                </div>
                <div className="md:w-[20%]">
                  <label className="text-gray-600 text-sm">User role</label><br></br>
                  <span className="text-lg font-semibold">Super Admin</span>
                </div>
            </div>
            <div>
              {isModalOpen && (
                <EditInfo close={closeModal} />
              )}
            </div>
          </div>



          <div className="mt-2 bg-gray-100 border-2 rounded-lg px-4 py-3">
            <div className="flex justify-between w-[100%]">
              <div>
                <h1 className="text-xl font-semibold">Adress</h1>
              </div>
              <div>
                <button
                  onClick={openModal2}
                  className="bg-green-700 text-white px-3 py-1 rounded-sm"
                  type="button"
                >
                  <span>Edit</span>
                </button>
              </div>
            </div>
            <hr className="my-3 border-gray-400 brder-2"></hr>
            <div className="md:flex md:gap-48 ">
              <div className="md:w-[20%]">
                <label className="text-gray-600 text-sm">Country</label><br></br>
                <span className="text-lg font-semibold">Morocco</span>
              </div>
              <div className="md:w-[20%]">
                <label className="text-gray-600 text-sm">City</label><br></br>
                <span className="text-lg font-semibold">Tiznit</span>
              </div>
              <div className="md:w-[20%]">
                <label className="text-gray-600 text-sm">Adress</label><br></br>
                <span className="text-lg font-semibold">213 Lot loubane tiznit</span>
              </div>
            </div>
            <div>
              {isModalOpen2 && (
                <EditAdress close={closeModal2} />
              )}
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
    </div>
  )
}
