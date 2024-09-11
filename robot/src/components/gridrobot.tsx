import '../components/CSS/gridrobot.css';
import React, { useState } from 'react';
import robotsData from '../../../robots_data.json';

interface Robot {
  id: string;
  alive: boolean;
  player: string;
  planetId: string;
  position: number;
}

const Gridrobot: React.FC = () => {
  const [robots] = useState<Robot[]>(robotsData);
  const gridSize = 12; // Use the same grid size as the planet

  const robotsByPosition: { [key: number]: Robot[] } = robots.reduce((acc, robot) => {
    if (!acc[robot.position]) {
      acc[robot.position] = [];
    }
    acc[robot.position].push(robot);
    return acc;
  }, {} as { [key: number]: Robot[] });

  return (
    <div className="robot-container">
      {Object.entries(robotsByPosition).map(([position, robotsAtPosition]) => {
        const column = (parseInt(position) % gridSize) + 1;
        const row = Math.floor(parseInt(position) / gridSize) + 1;

        return (
          <div
            key={position}
            className="robot-item"
            style={{ gridColumn: `${column}`, gridRow: `${row}` }}
          >
            <div className="robot-icon">
              {robotsAtPosition[0].alive ? '🤖' : '💀'}
            </div>

            <div className="robot-players-list">
              {robotsAtPosition.map((robot) => (
                <div key={robot.id}>
                  {robot.player} ({robot.alive ? '🤖' : '💀'})
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Gridrobot;
