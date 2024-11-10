import { Squares2X2Icon,UserCircleIcon,UsersIcon,
    BriefcaseIcon,ArrowTopRightOnSquareIcon,BellIcon,
    UserGroupIcon,ArrowRightStartOnRectangleIcon,CalendarDateRangeIcon } from "@heroicons/react/24/outline"
import { Link } from "react-router-dom"
import image from "../../public/image.png"

export const AdminSideBar = () => {
  return (
    <div className="w-[18%] border-r-2 hidden lg:block xl:block">
        <ul className="flex flex-col gap-5 pt-6 pl-7">
            <li className="flex gap-1 items-center">
                <Squares2X2Icon className="w-9 h-9"/>
                <Link to={"/admin/dashboard"}><span className="text-lg font-semibold hover:text-blue-500">Dashboard</span></Link>
            </li>
            <li className="flex gap-1 items-center">
                <UserCircleIcon className="w-9 h-9"/>
                <Link to={"/admin/profile"}><span className="text-lg font-semibold hover:text-blue-500">Profile</span></Link>
            </li>
            <li className="flex gap-1 items-center">
                <UsersIcon className="w-9 h-9"/>
                <Link to={"/admin/students"}><span className="text-lg font-semibold hover:text-blue-500">Students</span></Link>
            </li>
            <li className="flex gap-1 items-center">
                <BriefcaseIcon className="w-9 h-9"/>
                <Link to={"/admin/dashboard"}><span className="text-lg font-semibold hover:text-blue-500">Teachers</span></Link>
            </li>
            <li className="flex gap-1 items-center rounded-sm">
                <ArrowTopRightOnSquareIcon className="w-9 h-9"/>
                <Link to={"/admin/dashboard"}><span className="text-lg font-semibold hover:text-blue-500">Announcement</span></Link>
            </li>
            <li className="flex gap-1 items-center rounded-sm">
                <CalendarDateRangeIcon className="w-9 h-9"/>
                <Link to={"/admin/dashboard"}><span className="text-lg font-semibold hover:text-blue-500">Events</span></Link>
            </li>
            <li className="flex gap-1 items-center">
                <BellIcon className="w-9 h-9"/>
                <Link to={"/admin/dashboard"}><span className="text-lg font-semibold hover:text-blue-500">Notifications</span></Link>
            </li>
            <li className="flex gap-1 items-center">
                <UserGroupIcon className="w-9 h-9"/>
                <Link to={"/admin/dashboard"}><span className="text-lg font-semibold hover:text-blue-500">Our team</span></Link>
            </li>
            <li className="flex gap-1 items-center ">
                <img src={image} className="h-10 w-10 rounded-full"/>               
                <span className="text-lg font-semibold">Soufian boukir</span> 
            </li>
            <li className="flex gap-1 items-center">
                <ArrowRightStartOnRectangleIcon className="w-9 h-9"/>
                <Link to={"/admin/dashboard"}><span className="text-lg font-semibold">Logout</span></Link>
            </li>
        </ul>
    </div>
  )
}
