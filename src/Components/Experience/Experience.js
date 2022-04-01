import { Section, SectionTitle } from "../GlobalElements/Section";
import ExperienceData from "./ExperienceData";

export const Experience = () => {
    return (
        <Section>
            <SectionTitle>EXPERIENCE </SectionTitle>

            {
                ExperienceData.map(({ date, title, employer, description }, id) => {
                    return (

                        <article key={id} className="my-3" >
                            <p key={date} className="text-gray-700 font-bold text-sm">{date}</p>
                            <h3 key={employer} className="text-l font-semibold"><span key={title} className="text-blue-400">{title},</span> {employer}</h3>
                            <p key={description}>{description}</p>
                        </article>

                    )
                })
            }

        </Section >
    )
}