import { useState } from "react";

import "./ItemRow.css"

const ItemRow = ({ item, onDelete, onEdit, index }) => {

    const [showOptions, setShowOptions] = useState(false)
    const [editing, setEditing] = useState(false)
    const [newValue, setNewValue] = useState(item)
    const [askForConfirmation, setAskForConfirmation] = useState(false)


    return <div className="columns item-row"
        onMouseEnter={()=>setShowOptions(true && !editing && !askForConfirmation)}
        onMouseLeave={()=>setShowOptions(false)}>

        {!editing && <p className="column is-three-quarters">{item} </p>}
        {showOptions && <div className="column columns">
            <button className=" button column is-half is-danger is-outlined" onClick={() => { setAskForConfirmation(true); setShowOptions(false) }}>Delete</button>
            <button className=" button column is-half is-link is-outlined" onClick={() => { setEditing(true); setShowOptions(false) }}>Edit</button>
        </div>
        }

        {editing && (<input className="is-three-quarters input is-success column" value={newValue} onChange={e => setNewValue(e.target.value)} />)}

        {editing && <div className="column columns">
            <button className="column button is-success" onClick={() => { onEdit(index, newValue); setEditing(false); setShowOptions(true) }}>ok</button>
            <button className="column button is-danger" onClick={() => { setEditing(false); setShowOptions(true) }}>cancel</button>
        </div>}
        

        {askForConfirmation && <div className="column columns">
            <p className="column">Are you sure you want to delete?</p>
            <button className="column button is-success is-normal" onClick={() => {setAskForConfirmation(false); onDelete(index)}} >Yes</button>
            <button className="column button is-success is-danger" onClick={() => { setAskForConfirmation(false); setShowOptions(true)}} >Cancel</button>
        </div>}

    </div>;
};

export default ItemRow;
