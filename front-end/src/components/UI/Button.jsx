import { CircularProgress } from "@mui/material"

export const Button = ({text,width,bg,loading}) => {
  return (
    <button disabled={loading} className={`${bg} ${width ? `w-[${width}]` : 'w-[100%]'} ${loading ? `cursor-no-drop` :null} h-9 font-semibold text-white rounded-sm text-md px-3 py-1 flex items-center justify-center`}>
        {
          loading ? 
          <CircularProgress size={"21px"} color="white"/>
          :
          text
        }
    </button>
  )
}