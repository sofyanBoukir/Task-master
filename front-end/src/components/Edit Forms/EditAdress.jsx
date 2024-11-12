import { useState } from "react";
import { editAdress } from "../../services/adminServices/profileServices";
import { Alert, CircularProgress, Snackbar } from "@mui/material";

export const EditAdress = ({close,profile}) => {
    const closeModal = close;
    const [loading,setLoading] = useState(false);
    const userId = localStorage.getItem("userId");
    const [updated,setUpdated] = useState(false);
    const [open,setOpen] = useState(false)

    const [adressInfo,setAdressInfo] = useState({
        city : profile.city,
        adress : profile.adress,
    });

    const hanldeChange = (e) =>{
        const {name,value} = e.target;
        setAdressInfo(prevState =>({
            ...prevState,
            [name] : value,
        }));
    }

    const handleSubmit = async (e) =>{
        console.log("cc");
        
        e.preventDefault();
        if(adressInfo.city === '' || adressInfo.adress === ''){
            return;
        }else{
            setLoading(true);
            const response = await editAdress(userId,adressInfo);
            setLoading(false);
            if(response.data.updated){
                setOpen(true)
                setUpdated(true);
            }
        }
    }
return (
    <div>
        <div
            className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-80"
            aria-hidden="true"
        >
            <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg ">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900">
                    Edit adress
                </h3>
                <button
                    onClick={closeModal}
                    type="button"
                    className="text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
                    aria-label="Close"
                >
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
                </div>

                <div className="p-4 md:p-5 space-y-4">
                <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                        <div>
                            <label>City</label><br></br>
                            <input type="text" 
                            placeholder={profile.city} 
                            className="px-3 py-2 w-[100%] border border-gray-500 rounded-md"
                            name="city"
                            value={adressInfo.city}
                            onChange={hanldeChange}/>
                        </div>
                        <div>
                            <label>Adress</label><br></br>
                            <input type="text" 
                            placeholder={profile.adress} 
                            className="px-3 py-2 w-[100%] border border-gray-500 rounded-md"
                            name="adress"
                            value={adressInfo.adress}
                            onChange={hanldeChange}/>
                        </div>
                        <div>
                            {
                                updated && (
                                    <Snackbar open={open} className="bg-green-600 rounded-md text-white cursor-pointer" 
                                    autoHideDuration={6000} onClick={() => setOpen(false)}>
                                        <Alert
                                            severity="success"
                                            variant="filled"
                                            sx={{ width: '100%' }}
                                        >
                                            Your data updated successfully!
                                        </Alert>
                                    </Snackbar>
                                )
                            }
                        </div>
                        <div className="flex items-center p-2 md:p-2 justify-end">
                            <button
                                type="submit"
                                className="bg-green-700 text-white px-4 py-1 rounded-sm w-[25%]"
                            >
                                {
                                    loading ?
                                    <CircularProgress color="white" size={"18px"}/>
                                    : "Save Changes"
                                }
                            </button>
                        </div>     
                    </form>             
                </div>              
            </div>
            </div>
        </div>
    </div>
  )
}
