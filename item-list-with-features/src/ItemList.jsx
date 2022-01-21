import React, { useState } from "react";
import ItemRow from "./ItemRow";

export const ItemList = ({ data }) => {
  const [item, setItem] = useState({ id: 0, value: '' })
  const [items, setItems] = useState(() => {
    if (data) return data
    else return []
  })


  const addItem = () => {
    if (item.value === "") {
      alert("Empty value not accepted.")
    }
    else {
      setItems([...items, item])
      setItem({ id: item.id + 1, value: '' })
    }
  }

  const deleteItem = (id) => {

    const tempItems = items.filter(item => item.id !== id)
    setItems(tempItems)
  }

  const editItem = (id, newValue) => {
    if (newValue === "") {
      alert("Empty value not accepted.")
    }
    else {
      const tempItems = items.slice()
      tempItems.forEach((i) => {
        if (i.id === id) i.value = newValue
      })
      setItems(tempItems)
    }

  }
  return <div>

    {items.map((item) => {
      return <ItemRow key={item.id} item={item} onDelete={(index) => deleteItem(index)} onEdit={(index, newValue) => editItem(index, newValue)} />
    })}
    <div className="columns">
      <input type='text' className="input column is-three-quarters" value={item.value} onChange={e => setItem({ id: item.id, value: e.target.value })} />
      <button type='submit' className="button is-primary column" onClick={() => addItem()} > + </button>
    </div>

  </div>;
};
