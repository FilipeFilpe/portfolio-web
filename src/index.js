import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import Initial from './components/Initial';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Initial />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
