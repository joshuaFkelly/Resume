import { Section, SectionTitle } from "../GlobalElements/Section";

const experienceData = [
    {
        id: 1,
        date: "October 2021 - Present",
        jobTitle: "Low-Voltage Technician",
        employer: "Netplanner Systems Inc.",
        description: "Pull, hange, dress, and terminate cat5e, cat6, cat6a cable for network, security, or other low-voltage appliances in a commerical setting."
    },
    {
        id: 2,
        date: "January 2020 - October 2021",
        jobTitle: "BJJ/Striking Coach",
        employer: "Independent MMA & Fitness",
        description: "Coach children from ages 4-18, and adults of all ages, how to train for a healthier lifestyle. Teach self-defense concepts. Attend events and coach students through their matches."

    },
    {
        id: 3,
        date: "June 2020 - December 2020",
        jobTitle: "Low-Voltage Technician",
        employer: "Simple Automation",
        description: "Pull, hange, dress, and terminate cat5e, cat6, cat6a cable for network, security, or other low-voltage appliances in a residential setting."
    },
    {
        id: 4,
        date: "May/2016 - March/2020",
        jobTitle: "Low-Voltage Technician",
        employer: "Telecom Innovations",
        description: "Pull, hange, dress, and terminate cat5e, cat6, cat6a cable for network, security, or other low-voltage appliances in a residential setting."

    },
]

export const Experience = () => {
    return (
        <Section>
            <SectionTitle>EXPERIENCE </SectionTitle>

            {
                experienceData.map(job => {
                    return (

                        <article key={job.id} className="my-3" >
                            <p key={job.date} className="text-gray-700 font-bold text-sm">{job.date}</p>
                            <h3 key={job.employer} className="text-l font-semibold"><span key={job.jobTitle} className="text-blue-400">{job.jobTitle},</span> {job.employer}</h3>
                            <p key={job.description}>{job.description}</p>
                        </article>

                    )
                })
            }

        </Section >
    )
}