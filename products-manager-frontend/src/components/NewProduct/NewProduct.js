import './NewProduct.css';
import React, { useState } from 'react'

const NewProduct = ({ onAddNewProduct }) => {
    const [enteredText, setEnteredText] = useState('');

    const textChangeHandler = (e) => {
        setEnteredText(e.target.value);
    }

    const addProductHandler = (event) => {
        event.preventDefault();
        
        const newProduct = {
            id: Math.random().toString(),
            name: enteredText
        }

        setEnteredText('');
        onAddNewProduct(newProduct);
    }


  return (
    <form onSubmit={addProductHandler} className="new-product-form">
        <input type="text" value={enteredText} onChange={textChangeHandler} />
        <button type="submit">Add Product</button>
    </form>
  )
}

export default NewProduct