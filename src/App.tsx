import React from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="tasks">
      <TaskList/>
      <img src={logo} alt="React" />
    </div>
  );
}

export default App;
