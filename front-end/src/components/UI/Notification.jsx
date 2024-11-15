import { Alert, Snackbar } from "@mui/material"
import { useState } from "react"

export const Notification = ({message,kind}) => {
    const [open,setOpen] = useState(true);
  return (
        <Snackbar className="text-white" open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
            <Alert
                severity={kind}
                variant="filled"
                sx={{ width: '100%' }}
            >
                {message}
            </Alert>
        </Snackbar>
  )
}
