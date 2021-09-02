import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
//import App from "./App";
import { noteReducer } from "./reducers/noteReducer";

// crear store
const store = createStore(noteReducer);

// store.dispatch({
//     type: "@note/created",
//     payload: {
//         id: 1,
//         content: "bla bla holis",
//         important: false,
//     },
// });

// store.dispatch({
//     type: "@note/created",
//     payload: {
//         id: 2,
//         content: "holis holi hol",
//         important: true,
//     },
// });

// generar id
const generateId = () => Math.floor(Math.random() * 9999999) + 1;

// action creator: crear nota
const createNote = (content) => {
    return {
        type: "@note/created",
        payload: {
            content,
            important: false,
            id: generateId(),
        },
    };
};

const App = () => {
    const state = store.getState();

    const handleSubmitNote = (e) => {
        e.preventDefault();

        const { target } = e;
        const content = target.note.value;
        console.log("enviar nota", content);

        target.note.value = "";
        store.dispatch(createNote(content));
    };

    const toggleImportance = (id) => {
        store.dispatch({
            type: "@note/toggle-important",
            payload: {
                id,
            },
        });
    };

    return (
        <div className="app">
            <form onSubmit={handleSubmitNote}>
                <input type="text" name="note" />
                <button>enviar</button>
            </form>
            <ul>
                {state.map((item) => {
                    return (
                        <li
                            key={item.id}
                            onClick={() => toggleImportance(item.id)}
                        >
                            {item.content}{" "}
                            <span>
                                {item.important ? "important" : "not important"}
                            </span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

// por ahora lo gestionamos manualmente: para detectar los cambios de estado

store.subscribe(() => {
    renderApp();
});

const renderApp = () => {
    ReactDOM.render(<App />, document.getElementById("root"));
};

renderApp();
