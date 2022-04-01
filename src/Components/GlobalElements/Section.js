export const Section = ({ children }) => {
    return (
        <section className=
            "p-5 mx-auto flex flex-col min-h-screen min-w-screen align-middle justify-center lg:min-h-0 lg:min-w-0">{children}</section>
    )
}

export const SectionTitle = ({ children }) => {
    return (
        <h1 className="text-3xl mb-6 font-bold text-center">{children}</h1>
    )
}