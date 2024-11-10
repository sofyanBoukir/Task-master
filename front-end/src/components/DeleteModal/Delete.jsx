
export const Delete = ({user,close}) => {
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
                    Delete {user}
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
                </button>
                </div>

                <div className="p-4 md:p-5 space-y-4">
                    <h1 className="text-center text-3xl font-semibold">Are you sure you want to delete Student Soufian boukir</h1>
                    <div className="flex gap-3 justify-center mt-5">
                        <button className="bg-white border border-black px-4 py-1 rounded-sm" onClick={closeModal}>Cancel</button>
                        <button className="bg-red-600 text-white px-4 py-1 rounded-sm">Delete</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}