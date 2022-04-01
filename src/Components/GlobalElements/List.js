export const listTitle = ({ children }) => {
    return (
        <h6 className="text-xl font-semibold text-blue-400">{children}</h6>
    )
}

export const listItem = ({ children }) => {
    return (
        <li className="py-1 font-medium">{children}</li>
    )
}