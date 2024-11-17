
export const TextArea = ({name,placeholder,value}) => {
  return (
    <div>
        <textarea required className="resize-none w-[100%] border border-gray-600 rounded-sm px-3 py-1 outline-none h-20" name={name} placeholder={placeholder} value={value}></textarea>
    </div>
  )
}
