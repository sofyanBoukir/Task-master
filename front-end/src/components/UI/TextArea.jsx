
export const TextArea = ({name,placeholder,value,onChange,size}) => {
  return (
    <div>
        <textarea required 
        onChange={onChange}
        name={name} 
        placeholder={placeholder} 
        value={value}
        maxLength={size ? size : false}
        className="resize-none w-[100%] border border-gray-600 rounded-sm px-3 py-1 outline-none h-20"></textarea>
    </div>
  )
}
