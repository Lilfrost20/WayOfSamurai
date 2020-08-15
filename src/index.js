import React from 'react';
import './index.css';
import store from "./Redux-context/Store";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
export const StoreContext = React.createContext(store);


let Rerender = () => {
    ReactDOM.render(
        <React.StrictMode>
            <StoreContext.Provider value={store}>
                <App/>
            </StoreContext.Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

Rerender(store.getState())

store.Subscribe(Rerender)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
