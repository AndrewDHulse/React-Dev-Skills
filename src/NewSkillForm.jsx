import "./NewSkillForm.css";

export default function NewSkillForm() {
    return (
      <form className="NewSkillForm">
        <label>
          Skill
          <input/>
        </label>
        <label>
          Level
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <button>Add Skill</button>
        </label>
      </form>
    );
  }