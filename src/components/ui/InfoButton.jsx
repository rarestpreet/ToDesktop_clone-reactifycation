function InfoButton({ icon, content }) {
    return (
        <span className="py-2 px-2 lg:px-4 lg:text-lg
             border border-yellow-300 text-yellow-800 text-base font-medium rounded-lg  bg-yellow-50 shadow-lg shadow-dark-100
             flex gap-2 items-center">
            {icon &&
                (<i className="fa-solid fa-check"></i>)
            }{content}
        </span>
    )
}

export default InfoButton