import React, {useState, useEffect} from 'react';
import axios from 'axios'
import ShoppingList from './components/ShoppingList'
import ShoppingListForm from './components/ShoppingListForm'
import { Header, Container } from 'semantic-ui-react'

function App() {

  const [items, setItems] = useState([])
  const [name, setName] =useState("")
  const [quantity, setQuantity] =useState("")
  const [type, setType] = useState("")

  useEffect( () => {
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:3001/items',
      );
      setItems(result.data);
    };
    fetchData()
  }, [] )

  const addItem = async () => {
    const item = {
      name,
      quantity,
      type,
      importance: false
    }
    const res = await axios.post("http://localhost:3001/items/", item)
    setItems(items.concat(res.data))
    setName('')
    setQuantity('')
    setType('')
  }

  const deleteItem = async (id) => {
    await axios.delete(`http://localhost:3001/items/${id}`)
    setItems(items.filter( item => item.id !== id))
  }

  const toggleImportance = async (id) => {
    const item = items.find( item => item.id === id)
    const newItem = {...item, importance: !item.importance}
    await axios.put(`http://localhost:3001/items/${id}`, newItem)
    setItems(items.map( item => item.id === id ? newItem : item))
  }

  const handleNameChange = (event) => {
    event.preventDefault()
    setName(event.target.value)
    console.log("name",name)
  } 

  const handleQuantityChange = (event) => {
    event.preventDefault()
    setQuantity(event.target.value)
    console.log("quantity",quantity)
  } 

  const handleTypeChange = (event) => {
    event.preventDefault()
    setType(event.target.value)
    console.log("type", type)
  }

  const containerStyle = {
    display: "flex"
  }
  
  return (
    <div>
      <Header as='h3' block color='orange' textAlign='center'>My ShoppingList</Header>
      <Container style={containerStyle}>
        <ShoppingList 
        items={items}
        toggleImportance={toggleImportance}
        deleteItem={deleteItem}
        />
        <ShoppingListForm
        addItem={addItem}
        handleNameChange={handleNameChange}
        handleQuantityChange={handleQuantityChange}
        handleTypeChange={handleTypeChange}
        name={name}
        quantity={quantity}
        type={type}
        />
      </Container>
    </div>
  );
}

export default App;
