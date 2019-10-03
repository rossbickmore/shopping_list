import React from 'react';
import { List, Button } from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarrot, faLemon, faDrumstickBite, faBreadSlice} from '@fortawesome/free-solid-svg-icons'

const Item = ({items, toggleImportance, deleteItem}) => {

    const style = [
        {
            type: "Meat",
            color: "purple",
            icon: faDrumstickBite
        },{
            type: "Vegetables",
            color: "green",
            icon: faCarrot
        },{
            type: "Fruit",
            color: "orange",
            icon: faLemon,
        },{
            type: "Carbohydrates",
            color: "brown",
            icon: faBreadSlice
        }
    ]

    const findIcon = (type) => {
        return style.find( x => x.type === type).icon
    }

    const findColor = (type) => {
        return style.find( x => x.type === type).color
    }

    return (
        <div>
            {items.map( item => (
                <List.Item key={item.id} style={{color: findColor(item.type), border: item.importance == true ? "3px solid red" : null}}>
                <FontAwesomeIcon icon={findIcon(item.type)} />
                <List.Content>
                    <List.Header >{item.name}</List.Header>
                    <List.Description>Quantity: {item.quantity} </List.Description>
                    <Button onClick={() => toggleImportance(item.id)} primary>Toggle importance</Button>
                    <Button onClick={() => deleteItem(item.id)} secondary>Delete</Button>
                </List.Content>
                </List.Item>
            )
            )}
        </div>
    );
};

export default Item;