import React from 'react';

const ShoppingListForm = ({addItem, name, quantity, type, handleNameChange, handleQuantityChange, handleTypeChange}) => {
    return (
        <div>
            <h1>Add to my list</h1>
            <form onSubmit={addItem}>
            <div>
                Item name
                <input value={name} onChange={handleNameChange}/>
            </div>
            <div>
                quantity
                <input value={quantity} onChange={handleQuantityChange}/>
            </div>
            <div>
                type
                <select name="type" onChange={handleTypeChange} value={type}>
                <option value="Vegetables">Vegetables</option>
                <option value="Fruit">Fruit</option>
                <option value="Carbohydrates">Carbohydrates</option>
                <option value="Meat">Meat</option>
                </select>
            </div>
            <button>Add item</button>
            </form>
        </div>
    );
};

export default ShoppingListForm;