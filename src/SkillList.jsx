import SkillListItem from "./SkillListItem";

export default function SkillList({ skills }){
    const skillListItems = skills.map((s, idx) => (
        <SkillListItem skill={s} index={idx} Key={idx} />
        ))
        return <ul className="SkillList">{skillListItems}</ul>
}