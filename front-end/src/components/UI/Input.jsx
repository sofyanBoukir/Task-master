export const Input = ({width,placeholder,name,type,required}) => {
  return (
        <input type={type}
        placeholder={placeholder}
        name={name}
        required={required ? required : true}
        className={`border border-gray-600 rounded-sm px-3 py-1  ${width ? `lg:w-[${width}]` : 'w-[100%]'} outline-none`} />
    )
}