const ParagraphWrapper = ({ children }) => {
    return <div className="bg-gray-100 border rounded-xl border-gray-400 my-4 shadow-lg">
        <p className="m-4">{children}</p>
    </div>
}

export default ParagraphWrapper;