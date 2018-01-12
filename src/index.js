import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SideBar from './updatepage/sidebar';
import './updatepage/sidebar.css';
import EventPage from './eventpage/event';
import './eventpage/event.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<EventPage/>, document.getElementById('root'));
registerServiceWorker();
