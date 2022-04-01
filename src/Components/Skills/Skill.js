import { ListItem, ListTitle } from "../GlobalElements/List"
import { Section, SectionTitle } from "../GlobalElements/Section"
const languages = ["html5", "CSS3", "JavaScript"]
const frameworksAndLibraries = ["ReactJs", "Bootstrap CSS", " Tailwind CSS", "NodeJs", "ExpressJs", "JQuery", "Handlebars.js"]
const database = ["MongoDB", "Mongoose", "MongoDB Compass", "Robo3T", "MySQL", "Sequelize ORM", "AJAX/JSON"]
const tools = ["Git", "Postman", "Chromse Dev Tools", "NPM", "RESTful API", "CRUD Development", "AdobeXD", "VS Code"]
export const Skills = () => {
    return (
        <Section>

            <SectionTitle>SKILLS</SectionTitle>

            <div className="sm:flex flex-row flex-wrap justify-between text-center">
                <article className="my-3">
                    <ListTitle>Languages</ListTitle>
                    <ol>
                        {
                            languages.map((item, i) => {
                                return (
                                    <ListItem key={i}>{item}</ListItem>
                                )
                            })
                        }

                    </ol>
                </article>

                <article className="my-3">
                    <ListTitle>Framework/Libraries</ListTitle>

                    <ol>
                        {
                            frameworksAndLibraries.map((item, i) => {
                                return (
                                    <ListItem key={i}>{item}</ListItem>
                                )
                            })
                        }
                    </ol>

                </article>

                <article className="my-3">
                    <ListTitle>Database</ListTitle>
                    <ol>
                        {
                            database.map((item, i) => {
                                return (
                                    <ListItem key={i}>{item}</ListItem>
                                )
                            })
                        }
                    </ol>
                </article>

                <article className="my-3">
                    <ListTitle>Tools</ListTitle>
                    <ol>
                        {
                            tools.map((item, i) => {
                                return (
                                    <ListItem key={i}>{item}</ListItem>
                                )
                            })
                        }
                    </ol>
                </article>
            </div>

        </Section>
    )
}