import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleImportance } from "../reducers/noteReducer";

const ListOfNotes = () => {
    //const state = store.getState();

    // acceder al state y store a través de REACT-REDUX:
    const notes = useSelector((state) => state); // (select --> subscribe a los cambios) todo el estado porque es solo un array
    //const importantNotes = useSelector(state=>state.filter(item=>item.important))
    const dispatch = useDispatch();

    const handleToggleImportance = (id) => {
        dispatch(toggleImportance(id));
    };
    return (
        <div className="list-container">
            <ul>
                {notes.map((item) => {
                    return (
                        <li
                            key={item.id}
                            onClick={() => handleToggleImportance(item.id)}
                        >
                            {item.content}{" "}
                            <span>
                                <strong>
                                    {item.important
                                        ? "important"
                                        : "not important"}
                                </strong>
                            </span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default ListOfNotes;
