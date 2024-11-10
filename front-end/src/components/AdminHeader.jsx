import {
    Menu,
    MenuHandler,
    MenuList,
  } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/16/solid";

export const AdminHeader = () => {
  return (
    <div className="mt-2 flex lg:block items-center justify-between">
        <div>
            <h1 className='text-lg text-gray-600 font-semibold'>Welcome,</h1>
            <span className='text-3xl font-semibold text-blue-600'><span className="text-black">Mr </span>Soufian boukir</span>
        </div>
        <div className="lg:hidden block">
            <Menu>
            <MenuHandler>
                <Bars3Icon className="w-10 h-10 px-1" />
            </MenuHandler>
            <MenuList className="px-4 py-3 text-center">
                <Link className="py-2 text-lg font-semibold" to={"/admin/dashboard"}>Dashboard</Link><br></br>
                <Link className="py-2 text-lg font-semibold" to={"/admin/profile"}>Pofile</Link><br></br>
                <Link className="py-2 text-lg font-semibold" to={"/admin/students"}>Students</Link><br></br>
                <Link className="py-2 text-lg font-semibold">Teachers</Link><br></br>
                <Link className="py-2 text-lg font-semibold">Announcement</Link><br></br>
                <Link className="py-2 text-lg font-semibold">Events</Link><br></br>
                <Link className="py-2 text-lg font-semibold">Notifiications</Link><br></br>
                <Link className="py-2 text-lg font-semibold">Our team</Link><br></br>
                <Link className="py-2 text-lg font-semibold">Logout</Link><br></br>               
            </MenuList>
            </Menu>
        </div>
    </div>
  )
}
