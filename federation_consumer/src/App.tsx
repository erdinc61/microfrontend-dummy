import React, { useEffect, useState } from 'react';


import Gridmap from 'map/gridmap';
import Gridrobot from 'robot/gridrobot';
import applyStyles from 'federation_provider/styles';
import RemoteComponent from './remoteComponent';
import Card from 'federation_provider/card';
import Checkbox from 'federation_provider/checkbox';



const App: React.FC = () => {

  const [mapIsChecked, mapSetIsChecked] = useState(true);
  const [robotIsChecked, robotSetIsChecked] = useState(true);



  const handleCheckboxChangeMap = (e: React.ChangeEvent<HTMLInputElement>) => {
    mapSetIsChecked(e.target.checked);
  };

  const handleCheckboxChangeRobot = (e: React.ChangeEvent<HTMLInputElement>) => {
    robotSetIsChecked(e.target.checked);
  };
  

  useEffect(() => {
    applyStyles();
  }, []);

  return (
    <>
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      {mapIsChecked && (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          <Gridmap />
        </div>
      )}

      {robotIsChecked && (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          <Gridrobot />
        </div>
      )}
    </div>

    <section style={{ position: 'fixed', bottom: '10px', right: '10px', zIndex: 100 }}>
      <Checkbox label="Map" checked={mapIsChecked} onChange={handleCheckboxChangeMap} />
      <Checkbox label="Robot" checked={robotIsChecked} onChange={handleCheckboxChangeRobot} />
    </section>
  </>
);
};

export default App;
