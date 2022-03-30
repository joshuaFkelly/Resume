export const Skills = () => {
    return (
        <section className="flex flex-col justify-center p-2">

            <h1 className="text-2xl font-bold">SKILLS</h1>

            <div className="sm:flex flex-row justify-between">
                <div>
                    <article className="mb-2 p-2 text-center">
                        <h6 className="text-xl font-semibold text-green-900 ">Languages</h6>
                        <ol>
                            <li className="p-1 text-gray-800 font-medium">HTML5</li>
                            <li className="p-1 text-gray-800 font-medium">CSS3</li>
                            <li className="p-1 text-gray-800 font-medium">JavaScript</li>
                        </ol>
                    </article>

                    <article className="mb-2 p-2 text-center">
                        <h6 className="text-xl  font-semibold text-green-900">Fameworks/Libraries</h6>
                        <ol>
                            <li className="p-1 text-gray-800 font-medium">ReactJS</li>
                            <li className="p-1 text-gray-800 font-medium">Bootstrap</li>
                            <li className="p-1 text-gray-800 font-medium">Tailwind</li>
                            <li className="p-1 text-gray-800 font-medium">NodeJs</li>
                            <li className="p-1 text-gray-800 font-medium">ExpressJs</li>
                            <li className="p-1 text-gray-800 font-medium">JQuery</li>
                            <li className="p-1 text-gray-800 font-medium">Handlebars.js</li>
                        </ol>
                    </article>
                </div>

                <div>
                    <article className="mb-2 p-2 text-center">
                        <h6 className="text-xl font-semibold text-green-900">Database</h6>
                        <ol>
                            <li className="p-1 text-gray-800 font-medium">MongoDB</li>
                            <li className="p-1 text-gray-800 font-medium">Mongoose</li>
                            <li className="p-1 text-gray-800 font-medium">Robo3T</li>
                            <li className="p-1 text-gray-800 font-medium">Mondo DB Compass</li>
                            <li className="p-1 text-gray-800 font-medium">MySQL</li>
                            <li className="p-1 text-gray-800 font-medium">Sequelize ORM</li>
                            <li className="p-1 text-gray-800 font-medium">AJAX/JSON</li>
                        </ol>
                    </article>

                    <article className="text-center p-2">
                        <h6 className="text-xl font-semibold text-green-900">Tools</h6>
                        <ol>
                            <li className="p-1 text-gray-800 font-medium">Postman</li>
                            <li className="p-1 text-gray-800 font-medium">Dev Tools</li>
                            <li className="p-1 text-gray-800 font-medium">NPM</li>
                            <li className="p-1 text-gray-800 font-medium">RESTful APIs</li>
                            <li className="p-1 text-gray-800 font-medium">CRUD Application</li>
                            <li className="p-1 text-gray-800 font-medium">Adobe XD</li>
                            <li className="p-1 text-gray-800 font-medium">Git</li>
                            <li className="p-1 text-gray-800 font-medium">VS Code</li>
                        </ol>
                    </article>
                </div>

            </div>
        </section>
    )
}