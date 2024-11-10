import { useState } from "react"
import { AdminHeader } from "../../components/AdminHeader"
import { AdminSideBar } from "../../components/AdminSideBar"
import { Event } from "../../components/Event"
import { AddEvent } from "../../components/AddEventModal"
export const Events = () => {
    const [addEvent,setAddEvent] = useState(false);

    const openAddEevent = () => setAddEvent(true);
    const closeAddEevent = () => setAddEvent(false);

  return (
    <div className="flex gap-5">
        <AdminSideBar />
        <div className="lg:w-[80%] w-[100%] px-4 lg:ml-[18%]">
            <AdminHeader />
            <div className="mt-3">
                <div>
                    <h1 className="text-2xl font-semibold">Events</h1>
                </div>  
                <div className="mt-4">
                    <div className="flex justify-between">
                        <h1 className="text-lg font-semibold">Incoming events</h1>
                        <button className="bg-blue-600 text-white rounded-sm px-3 py-1" onClick={openAddEevent}>Add new Event</button>
                    </div>
                    <div className="md:flex md:flex-wrap mt-3 gap-4">
                        <Event />
                        <Event />
                        <Event />
                        <Event />
                        <Event />
                        <Event />
                    </div>
                </div>
                {
                    addEvent && (
                        <AddEvent close={closeAddEevent}/>
                    )
                }
            </div>
        </div>
    </div>
  )
}