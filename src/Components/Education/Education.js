import { Section, SectionTitle } from "../GlobalElements/Section"

const educationData = [
    {
        id: 1,
        date: "November 2019",
        certificate: "Full Stack Flex Web Development",
        school: "Georgia Tech Institute of Technology",
        description: "Incredibly in-depth and fast paced bootcamp. Students were taught the latest technology behind creating websites from the ground up using both frontend and backend technologies."
    },
    {
        id: 2,
        date: "May 2015",
        certificate: " High School Diploma",
        school: "North Gate High School",
        description: "Graduated with class of 2015"
    },
]

export const Education = () => {
    return (
        <Section>
            <SectionTitle>EDUCATION</SectionTitle>
            {
                educationData.map(accolade => {
                    return (

                        <article key={accolade.id} className="my-3" >
                            <p key={accolade.date} className="text-gray-700 font-bold text-sm">{accolade.date}</p>
                            <h3 key={accolade.school} className="text-l font-semibold"><span key={accolade.certificate} className="text-blue-400">{accolade.certificate},</span> {accolade.school}</h3>
                            <p key={accolade.description}>{accolade.description}</p>
                        </article>

                    )
                })
            }
        </Section>
    )
}








// < section className = "p-5 mx-auto flex flex-col min-h-screen min-w-screen align-middle justify-center snap-center lg:min-h-0 lg:min-w-0" >
    //     <h1 className="text-3xl mb-6 font-bold text-center">EDUCATION</h1>

    //     <article className="my-3">
    //         <p className="text-gray-700 font-bold text-sm">May 2015</p>
    //         <h3 className="text-l font-semibold"><span className="text-blue-400">High School Diploma,</span> North Gate High School</h3>
    //         <p>Graduated with class of 2015</p>
    //     </article>

    //     <article className="my-3">
    //         <p className=" text-gray-700 font-bold text-sm">November 2019</p>
    //         <h3 className="text-l font-semibold"><span className="text-blue-400">Full Stack Web Development Certificate,</span> Georgia Tech Institute of Technology</h3>
    //         <p>Incredibly in-depth and fast paced bootcamp. Students were taught the latest technology behind creating websites from the ground up using both frontend and backend technologies.</p>
    //     </article>
    // </section >