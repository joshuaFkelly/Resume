import { GoMarkGithub } from "react-icons/go";
import { AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import ReactTooltip from 'react-tooltip';
import { BsArrowDownCircleFill } from "react-icons/bs";
const copy = () => navigator.clipboard.writeText("jdkpersonal2015@gmail.com");

export const Header = () => {
    return (
        <header className="bg-blue-900 p-5 flex flex-col min-h-screen min-w-screen align-middle justify-center snap-center mx-auto lg:min-h-0 lg:min-w-0">

            <div className="text-center">
                <h1 className="text-6xl mb-4 text-white font-extrabold">Joshua Kelly</h1>
                <p className="mt-2 font-semibold text-2xl text-blue-400">Full Stack Web Developer</p>
                <p className="mt-2 text-white text-sm">9 Lea Way Palmetto, GA 30268</p>
                <p className="mt-2 text-white text-sm">312-479-8425</p>
            </div>

            <ul className="flex flex-row justify-evenly mt-2">

                <li>
                    <SiGmail size={40} data-tip="Copy to Clipboard" onClick={copy}></SiGmail>
                    <ReactTooltip />
                </li>

                <li>
                    <GoMarkGithub size={40} data-tip="Github">
                        <a href="https://github.com/joshuaFkelly" target={"_blank"}></a>
                    </GoMarkGithub>
                    <ReactTooltip />
                </li>

                <li>
                    <AiFillLinkedin size={40} data-tip="LinkedIn">
                        <a href="https://www.linkedin.com/in/joshua-kelly-482196185/" target={"_blank"}></a>
                    </AiFillLinkedin>
                    <ReactTooltip />
                </li>

                <li>
                    <CgWebsite size={40} data-tip="Portfolio">
                        <a href="#" target={"_blank"}></a>
                    </CgWebsite>
                    <ReactTooltip />
                </li>

            </ul>

            <BsArrowDownCircleFill className="animate-bounce mx-auto absolute inset-x-0 bottom-10 lg:hidden" color="" size={25}></BsArrowDownCircleFill>
        </header >
    )
}