
export const AddEvent = ({close}) => {
    const closeModal = close;
    
return (
    <div>
        <div
            className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-80"
            aria-hidden="true"
        >
            <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative bg-white text-black rounded-lg shadow">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibol">
                    Add new Event
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
                       
                        <div>
                            <label>Event title</label><br></br>
                            <input type="text" placeholder="Max : 50 chars" className="dark:bg-white w-[100%] px-3 py-2 border border-gray-500 rounded-md"/>
                        </div>
                        <div>
                            <label>Event Date</label><br></br>
                            <input type="date" placeholder="Email adress" className="dark:bg-white px-3 py-2 border w-[100%] border-gray-500 rounded-md"/>
                        </div>
                        <div>
                            <label>Event image</label><br></br>
                            <input type="file" placeholder="Email adress" className="dark:bg-white px-3 py-2 border w-[100%] border-gray-500 rounded-md"/>
                        </div>
                        <div>
                            <label>Eevent description</label><br></br>
                            <textarea placeholder="Max : 500 chars" className="dark:bg-white resize-none px-3 py-2 border w-[100%] border-gray-500 rounded-md">

                            </textarea>
                        </div>
                    </form>
                </div>

                <div className="flex items-center p-4 md:p-5 justify-end">
                    <button
                        onClick={closeModal}
                        type="submit"
                        className="bg-green-700 text-white px-4 py-1 rounded-sm"
                    >
                        Add Event
                    </button>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
