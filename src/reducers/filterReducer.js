export const filterReducer = (state = "all", action) => {
    console.log("action", action);
    return state;
};


// Gestionar el estado de las SLIDES (backoffice)

export const slidesReducer = (state, action) => {
    console.log(action)
    return state;
}

/*
- deberá tener una acción para renderizar el listado de los Slides en BackOffice
- la lógica existente de peticiones a la API deberá moverse a thunks asíncronos dentro del reducer. 
- utilizar el método createAsyncThunk de Redux Toolkit para la creación de thunks.
*/



