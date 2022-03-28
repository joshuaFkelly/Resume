export const Header = () => {
    return (
        <header>
            {/* Full Name */}
            <h1 className="text-3xl font-semibold">Joshua Kelly</h1>

            {/* Address - Phone Number */}
            <p> 9 Lea Way Palmetto, Ga 30268 (icon) 312-479-8425</p>

            {/* Gmail Link */}
            {/* Can i get this to add to clipboard on click? */}
            <a href="#">jdkpersonal2015@gmail.com </a>

            {/* Github Link */}
            <a href="https://github.com/joshuaFkelly" target={"_blank"}>Github </a>

            {/* LinkedIn Link */}
            <a href="https://www.linkedin.com/in/joshua-kelly-482196185/" target={"_blank"}>LinkedInn </a>

            {/* Portfolio Link */}
            <a href="#">My Portfolio</a>
        </header>
    )
}