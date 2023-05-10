import React from 'react';
import ReactDom from 'react-dom';
import App from './routes/App';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App />);