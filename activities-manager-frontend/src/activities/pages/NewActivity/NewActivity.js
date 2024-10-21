import React from 'react';
import Input from '../../../shared/components/FormElements/Input/Input';
import './NewActivity.css';

const NewActivity = () => {
  return (
    <form className='activity-form'>
         <Input element="input" type="text" label="Title" />
    </form>
  );
};

export default NewActivity