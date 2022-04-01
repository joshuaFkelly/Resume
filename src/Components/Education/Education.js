import { Section, SectionTitle } from "../GlobalElements/Section"
import EducationData from "./EducationData"


export const Education = () => {
    return (
        <Section>

            <SectionTitle>EDUCATION</SectionTitle>

            {
                EducationData.map(({ date, certificate, school, description }, id) => {
                    return (

                        <article key={id} className="my-3" >
                            <p key={date} className="text-gray-700 font-bold text-sm">{date}</p>
                            <h3 key={school} className="text-l font-semibold"><span key={certificate} className="text-blue-400">{certificate},</span> {school}</h3>
                            <p key={description}>{description}</p>
                        </article>

                    )
                })
            }

        </Section>
    )
}