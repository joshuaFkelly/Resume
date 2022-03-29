export const Skills = () => {
    return (
        <section className="flex flex-col justify-center p-2">
            <h1 className="text-2xl font-semibold">SKILLS</h1>
            <div className="sm:flex flex-row justify-between">
                <article className="mb-2 text-center">
                    <h6 className="text-xl font-semibold">Languages</h6>
                    <ol>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                    </ol>
                </article>

                <article className="mb-2 text-center">
                    <h6 className="text-xl  font-semibold">Fameworks/Libraries</h6>
                    <ol>
                        <li>ReactJS</li>
                        <li>Bootstrap</li>
                        <li>Tailwind</li>
                        <li>NodeJs</li>
                        <li>ExpressJs</li>
                        <li>JQuery</li>
                        <li>Handlebars.js</li>
                    </ol>
                </article>

                <article className="mb-2 text-center">
                    <h6 className="text-xl font-semibold">Database</h6>
                    <ol>
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                        <li>Robo3T</li>
                        <li>Mondo DB Compass</li>
                        <li>MySQL</li>
                        <li>Sequelize ORM</li>
                        <li>AJAX/JSON</li>
                    </ol>
                </article>

                <article className="text-center">
                    <h6 className="text-xl font-semibold">Tools</h6>
                    <ol>
                        <li>Postman</li>
                        <li>Dev Tools</li>
                        <li>NPM</li>
                        <li>RESTful APIs</li>
                        <li>CRUD Application</li>
                        <li>Adobe XD</li>
                        <li>Git</li>
                        <li>VS Code</li>
                    </ol>
                </article>
            </div>
        </section>
    )
}