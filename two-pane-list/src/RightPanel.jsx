import React from 'react';

const RightPanel = ({data}) => {
  return <div className='column is-three-quarters content'>
      {data && <h1 className='title is-4'>{data.title}</h1>}
      <br/>
      {data && data.content.map((str, i) => {
          return<p key={i}>{str}</p>
      })}
      {!data && <p style={{textAlign: 'center'}}>Please select a title from the left pane to view further information.</p>}
  </div>;
};

export default RightPanel;
