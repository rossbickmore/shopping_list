import React from 'react';

const Item = ({items, toggleImportance, deleteItem}) => {
    return (
        <div>
            <ul>
            {items.map( item => (
                <div style={ item.importance === true ? {color: "red"} : null}>
                <li key={item.id}> {item.quantity} {item.name}</li>
                <button onClick={() => toggleImportance(item.id)}>Toggle importance</button>
                <button onClick={() => deleteItem(item.id)}>Delete</button>
                </div>
            )
            )}
            </ul>
        </div>
    );
};

export default Item;