import React from 'react';
import ReactDOM from 'react-dom/client';
import Board from './board';
import './index.css'; 
import { observe } from './game';

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<Board knightPosition={[1, 2]} />,)

//const root = document.getElementById('root')
//observe((knightPosition) => ReactDOM.render(<Board knightPosition={knightPosition} />, root))

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

observe((knightPosition) => root.render(<Board knightPosition={knightPosition} />));