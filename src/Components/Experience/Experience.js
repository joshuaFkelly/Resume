import { Section, SectionTitle } from "../GlobalElements/Section";

const experienceData = [
    {
        date: "October 2021 - Present",
        title: "Low-Voltage Technician",
        employer: "Netplanner Systems Inc.",
        description: "Pull, hange, dress, and terminate cat5e, cat6, cat6a cable for network, security, or other low-voltage appliances in a commerical setting."
    },
    {
        date: "January 2020 - October 2021",
        title: "BJJ/Striking Coach",
        employer: "Independent MMA & Fitness",
        description: "Coach children from ages 4-18, and adults of all ages, how to train for a healthier lifestyle. Teach self-defense concepts. Attend events and coach students through their matches."
    },
    {
        date: "June 2020 - December 2020",
        title: "Low-Voltage Technician",
        employer: "Simple Automation",
        description: "Pull, hange, dress, and terminate cat5e, cat6, cat6a cable for network, security, or other low-voltage appliances in a residential setting."
    },
    {
        date: "May/2016 - March/2020",
        title: "Low-Voltage Technician",
        employer: "Telecom Innovations",
        description: "Pull, hange, dress, and terminate cat5e, cat6, cat6a cable for network, security, or other low-voltage appliances in a residential setting."
    },
]

export const Experience = () => {
    return (
        <Section>
            <SectionTitle>EXPERIENCE </SectionTitle>

            {
                experienceData.map(({ date, title, employer, description }, id) => {
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