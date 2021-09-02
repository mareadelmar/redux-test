// reducer --> funciones puras
export const noteReducer = (state = [], action) => {
    if (action.type === "@note/created") {
        return [...state, action.payload];
        // o también --> return state.concat(action.payload);
    }

    if (action.type === "@note/toggle-important") {
        const { id } = action.payload;
        //const note = state.find((item) => item.id === id);

        return state.map((note) => {
            if (note.id === id) {
                // note.important = !note.important; --> no moficar directamente el objeto(*)
                return {
                    ...note,
                    important: !note.important,
                };
            }
            return note;
        });
    }

    return state;
};

/*
(*) aunque estemos en el map, es un array de objetos y moficaríamos al interior del objeto.
para esto podemos instalar una dependencia de desarrollo que se llama deepFreeze: para usar en los test; nos permite asegurarnos que no estamos
modificando el objeto original.
*/
