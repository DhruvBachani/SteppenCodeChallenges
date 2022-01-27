import React, { useCallback, useState } from "react";
import ItemRow from "./ItemRow";

export const ItemList = ({ data }) => {
  const [item, setItem] = useState('')
  const [items, setItems] = useState(() => {
    if (data) return data
    else return []
  })

  const addItem = () => {
    if (item === "") {
      alert("Empty value not accepted.")
    }
    else {
      setItems([...items, item])
      setItem('')
    }
  }

  const deleteItem = useCallback((index) => {
    setItems(prevItems => {
      let tempItems = prevItems.slice()
      tempItems.splice(index, 1)
      return tempItems
    })
  }, [])

  const editItem = useCallback((index, newValue) => {
    if (newValue === "") {
      alert("Empty value not accepted.")
    }
    else {
      const tempItems = items.slice()
      tempItems[index] = newValue
      setItems(tempItems)
    }
  }, [items])
  return <div>

    {items.map((item, i) => {
      return <ItemRow key={i} item={item} onDelete={deleteItem} onEdit={editItem} index={i} />
    })}
    <div className="columns">
      <input type='text' className="input column is-three-quarters" value={item} onChange={e => setItem(e.target.value)} />
      <button type='submit' className="button is-primary column" onClick={() => addItem()} > + </button>
    </div>

  </div>;
};
