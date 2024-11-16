import { Alert, Snackbar } from "@mui/material"
import { useState } from "react"

export const Notification = ({message,kind}) => {
    const [open,setOpen] = useState(true);
    setTimeout(() => {
        setOpen(false)
    }, 4000);
  return (
        <Snackbar className="text-white" open={open} autoHideDuration={6000} onClick={() => setOpen(false)}>
            <Alert
                severity={kind}
                variant="filled"
                sx={{ width: '100%' }}
                className="cursor-pointer"
                >
                {message}
            </Alert>
        </Snackbar>
  )
}
