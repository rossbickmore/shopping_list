import React from 'react';
import Item from './Item'

const ShoppingList = ({items, toggleImportance, deleteItem}) => {
    return (
        <div>
            <h1>Current list</h1>
            <p>You currently have {items.length} item(s) in your shopping list:</p>
            <Item
            items={items}
            toggleImportance={toggleImportance}
            deleteItem={deleteItem}
            />
        </div>
    );
};

export default ShoppingList;