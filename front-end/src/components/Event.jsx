import event1 from '../../public/event1.jpg'


export const Event = () => {
  return (
    <div className="md:w-[30%] bg-gray-100 border-2 rounded-md border-gray-300 pb-2">
        <div>
            <img src={event1} className="rounded-t-md rounded-r-md h-48 w-[100%]" />
        </div>
        <div className="px-2">
            <div>
                <h1 className="text-xl font-semibold mt-1 mb-2">This is the event Title</h1>
            </div>
            <div>
                <span>This the description This the description This the description This the description</span>
            </div>
            <div className="mt-2">
                <span className="font-semibold">05-10-2025</span>
            </div>
        </div>
    </div>
  )
}
