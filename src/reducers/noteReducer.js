// reducer --> funciones puras

// const initialValue = [
//     {
//         id: 55125887,
//         content: "llamen a moe, que larry está en cualquiera",
//         important: false,
//     },
//     {
//         id: 97422128,
//         content: "usted se tiene que arrepentir",
//         important: false,
//     },
// ];

export const noteReducer = (state = [], action) => {
    
    if (action.type === "@notes/init"){
        return action.payload;
    }
    
    if (action.type === "@notes/created") {
        return [...state, action.payload];
    }

    if (action.type === "@notes/toggle-important") {
        const { id } = action.payload;

        return state.map((note) => {
            if (note.id === id) {
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

// generar id
const generateId = () => Math.floor(Math.random() * 9999999) + 1;

// action creator: create note
export const createNote = (content) => {
    return {
        type: "@notes/created",
        payload: {
            content,
            important: false,
            id: generateId(),
        },
    };
};

// action creator: toggle importance
export const toggleImportance = (id) => {
    return {
        type: "@notes/toggle-important",
        payload: {
            id,
        },
    };
};

export const notesInit =(notes)=>{
    return {
        type:"@notes/init",
        payload: notes
    }
}

/*
(*) aunque estemos en el map, es un array de objetos y moficaríamos al interior del objeto.
para esto podemos instalar una dependencia de desarrollo que se llama deepFreeze: para usar en los test; nos permite asegurarnos que no estamos
modificando el objeto original.
*/
