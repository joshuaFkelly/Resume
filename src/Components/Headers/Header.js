import { Navbar } from "./NavBar";
import { PageHeader } from "./PageHeader";

export const Header = () => {
    return (
        <header className="bg-blue-900 p-5 flex flex-col min-h-screen min-w-screen align-middle justify-center snap-center mx-auto lg:min-h-0 lg:min-w-0">

            <PageHeader></PageHeader>

            <Navbar></Navbar>

            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 animate-bounce mx-auto absolute inset-x-0 bottom-10 lg:hidden" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
            </svg>
        </header >
    )
}