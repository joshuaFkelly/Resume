import { GoMarkGithub } from "react-icons/go";
import { AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import ReactTooltip from 'react-tooltip';

const copy = () => navigator.clipboard.writeText("jdkpersonal2015@gmail.com");

export const Navbar = () => {
    return (
        <ul className="flex flex-row justify-evenly">


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
    )
}