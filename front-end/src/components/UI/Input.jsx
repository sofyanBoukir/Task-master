export const Input = ({width,placeholder,name,type,required,size,value,onChange}) => {
  return (
        <input type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        required={required ? required : true}
        maxLength={size}
        className={`border border-gray-600 rounded-sm px-3 py-1  ${width ? `lg:w-[${width}]` : 'w-[100%]'} outline-none`}/>
    )
}