import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleImportance } from "../reducers/noteReducer";
import Note from "./Note";

const ListOfNotes = () => {
    //const state = store.getState();

    // acceder al state y store a través de REACT-REDUX:
    const notes = useSelector((state) => state.notes); // (select --> subscribe a los cambios) todo el estado porque es solo un array
    //const importantNotes = useSelector(state=>state.filter(item=>item.important))
    const dispatch = useDispatch();

    const handleToggleImportance = (id) => {
        dispatch(toggleImportance(id));
    };
    return (
        <div className="list-container">
            <ul>
                {notes.map((note) => {
                    return (
                        <Note
                            key={note.id}
                            note={note}
                            toggle={handleToggleImportance}
                        />
                    );
                })}
            </ul>
        </div>
    );
};

export default ListOfNotes;
