export const Skills = () => {
    return (
        <section className="flex flex-col justify-center p-2">

            <h1 className="text-2xl font-semibold">SKILLS</h1>

            <div className="sm:flex flex-row justify-between">

                <article className="mb-2 p-2 text-center">
                    <h6 className="text-xl font-semibold text-green-900 ">Languages</h6>
                    <ol>
                        <li className="p-1 text-gray-700">HTML5</li>
                        <li className="p-1 text-gray-700">CSS3</li>
                        <li className="p-1 text-gray-700">JavaScript</li>
                    </ol>
                </article>

                <article className="mb-2 p-2 text-center">
                    <h6 className="text-xl  font-semibold text-green-900">Fameworks/Libraries</h6>
                    <ol>
                        <li className="p-1 text-gray-700">ReactJS</li>
                        <li className="p-1 text-gray-700">Bootstrap</li>
                        <li className="p-1 text-gray-700">Tailwind</li>
                        <li className="p-1 text-gray-700">NodeJs</li>
                        <li className="p-1 text-gray-700">ExpressJs</li>
                        <li className="p-1 text-gray-700">JQuery</li>
                        <li className="p-1 text-gray-700">Handlebars.js</li>
                    </ol>
                </article>

                <article className="mb-2 p-2 text-center">
                    <h6 className="text-xl font-semibold text-green-900">Database</h6>
                    <ol>
                        <li className="p-1 text-gray-700">MongoDB</li>
                        <li className="p-1 text-gray-700">Mongoose</li>
                        <li className="p-1 text-gray-700">Robo3T</li>
                        <li className="p-1 text-gray-700">Mondo DB Compass</li>
                        <li className="p-1 text-gray-700">MySQL</li>
                        <li className="p-1 text-gray-700">Sequelize ORM</li>
                        <li className="p-1 text-gray-700">AJAX/JSON</li>
                    </ol>
                </article>

                <article className="text-center p-2">
                    <h6 className="text-xl font-semibold text-green-900">Tools</h6>
                    <ol>
                        <li className="p-1 text-gray-700">Postman</li>
                        <li className="p-1 text-gray-700">Dev Tools</li>
                        <li className="p-1 text-gray-700">NPM</li>
                        <li className="p-1 text-gray-700">RESTful APIs</li>
                        <li className="p-1 text-gray-700">CRUD Application</li>
                        <li className="p-1 text-gray-700">Adobe XD</li>
                        <li className="p-1 text-gray-700">Git</li>
                        <li className="p-1 text-gray-700">VS Code</li>
                    </ol>
                </article>
            </div>
        </section>
    )
}