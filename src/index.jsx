import React from 'react';
import App from './component/App';
import './style.css';



import * as ReactDOMClient from 'react-dom/client';

const container = document.getElementById('root');

// Create a root.
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root.
root.render(<App/>);