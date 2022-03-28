export const Header = ({ title }) => {
    return (
        <header>

            <div className="text-center">
                <h1 className="text-3xl font-semibold">{title}</h1>
                <p>9 Lea Way Palmetto, Ga 30268 (icon) 312-479-8425</p>
            </div>

            <ul className=" flex flex-row justify-evenly">

                <li>
                    <a href="#">Email</a>
                </li>

                <li>
                    <a href="https://github.com/joshuaFkelly" target={"_blank"}>Github</a>
                </li>

                <li>
                    <a href="https://www.linkedin.com/in/joshua-kelly-482196185/" target={"_blank"}>LinkedInn</a>
                </li>

                <li>
                    <a href="#">Portfolio</a>
                </li>

            </ul>
        </header>
    )
}