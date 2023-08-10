import { useState } from "react";
import "./NewSkillForm.css";



export default function NewSkillForm({addSkill}) {
  const defaultSkillValue={
    name:'',
    level: 1,
  };
  
  const [formData, setFormData]= useState(defaultSkillValue);
  
  
  function handleAddSkill(evt){
    evt.preventDefault();
    addSkill(formData);
    setFormData(defaultSkillValue)
  };
  
  function handleChange(evt){
    const newFormData = {...formData, [evt.target.name]: evt.target.value}
    setFormData(newFormData)
  }
  
  return (
      <form className="NewSkillForm" onSubmit={handleAddSkill}>
        <label>
          Skill
          <input 
          name='name' 
          value={formData.name} 
          onChange={handleChange}
          placeholder="New Skill"
          required
          pattern=".{3,}"
          />
        </label>
        <label>
          Level
          <select 
          name='level' 
          value={formData.level} 
          onChange={handleChange}
          >
            <option value='1'>1</option>
            <option value= '2'>2</option>
            <option value= '3'>3</option>
            <option value ='4'>4</option>
            <option value='5'>5</option>
          </select>
          <button type="submit">Add Skill</button>
        </label>
      </form>
    );
  }