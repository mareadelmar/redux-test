import { createStore, combineReducers } from "redux";
import { noteReducer } from "./reducers/noteReducer";
import { filterReducer } from "./reducers/filterReducer";

export const store = createStore(
    combineReducers({
        notes: noteReducer,
        filter: filterReducer,
    })
);

// getNotes().then((res) => {
//     res.forEach((item) => {
//         return store.dispatch({ type: "@note/created", payload: item });
//     });
// });
