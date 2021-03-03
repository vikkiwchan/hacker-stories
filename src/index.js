import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// The second argument specifies where the React application enters your HTML. It expects an element with an id='root', found in the public/index.html file. This is a basic HTML file.
ReactDOM.render(<App />, document.getElementById('root'));
