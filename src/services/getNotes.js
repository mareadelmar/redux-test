const url = "http://localhost:3001/notes";

export const getNotes = () => {
    return fetch(url)
        .then((res) => res.json())
};
