import React, { useMemo, useState } from 'react';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

export const TwoPaneList = ({ data }) => {


  const [selectedIndex, setSelectedIndex] = useState(null)
  const allTitles = useMemo(() => {
    return data.map((x) => x.title)
  }, [data])


  return <div className='columns'>

    <LeftPanel getSelected={(index) => setSelectedIndex(index)} titles={allTitles} />
    <RightPanel data={data[selectedIndex]} />

  </div>;
};
