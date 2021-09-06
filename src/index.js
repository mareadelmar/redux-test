import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./store";

// crear store: recibe un solo objeto

// const store = createStore(
//     combineReducers({
//         notes: noteReducer,
//         filter: filterReducer,
//     })
// );

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
