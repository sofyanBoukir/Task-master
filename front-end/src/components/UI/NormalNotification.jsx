import { Snackbar } from '@mui/material'
import { useState } from 'react'

export const NormalNotification = ({message}) => {
    const [open,setOpen] = useState(true)
    setTimeout(() =>{
        setOpen(false)
    },4000)
    return (
          <Snackbar
              open={open}
              onClick={() => setOpen(false)}
              autoHideDuration={6000}
              message={message}   
              className='cursor-pointer'
          />
    )
}
