import { initializeIcons } from '@fluentui/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './App';

initializeIcons();

ReactDOM.render(<App />, document.getElementById('app'));