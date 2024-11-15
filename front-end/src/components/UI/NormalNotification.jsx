import { Snackbar } from '@mui/material'
import { useState } from 'react'

export const NormalNotification = ({message}) => {
    const [open,setOpen] = useState(true)
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
