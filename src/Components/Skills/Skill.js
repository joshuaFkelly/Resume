export const Skills = () => {
    return (
        <section className="flex flex-col justify-center align-center text-center mx-auto min-h-screen min-w-screen snap-center xl:w-3/5 2xl:w-1/2">

            <h1 className="text-3xl font-bold">SKILLS</h1>
            <div className="sm:flex flex-row flex-wrap justify-between">
                <article className="mb-2 p-2">
                    <h6 className="text-xl font-semibold text-blue-800 ">Languages</h6>
                    <ol>
                        <li className="p-1 font-medium">HTML5</li>
                        <li className="p-1 font-medium">CSS3</li>
                        <li className="p-1 font-medium">JavaScript</li>
                    </ol>
                </article>

                <article className="mb-2 p-2">
                    <h6 className="text-xl  font-semibold text-blue-800">Fameworks/Libraries</h6>
                    <ol>
                        <li className="p-1 font-medium">ReactJS</li>
                        <li className="p-1 font-medium">Bootstrap</li>
                        <li className="p-1 font-medium">Tailwind</li>
                        <li className="p-1 font-medium">NodeJs</li>
                        <li className="p-1 font-medium">ExpressJs</li>
                        <li className="p-1 font-medium">JQuery</li>
                        <li className="p-1 font-medium">Handlebars.js</li>
                    </ol>
                </article>

                <article className="mb-2 p-2">
                    <h6 className="text-xl font-semibold text-blue-800">Database</h6>
                    <ol>
                        <li className="p-1 font-medium">MongoDB</li>
                        <li className="p-1 font-medium">Mongoose</li>
                        <li className="p-1 font-medium">Robo3T</li>
                        <li className="p-1 font-medium">Mondo DB Compass</li>
                        <li className="p-1 font-medium">MySQL</li>
                        <li className="p-1 font-medium">Sequelize ORM</li>
                        <li className="p-1 font-medium">AJAX/JSON</li>
                    </ol>
                </article>

                <article className="p-2">
                    <h6 className="text-xl font-semibold text-blue-800">Tools</h6>
                    <ol>
                        <li className="p-1 font-medium">Postman</li>
                        <li className="p-1 font-medium">Dev Tools</li>
                        <li className="p-1 font-medium">NPM</li>
                        <li className="p-1 font-medium">RESTful APIs</li>
                        <li className="p-1 font-medium">CRUD Application</li>
                        <li className="p-1 font-medium">Adobe XD</li>
                        <li className="p-1 font-medium">Git</li>
                        <li className="p-1 font-medium">VS Code</li>
                    </ol>
                </article>
            </div>

        </section >
    )
}