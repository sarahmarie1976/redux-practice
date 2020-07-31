import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { Provider } from 'react-redux'; // sdh
import { createStore, applyMiddleware } from 'redux'; // sdh
import thunk from 'redux-thunk'; // sdh
import reducers from './reducers/reducers'; // sdh



const store = createStore(reducers, applyMiddleware(thunk)) // sdh

ReactDOM.render(
    <Provider store={store}> {/* sdh  */}
        <App />,
    </Provider>,    
document.getElementById("root")
);
