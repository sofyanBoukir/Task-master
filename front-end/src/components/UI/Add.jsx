
export const Add = ({text,onclick}) => {
  return (
        <div onClick={() =>onclick()} className="border-2 border-gray-500 h-52 transition duration-150 ease-in-out rounded-sm cursor-pointer hover:bg-gray-300 flex justify-center items-center border-dashed w-[100%] lg:w-[21%]">
            <span className="text-gray-500 font-semibold">Add new {text}</span>
        </div>  
    )
}
