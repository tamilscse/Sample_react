import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import Car from './Car';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

const carContainer = document.getElementById('demo');
const demo = createRoot(carContainer);
demo.render(<Car color="red" brand="Ford" />);

