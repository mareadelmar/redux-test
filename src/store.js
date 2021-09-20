//import { createStore, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { noteReducer } from "./reducers/noteReducer";
import { filterReducer } from "./reducers/filterReducer";
import notesServicesReducer from "./reducers/notesServicesReducer"


export const store = configureStore({
    reducer: {
        notes: noteReducer,
        filter: filterReducer,
        notesDB: notesServicesReducer,
    }
})

// export const store = createStore(
//     combineReducers({
//         notes: noteReducer,
//         filter: filterReducer,
//         notesDB: notesServicesReducer,
//     })
// );
