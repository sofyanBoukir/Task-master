export const Button = ({text,width,bg}) => {
  return (
    <button className={`${bg} ${width ? `w-[${width}]` : 'w-[100%]'} font-semibold text-white rounded-sm text-md px-3 py-1`}>
        {text}
    </button>
  )
}