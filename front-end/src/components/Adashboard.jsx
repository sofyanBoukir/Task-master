import { UserGroupIcon,BriefcaseIcon,AcademicCapIcon,ChatBubbleLeftRightIcon } from "@heroicons/react/16/solid"
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import event1 from "../../public/event1.jpg"
import event2 from "../../public/event2.webp"
import event3 from "../../public/event3.jpg"
import event4 from "../../public/event4.jpg"
import { AdminHeader } from "./AdminHeader";


const data = [
    {
      name: 'Mon',
      Students: 100,
      Teachers: 200,
    },
    {
      name: 'Thu',
      Students: 300,
      Teachers: 138,
    },
    {
      name: 'Wed',
      Students: 200,
      Teachers: 980,
    },
    {
      name: 'Tue',
      Students: 270,
      Teachers: 398,
    },
    {
      name: 'Fri',
      Students: 180,
      Teachers: 400,
    },
    {
      name: 'Sat',
      Students: 230,
      Teachers: 380,
    },
    {
      name: 'Sun',
      Students: 390,
      Teachers: 430,
    },
  ];
export const Adashboard = () => {
  return (
    <div className="px-4">
        <AdminHeader />
        <div className="mt-3 md:flex md:justify-between flex flex-wrap"> 
            <div className="flex md:w-[22%] w-[48%] m-1 justify-between items-center bg-gradient-to-r from-indigo-500 to-sky-400 px-5 py-3 rounded-xl text-white">
                <div className="">
                    <span className="text-3xl font-semibold">2000</span><br></br>
                    <span className="text-lg font-semibold">Students</span>
                </div>
                <div>
                    <AcademicCapIcon className="text-white w-12 h-12"/>
                </div>
            </div>

            <div className="flex justify-between md:w-[22%] m-1 w-[48%] items-center bg-gradient-to-r from-orange-800 to-orange-400  px-5 py-3 rounded-xl text-white">
                <div className="">
                    <span className="text-3xl font-semibold">10</span><br></br>
                    <span className="text-lg font-semibold">Teachers</span>
                </div>
                <div>
                    <BriefcaseIcon className="text-white w-12 h-12"/>
                </div>
            </div>

            <div className="flex justify-between md:w-[22%] m-1 w-[48%] items-center bg-gradient-to-r from-blue-800 to-blue-400 px-5 py-3 rounded-xl text-white">
                <div className="">
                    <span className="text-3xl font-semibold">2000</span><br></br>
                    <span className="text-lg font-semibold">Notifications</span>
                </div>
                <div>
                    <ChatBubbleLeftRightIcon className="text-white w-12 h-12"/>
                </div>
            </div>

            <div className="flex justify-between md:w-[22%] m-1 w-[48%] items-center bg-gradient-to-r from-violet-700 to-violet-400 px-5 py-3 rounded-xl text-white">
                <div className="">
                    <span className="text-3xl font-semibold">2000</span><br></br>
                    <span className="text-lg font-semibold">Our Team</span>
                </div>
                <div>
                    <UserGroupIcon className="text-white w-12 h-12"/>
                </div>
            </div>
        </div>

        <div className="mt-6 text-center md:flex md:justify-between">   
            <div className="border-gray-300 border-2 rounded-md px-4 py-4 md:w-[25%] bg-gray-100">
                <h1 className="text-xl font-semibold">Total student by gender</h1>
                <br></br>
                <div className="relative size-40 mx-auto">
                    <svg className="rotate-[135deg] w-full h-full" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-pink-600 dark:bg-pink-600" strokeWidth="1.5" strokeDasharray="75 100" strokeLinecap="round"></circle>
                        <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-blue-600 dark:text-blue-600" strokeWidth="1.5" strokeDasharray="37.5 100" strokeLinecap="round"></circle>
                    </svg>
                    <div className="absolute top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                        <span className="text-4xl font-bold text-blue-600 dark:text-blue-500">2000</span>
                        <span className="text-blue-600 dark:text-blue-500 block font-semibold">Student</span>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="flex items-center gap-1">
                        <div className="bg-blue-600 h-3 w-3 rounded-md"></div>
                        <span className="text-md font-semibold">boys: 2000</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="bg-pink-600 h-3 w-3 rounded-md"></div>
                        <span className="text-md font-semibold">girls: 2000</span>
                    </div>
                </div>
            </div>  
            <div className="border-gray-300 border-2 rounded-md px-4 py-4 lg:w-[73%] bg-gray-100">
                <h1 className="text-xl text-start font-semibold">Attendance</h1>
                <BarChart
                width={700}
                height={220}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 1000]}/>
                <Tooltip />
                <Legend />
                <Bar dataKey="Teachers" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                <Bar dataKey="Students" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                </BarChart>
            </div>  
        </div>
        

        <div className="mt-6 lg:flex lg:justify-between">
            <div className="border-gray-300 border-2 rounded-md lg:w-[55%] px-4 py-4 bg-gray-100">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-semibold">Latest events</h1>
                    <button className="bg-blue-500 text-white rounded-md px-3 py-1">Manage events</button>
                </div>
                <div className="flex lg:gap-10 items-center mt-5">
                    <div className="flex items-center gap-1">
                        <img src={event1} className="w-10 h-10 rounded-lg"/>
                        <span className="text-md font-semibold">An outdoor event filled with fun physical activities and competitions</span>
                    </div>
                    <span className="text-gray-600 text-md font-semibold">22-01-2024</span>
                    <button className="bg-green-700 text-white rounded-md px-3 py-1">Edit</button>
                </div>
                <div className="flex lg:gap-10 items-center mt-5">
                    <div className="flex items-center gap-1">
                        <img src={event2} className="w-10 h-10 rounded-lg"/>
                        <span className="text-md font-semibold">Students showcase their science projects or experiments,</span>
                    </div>
                    <span className="text-gray-600 text-md font-semibold">22-01-2024</span>
                    <button className="bg-green-700 text-white rounded-md px-3 py-1">Edit</button>
                </div>
                <div className="flex lg:gap-10 items-center mt-5">
                    <div className="flex items-center gap-1">
                        <img src={event3} className="w-10 h-10 rounded-lg"/>
                        <span className="text-md font-semibold">Celebrates the diversity within the school community</span>
                    </div>
                    <span className="text-gray-600 text-md font-semibold">22-01-2024</span>
                    <button className="bg-green-700 text-white rounded-md px-3 py-1">Edit</button>
                </div>
                <div className="flex lg:gap-10 items-center mt-5">
                    <div className="flex items-center gap-1">
                        <img src={event4} className="w-10 h-10 rounded-lg"/>
                        <span className="text-md font-semibold">Professionals from various fields come to talk about their careers</span>
                    </div>
                    <span className="text-gray-600 text-md font-semibold">22-01-2024</span>
                    <button className="bg-green-700 text-white rounded-md px-3 py-1">Edit</button>
                </div>
            </div>

            <div className="border-gray-300 border-2 rounded-md lg:w-[40%] px-4 py-4 bg-gray-100">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-semibold">Recent Announcement</h1>
                </div>
                <div className="ml-4 mt-4 flex flex-col gap-1">
                    <span className="font-semibold text-md"><span className="font-semibold text-xl">●</span> Reminder: Parent-Teacher Conferences are scheduled for [Date] from [Time]</span>
                    <span className="font-semibold text-md"><span className="font-semibold text-xl">●</span> Reminder: Parent-Teacher Conferences are scheduled for [Date] from [Time]</span>
                    <span className="font-semibold text-md"><span className="font-semibold text-xl">●</span> Reminder: Parent-Teacher Conferences are scheduled for [Date] from [Time]</span>
                    <span className="font-semibold text-md"><span className="font-semibold text-xl">●</span> Reminder: Parent-Teacher Conferences are scheduled for [Date] from [Time]</span>
                </div>
            </div>
        </div>
        <br></br>
    </div>
  )
}
