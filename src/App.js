import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import NewNote from "./components/NewNote";
import ListOfNotes from "./components/ListOfNotes";
import { getNotes } from "./services/getNotes";
import { notesInit } from "./reducers/noteReducer";

const App = () => {
    const dispatch = useDispatch();

    const selectedFilter = (value) => {
        console.log(value);
    };

    useEffect(()=>{
        getNotes().then(notes=>{
            dispatch(notesInit(notes))
        }).catch(err=>console.error(err))
    },[dispatch])

    return (
        <div className="app">
            <NewNote />
            <div>
                all
                <input
                    type="radio"
                    name="filter"
                    onChange={() => selectedFilter("all")}
                />
                importants
                <input
                    type="radio"
                    name="filter"
                    onChange={() => selectedFilter("imp")}
                />
                not importants
                <input
                    type="radio"
                    name="filter"
                    onChange={() => selectedFilter("not-imp")}
                />
            </div>
            <ListOfNotes />
        </div>
    );
};

export default App;
