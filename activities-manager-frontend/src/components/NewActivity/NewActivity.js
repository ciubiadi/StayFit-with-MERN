import './NewActivity.css';
import React, { useState } from 'react'

const NewActivity = ({ onAddNewActivity }) => {
    const [enteredText, setEnteredText] = useState('');

    const textChangeHandler = (e) => {
        setEnteredText(e.target.value);
    }

    const addActivityHandler = (event) => {
        event.preventDefault();
        
        const newActivity = {
            id: Math.random().toString(),
            name: enteredText
        }

        // enteredText;

        console.log('newActivity', newActivity);
        onAddNewActivity(newActivity);
    }


  return (
    <form onSubmit={addActivityHandler} className="new-activity-form">
        <input type="text" value={enteredText} onChange={textChangeHandler} />
        <button type="submit">Add Activity</button>
    </form>
  )
}

export default NewActivity