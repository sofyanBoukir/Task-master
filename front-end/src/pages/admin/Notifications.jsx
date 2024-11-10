import { AdminHeader } from "../../components/AdminHeader"
import { AdminSideBar } from "../../components/AdminSideBar"
import image from "../../../public/image.png"
import { useState } from "react"
import { Notification } from "../../components/NotificationModal"
export const Notifications = () => {

    const [notification,setNotification] = useState(false);

    const openNotification = () => setNotification(true);
    const closeNotification = () => setNotification(false);
    
  return (
    <div>
      <div className="flex gap-5">
        <AdminSideBar />
        <div className="lg:w-[80%] w-[100%] px-4 lg:ml-[18%]">
            <AdminHeader />
            <div className="mt-3">
                <div>
                    <h1 className="text-2xl font-semibold">Notificaitons</h1>
                </div>
                <div className="mt-3">
                    <div className="flex justify-between bg-gray-100 items-center p-2 rounded-md mb-2 hover:bg-gray-200 cursor-pointer" onClick={openNotification}>
                        <div>
                            <img src={image}  className="hidden md:block w-10 h-10 rounded-lg"/>
                        </div>
                        <div>
                            <h1 className="hidden md:block text text-lg font-semibold">Soufian boukir</h1>
                        </div>
                        <div>
                            <h1 className="text text-lg font-semibold">
                                Platforms like Dribbble and Behance often feature UI designs that can help   designs that can help 
                            </h1>
                        </div>
                        <div>
                            <span className="text-gray-500 font-semibold hidden md:block">22-02-2025</span>
                        </div>
                    </div>
                </div>
                {
                    notification && (
                        <Notification close={closeNotification} />
                    )
                }
            </div>
        </div>
      </div>
    </div>
  )
}