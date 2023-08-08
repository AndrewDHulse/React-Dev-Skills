import './App.css'
import NewSkillForm from "./NewSkillForm";
import SkillList from "./SkillList";

export default function App() {
  return (
    <>
      <h1>React Dev Skills</h1>
      <SkillList />
      <hr></hr>
      <NewSkillForm />
    </>
  );
}
