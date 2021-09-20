import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getNotes } from "../services/getNotes";

// thunk
export const getNotesDB = createAsyncThunk(
    "notesDB/getNotesDB",
    async () => {
        return getNotes();
    }
)

// reducer
const notesDBSlice = createSlice({
    name: "notesDB",
    initialState: {
        data: [],
        status: null
    },

    // acciones por default que puede recibir el thunk (esto es de createAsyncThunk tmb)
    extraReducers: {
        [getNotesDB.pending]: (state, action) => {
            state.status = "loading";
        },
        [getNotesDB.fulfilled]: (state, { payload }) => {
            state.data = payload;
            state.status = "success";
        },
        [getNotesDB.rejected]: (state, action) => {
            state.status = "failed";
        }
    },
})

export default notesDBSlice.reducer;



// * Thunks -->
// * extraReducers --> para las actions que sean llamadas desde un thunk (?)
// * createAsyncThunk --> recibe dos argumentos: el action type y una función asincrónica.
