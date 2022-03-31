export const Education = () => {
    return (
        <section className="flex flex-col min-h-screen min-w-screen align-middle justify-center snap-center mx-auto lg:min-h-0 lg:min-w-0 lg:p-5">
            <h1 className="text-3xl font-bold text-center">EDUCATION</h1>

            <article className="my-3">
                <p className="text-gray-700 font-bold text-sm">May 2015</p>
                <h3 className="text-l font-semibold"><span className="text-blue-400">High School Diploma,</span> North Gate High School</h3>
                <p>Graduted on time with class of 2015</p>
            </article>

            <article className="my-3">
                <p className=" text-gray-700 font-bold text-sm">November 2019</p>
                <h3 className="text-l font-semibold"> <span className="text-blue-400">Full Stack Web Development Certificate,</span> <span className="">Georgia Tech Institute of Technology</span></h3>
                <p>Incredibly in-depth and fast paced bootcamp. Students were taught the latest technology behind creating websites from the ground up using both frontend and backend technologies.</p>
            </article>
        </section>
    )
}