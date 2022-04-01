import { GoMarkGithub } from "react-icons/go";
import { AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import ReactTooltip from 'react-tooltip';

const copy = () => navigator.clipboard.writeText("jdkpersonal2015@gmail.com");

document.addEventListener("scroll", () => {
    if (window.scrollY > 734) {
        console.log("nav")
        document.getElementById("navbar").className = "sticky top-0 right-0"
    }
})
export const Navbar = () => {
    return (
        <ul id="navbar" className="flex flex-row justify-evenly sticky top-0">


            <li>
                <SiGmail size={45} data-tip="Copy to Clipboard" onClick={copy}></SiGmail>
                <ReactTooltip />
            </li>

            <li>
                <GoMarkGithub size={45} data-tip="Github">
                    <a href="https://github.com/joshuaFkelly" target={"_blank"}></a>
                </GoMarkGithub>
                <ReactTooltip />
            </li>

            <li>
                <AiFillLinkedin size={45} data-tip="LinkedIn">
                    <a href="https://www.linkedin.com/in/joshua-kelly-482196185/" target={"_blank"}></a>
                </AiFillLinkedin>
                <ReactTooltip />
            </li>

            <li>
                <CgWebsite size={45} data-tip="Portfolio">
                    <a href="#" target={"_blank"}></a>
                </CgWebsite>
                <ReactTooltip />
            </li>

        </ul>

    )
}