import React from "react";
import { useDispatch } from "react-redux";
import { createNote } from "../reducers/noteReducer";

const NewNote = () => {
    const dispatch = useDispatch();

    const handleSubmitNote = (e) => {
        e.preventDefault();

        const { target } = e;
        const content = target.note.value;
        console.log("enviar nota", content);

        target.note.value = "";
        dispatch(createNote(content));
    };
    return (
        <form onSubmit={handleSubmitNote}>
            <input type="text" name="note" />
            <button>enviar</button>
        </form>
    );
};

export default NewNote;
