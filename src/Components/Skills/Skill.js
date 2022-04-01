import { Section, SectionTitle } from "../GlobalElements/Section"

export const Skills = () => {
    return (
        <Section>

            <SectionTitle>SKILLS</SectionTitle>

            <div className="sm:flex flex-row flex-wrap justify-between text-center">
                <article className="my-3">
                    <h6 className="text-xl font-semibold text-blue-400">Languages</h6>
                    <ol>
                        <li className="py-1 font-medium">HTML5</li>
                        <li className="py-1 font-medium">CSS3</li>
                        <li className="py-1 font-medium">JavaScript</li>
                    </ol>
                </article>

                <article className="my-3">
                    <h6 className="text-xl  font-semibold text-blue-400">Fameworks/Libraries</h6>
                    <ol>
                        <li className="py-1 font-medium">ReactJS</li>
                        <li className="py-1 font-medium">Bootstrap</li>
                        <li className="py-1 font-medium">Tailwind</li>
                        <li className="py-1 font-medium">NodeJs</li>
                        <li className="py-1 font-medium">ExpressJs</li>
                        <li className="py-1 font-medium">JQuery</li>
                        <li className="py-1 font-medium">Handlebars.js</li>
                    </ol>
                </article>

                <article className="my-3">
                    <h6 className="text-xl font-semibold text-blue-400">Database</h6>
                    <ol>
                        <li className="py-1 font-medium">MongoDB</li>
                        <li className="py-1 font-medium">Mongoose</li>
                        <li className="py-1 font-medium">Robo3T</li>
                        <li className="py-1 font-medium">Mondo DB Compass</li>
                        <li className="py-1 font-medium">MySQL</li>
                        <li className="py-1 font-medium">Sequelize ORM</li>
                        <li className="py-1 font-medium">AJAX/JSON</li>
                    </ol>
                </article>

                <article className="my-3">
                    <h6 className="text-xl font-semibold text-blue-400">Tools</h6>
                    <ol>
                        <li className="py-1 font-medium">Postman</li>
                        <li className="py-1 font-medium">Dev Tools</li>
                        <li className="py-1 font-medium">NPM</li>
                        <li className="py-1 font-medium">RESTful APIs</li>
                        <li className="py-1 font-medium">CRUD Application</li>
                        <li className="py-1 font-medium">Adobe XD</li>
                        <li className="py-1 font-medium">Git</li>
                        <li className="py-1 font-medium">VS Code</li>
                    </ol>
                </article>
            </div>

        </Section>
    )
}