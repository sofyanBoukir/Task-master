
export const Notification = ({close}) => {
    const closeModal = close;
    
return (
    <div>
        <div
            className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50"
            aria-hidden="true"
        >
            <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative bg-white text-black rounded-lg shadow">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-2xl font-semibold">
                    Notification from Soufian boukir
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
                    <p>For design ideas and inspiration for an announcement page on the admin dashboard of a school management system,
                    Dribbble is a great resource. It has a range of UI designs for education and school management platforms,
                    including admin panels and announcement sections that often display essential details like the announcement title,
                    content, date, and target audience (e.g., students or teachers). Many designs also incorporate features for filtering announcements,
                    quick editing options, and visual enhancements like icons and notifications to increase engagement.</p>
                    <div className="mt-3 flex justify-end">
                        <span className="text-lg font-semibold">22-02-2025</span>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
