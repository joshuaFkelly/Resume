
import { BsArrowDownCircleFill } from "react-icons/bs";
import { Navbar } from "./NavBar";
import { PageHeader } from "./PageHeader";

export const Header = () => {
    return (
        <header className="bg-blue-900 p-5 flex flex-col min-h-screen min-w-screen align-middle justify-center snap-center mx-auto lg:min-h-0 lg:min-w-0">

            <PageHeader></PageHeader>

            <Navbar></Navbar>

            <BsArrowDownCircleFill className="animate-bounce mx-auto absolute inset-x-0 bottom-10 lg:hidden" size={25}></BsArrowDownCircleFill>

        </header >
    )
}