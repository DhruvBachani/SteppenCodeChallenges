import React, { useState } from 'react';

import "./LeftPanel.css"

const LeftPanel = ({titles, getSelected}) => {

    const[selectedTitle, setSelectedTitle] = useState(null)

  return <div  className='column is-one-quarter'>
      {titles.map((title, i)=>{
          return <p key={i} onClick={(e)=>{setSelectedTitle(i);getSelected(i)}} className={"panel-block"+(selectedTitle===i? " is-active":"") }>{title}</p>})}
      </div>;
};

export default LeftPanel;
