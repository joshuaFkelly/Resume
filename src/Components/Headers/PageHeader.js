export const Header = () => {
    return (
        <header className="p-4">
            <div className="text-center">
                <h1 className="text-5xl font-bold text-center"><span className="text-gray-700 font-light">Joshua</span> <span className="font-extrabold">Kelly</span></h1>
                <p className="m-1">9 Lea Way Palmetto, GA 30268</p>
                <p className="m-1"><span className="icon"></span>312-479-8425</p>
            </div>

            <ul className="flex flex-row justify-evenly m-1">

                <li>
                    <a href="#">Email</a>
                </li>

                <li>
                    <a href="https://github.com/joshuaFkelly" target={"_blank"}>Github</a>
                </li>

                <li>
                    <a href="https://www.linkedin.com/in/joshua-kelly-482196185/" target={"_blank"}>LinkedIn</a>
                </li>

                <li>
                    <a href="#">Portfolio</a>
                </li>

            </ul>
        </header>
    )
}