import React, { useState } from 'react';
import './CSS/App.css'; 

import Button from './UI/Button';
import Input from './UI/Input';
import Card from './UI/Card';
import Tooltip from './UI/Tooltip';
import Modal from './UI/Modal';

const Showcase: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="content">
      <h1>UI Components Showcase</h1>
      
      <section>
        <h2>Button</h2>
        <Button label="Click Me" onClick={() => alert('Button clicked!')} />
      </section>
      
      <section>
        <h2>Input</h2>
        <Input value={inputValue} onChange={handleInputChange} placeholder="Type something..." />
      </section>
      
      <section>
        <h2>Card</h2>
        <Card title="Example Card">
          <p>This is a card component with some content.</p>
        </Card>
      </section>
      
      
      <section>
        <h2>Tooltip</h2>
        <Tooltip content="This is a tooltip">
          <span>Hover over me</span>
        </Tooltip>
      </section>
      
      <section>
        <h2>Modal</h2>
        <Button label="Open Modal" onClick={toggleModal} />
        <Modal isOpen={isModalOpen} onClose={toggleModal} title="Example Modal">
          <p>This is a modal component.</p>
          <Button label="Close Modal" onClick={toggleModal} />
        </Modal>
      </section>
    </div>
  );
};

export default Showcase;
