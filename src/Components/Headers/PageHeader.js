import { GoMarkGithub } from "react-icons/go";
import { AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import ReactTooltip from 'react-tooltip';
const copy = () => navigator.clipboard.writeText("jdkpersonal2015@gmail.com");

export const Header = () => {
    return (
        <header className="p-4 mt-5">
            <div className="text-center">
                <h1 className="text-5xl font-bold text-center"><span className="text-gray-700 font-light">Joshua</span> <span className="font-extrabold">Kelly</span></h1>
                <p className="mt-1 text-gray-700 text-sm">9 Lea Way Palmetto, GA 30268</p>
                <p className="mt-1 text-gray-700 text-sm">312-479-8425</p>
            </div>

            <ul className="flex flex-row justify-evenly mt-3">

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
        </header >
    )
}