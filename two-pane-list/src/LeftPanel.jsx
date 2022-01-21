import React, { useState } from 'react';

import "./LeftPanel.css"

const LeftPanel = ({titles, getSelected}) => {

    const[selectedTitle, setSelectedTitle] = useState(null)

  return <div  className='column is-one-quarter'>
      {titles.map((title)=>{
          return <p onClick={(e)=>{setSelectedTitle(title);getSelected(title)}} className={"panel-block"+(selectedTitle===title? " is-active":"") }>{title}</p>})}
      </div>;
};

export default LeftPanel;
