import React from 'react';
import ReactDOM from 'react-dom';

const contentText = 'Content with Element';
const element = React.createElement('h1', {}, contentText);

ReactDOM.render(element, document.getElementById('root'));
