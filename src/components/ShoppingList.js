import React from 'react';
import Item from './Item'
import { List, Image } from 'semantic-ui-react'

const ShoppingList = ({items, toggleImportance, deleteItem}) => {

    const style = {
        width: "50%"
    }

    return (
        <div style={style}>
            <h1>Current list</h1>
            <p>You currently have {items.length} item(s) in your shopping list:</p>
            <List>
                <Item
                items={items}
                toggleImportance={toggleImportance}
                deleteItem={deleteItem}
                />
            </List>
        </div>
    );
};

export default ShoppingList;