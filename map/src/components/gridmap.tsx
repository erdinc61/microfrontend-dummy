import '../components/CSS/gridmap.css'; 

import React, { useState } from 'react';
import planetsData from '../../../planets_data.json';

interface Planet {
  planetid: string;
  gameWordlId: string;
  movementDifficulty: number;
  resourceType: string;
  position: number;
}

const Gridmap: React.FC = () => {
  const [planets] = useState<Planet[]>(planetsData);

  const gridSize = 12; // same size as robot

  return (
    <div className="grid-container" style={{ 
      display: 'grid',
      gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
      gridTemplateRows: `repeat(${gridSize}, 1fr)`,
    }}>
      {planets.map((planet) => (
        <div 
          key={planet.planetid} 
          className="grid-item" 
          style={{ 
            gridColumn: `${(planet.position % gridSize) + 1} / span 1`, 
            gridRow: `${Math.floor(planet.position / gridSize) + 1} / span 1`
          }}
        >
          <p>{planet.resourceType}</p>
          <p>Id: {planet.planetid.slice(3,7)}</p>
        </div>
      ))}
    </div>
  );
};


export default Gridmap;
