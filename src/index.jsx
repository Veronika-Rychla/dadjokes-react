import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { Jokes } from './Jokes';

const App = () => {
  return <Jokes />;
};

createRoot(document.querySelector('#app')).render(<App />);
