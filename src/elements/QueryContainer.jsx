function QueryContainer({ isOpen, onClick }) {
    return (
        <div className="flex flex-col gap-3 border border-gray-200 bg-gray-50 rounded-xl cursor-pointer"
            onClick={onClick}>

            <div>
                <div className="flex justify-between items-center p-4">
                    <span className="text-lg font-medium">
                        Is ToDesktop For Me?
                    </span>
                    <i className={`qa-btn fa-solid fa-chevron-up transition-transform md:text-xl ${isOpen ? '' : 'rotate-180'}`}></i>
                </div>
                {isOpen && (
                    <p className="text-lg text-gray-600  border-t border-t-gray-300 mt-0 m-4 pt-2">
                        That depends! If you would like to distribute your web app to your users as a downloadable
                        desktop app then ToDesktop is for you.
                    </p>
                )}
            </div>
        </div>
    )
}

export default QueryContainer