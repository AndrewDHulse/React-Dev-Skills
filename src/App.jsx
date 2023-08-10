import { useState } from "react";
import NewSkillForm from "./NewSkillForm";
import SkillList from "./SkillList";
import "./styles.css";

const initialSkills = [
  { name: "HTML", level: 5 },
  { name: "CSS", level: 3 },
  { name: "JavaScript", level: 4 },
  { name: "Python", level: 2 },
];

export default function App() {
  const [skills, setSkills] = useState(initialSkills);
  
  function addSkill(skill){
    setSkills([...skills, skill])
  }

  return (
    <div className="App">
      <h1>React Dev Skills</h1>
      {<SkillList skills={skills}/>}
      <hr></hr>
      <NewSkillForm addSkill={addSkill}/>
    </div>
  );
}
