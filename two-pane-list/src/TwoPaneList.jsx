import React, { useState } from 'react';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

export const TwoPaneList = ({data}) => {

  
  const [selectedData, setSelectedData] = useState(null)
  const [allTitles] = useState(()=>{
    var titles = []
    data.forEach((x) => {
      titles.push(x.title)
    })    
    return titles
  })

  const onSelectionChange = (selectedTitle) => {
    data.forEach((x) => {
      if(x.title === selectedTitle) {
        setSelectedData(x)}
        })   
        
      }
   

  return <div className='columns'>

    <LeftPanel getSelected={(title) => onSelectionChange(title)} titles={allTitles}/>
    <RightPanel data={selectedData} />
    
  </div>;
};
