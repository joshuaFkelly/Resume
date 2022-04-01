
import { ListItem, ListTitle } from "../GlobalElements/List"
import SkillData from "./SkillData"

const displaySkills = (list) => {
    return (
        list.map((item, i) => {
            return (<ListItem key={i}>{item}</ListItem>)
        })
    )
}

export const SkillList = () => {
    return (

        <div className="sm:flex flex-row flex-wrap justify-between text-center">

            {
                SkillData.map((skill, i) => {
                    return (
                        <article key={i} className="my-3" >

                            <ListTitle>{skill.name}</ListTitle>

                            <ul>
                                {displaySkills(skill.list)}
                            </ul>

                        </article>
                    )
                })
            }

        </div>

    )
}