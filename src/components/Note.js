import React from "react";

const Note = ({ note, toggle }) => {
    return (
        <li onClick={() => toggle(note.id)}>
            {note.content}{" "}
            <span>
                <strong>
                    {note.important ? "important" : "not important"}
                </strong>
            </span>
        </li>
    );
};

export default Note;
