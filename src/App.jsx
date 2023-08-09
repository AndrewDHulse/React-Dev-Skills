import NewSkillForm from "./NewSkillForm";
import SkillList from "./SkillList";
import "./styles.css";

const skills = [
  { name: "HTML", level: 5 },
  { name: "CSS", level: 3 },
  { name: "JavaScript", level: 4 },
  { name: "Python", level: 2 },
];

export default function App() {
  return (
    <div className="App">
      <h1>React Dev Skills</h1>
      <SkillList skills={skills}/>
      <hr></hr>
      <NewSkillForm />
    </div>
  );
}
