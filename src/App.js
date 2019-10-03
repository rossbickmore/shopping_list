import React, {useState, useEffect} from 'react';
import axios from 'axios'

function App() {
  const [items, setItems] = useState([])
  const [name, setName] =useState("")
  const [quantity, setQuantity] =useState("")
  const [type, setType] = useState("")
  const [importance, setImportance] = useState("")

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
    const newItem = {...item, importance: true}
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




  return (
    <div>
      <div className="header">
        <h1>My shopping list</h1>
      </div>
      <div className="list">
        <h1>Current list</h1>
        <p>You currently have {items.length} item(s) in your shopping list:</p>
        <ul>
          {items.map( item => (
            <div style={ item.importance === true ? {color: "red"} : null}>
              <li key={item.id}> {item.quantity} {item.name}</li>
              <button onClick={() => toggleImportance(item.id)}>Mark as important</button>
              <button onClick={() => deleteItem(item.id)}>Delete</button>
            </div>
          )
          )}
        </ul>
      </div>
      <div className="form">
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
    </div>
  );
}

export default App;
