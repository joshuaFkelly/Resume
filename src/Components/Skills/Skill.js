export const Skills = () => {
    return (
        <section className="flex flex-col justify-center p-2">

            <h1 className="text-2xl font-semibold">SKILLS</h1>

            <div className="sm:flex flex-row justify-between">

                <article className="mb-2 p-2 text-center">
                    <h6 className="text-xl font-semibold">Languages</h6>
                    <ol>
                        <li className="p-1">HTML5</li>
                        <li className="p-1">CSS3</li>
                        <li className="p-1">JavaScript</li>
                    </ol>
                </article>

                <article className="mb-2 p-2 text-center">
                    <h6 className="text-xl  font-semibold">Fameworks/Libraries</h6>
                    <ol>
                        <li className="p-1">ReactJS</li>
                        <li className="p-1">Bootstrap</li>
                        <li className="p-1">Tailwind</li>
                        <li className="p-1">NodeJs</li>
                        <li className="p-1">ExpressJs</li>
                        <li className="p-1">JQuery</li>
                        <li className="p-1">Handlebars.js</li>
                    </ol>
                </article>

                <article className="mb-2 p-2 text-center">
                    <h6 className="text-xl font-semibold">Database</h6>
                    <ol>
                        <li className="p-1">MongoDB</li>
                        <li className="p-1">Mongoose</li>
                        <li className="p-1">Robo3T</li>
                        <li className="p-1">Mondo DB Compass</li>
                        <li className="p-1">MySQL</li>
                        <li className="p-1">Sequelize ORM</li>
                        <li className="p-1">AJAX/JSON</li>
                    </ol>
                </article>

                <article className="text-center p-2">
                    <h6 className="text-xl font-semibold">Tools</h6>
                    <ol>
                        <li className="p-1">Postman</li>
                        <li className="p-1">Dev Tools</li>
                        <li className="p-1">NPM</li>
                        <li className="p-1">RESTful APIs</li>
                        <li className="p-1">CRUD Application</li>
                        <li className="p-1">Adobe XD</li>
                        <li className="p-1">Git</li>
                        <li className="p-1">VS Code</li>
                    </ol>
                </article>
            </div>
        </section>
    )
}