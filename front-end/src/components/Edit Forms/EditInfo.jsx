
export const EditInfo = ({close}) => {
    const closeModal = close;
return (
    <div>
        <div
            className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50"
            aria-hidden="true"
        >
            <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow text-black">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-black">
                    Edit Personal informations
                </h3>
                <button
                    onClick={closeModal}
                    type="button"
                    className="text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                    aria-label="Close"
                >
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
                </div>

                <div className="p-4 md:p-5 space-y-4">
                    <form className="flex flex-col gap-3">
                        <div className="flex justify-between">
                            <div className="w-[48%]">
                                <label>Full name</label><br></br>
                                <input type="text" placeholder="Soufian boukir" className="px-3 py-2 w-[100%] border border-gray-500 rounded-md"/>
                            </div>
                            <div className="w-[48%]">
                                <label>Username</label><br></br>
                                <input type="text" placeholder="Soufian boukir" className="px-3 w-[100%] py-2 border border-gray-500 rounded-md"/>
                            </div>
                        </div>
                        
                        <div className="flex justify-between">
                            <div className="w-[48%]">
                                <label>Date of birth</label><br></br>
                                <input type="date" className="px-3 py-2 w-[100%] border border-gray-500 rounded-md"/>
                            </div>
                            <div className="w-[48%]">
                                <label>Phone number</label><br></br>
                                <input type="text" placeholder="0659523000" className="px-3 w-[100%] py-2 border border-gray-500 rounded-md"/>
                            </div>
                        </div>

                        <div>
                            <label>Email adress</label><br></br>
                            <input type="text" placeholder="Soufian boukir" className="px-3 py-2 w-[100%] border border-gray-500 rounded-md"/>
                        </div>
                    </form>
                </div>

                <div className="flex items-center p-4 md:p-5 justify-end">
                    <button
                        onClick={closeModal}
                        type="submit"
                        className="bg-green-700 text-white px-4 py-1 rounded-sm"
                    >
                        Save Changes
                    </button>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}