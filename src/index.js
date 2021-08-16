import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/';
import store from './store/store'
import {Provider} from "react-redux";
import ThemeProvider from "./context/ThemeProvider";
import './styles/index.css';


ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
);