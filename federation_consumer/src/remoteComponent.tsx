import React from 'react';

interface RemoteComponentProps {
  children: React.ReactNode;
}

const RemoteComponent: React.FC<RemoteComponentProps> = ({ children }) => {
  const style = {
    border: '2px solid red',
    padding: '10px',
    display: 'inline-block',
  };

  return <div style={style}>{children}</div>;
};

export default RemoteComponent;