export const Input = ({width,placeholder,name,type,required=true,size,value,onChange,readOnly}) => {
  return (
        <input type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        maxLength={size}
        readOnly={readOnly ? readOnly : false}
        className={`border border-gray-600 rounded-sm px-3 py-1  ${width ? `lg:w-[${width}]` : 'w-[100%]'} outline-none`}/>
    )
}