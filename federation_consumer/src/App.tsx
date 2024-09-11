import React, { useState, useEffect } from 'react';


import Gridmap from 'map/gridmap';
import Gridrobot from 'robot/gridrobot';
import RemoteComponent from './remoteComponent';

const App: React.FC = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      {/*Map im Hintergrund */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        <Gridmap />
      </div>

      {/* Roboter im Vordergrund */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        <Gridrobot />
      </div>
    </div>
  );
};

export default App;
