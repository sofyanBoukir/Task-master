
export const TaskDetails = ({toggleTAskDetails,task}) => {

  return (
    <div>
        <div
          className="fixed inset-0 z-50 flex justify-center items-center w-full h-screen bg-gray-800 bg-opacity-50"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="relative p-4 w-[100%] md:w-[40%] max-w-2xl max-h-full">
            <div className="relative bg-white text-black rounded-md">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900" id="modal-title">
                    {task.title}
                </h3>
                    <button
                    onClick={toggleTAskDetails}
                    type="button"
                    className="text-gray-400 bg-transparent text-sm w-8 h-8 inline-flex justify-center items-center "
                    >
                        <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                        >
                        <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>
                <div className="p-4 md:p-5 space-y-4">
                    <p className="font-semibold">{task.description}</p>
                    <br></br>
                    <div className="flex justify-between">
                        <span className="font-semibold">{task.due_date}</span>
                        <span className="font-semibold">{task.priority}</span>
                        <span className="font-semibold">{task.status}</span>
                    </div>
                </div>              
            </div>
          </div>
        </div>
    </div>
  )
}