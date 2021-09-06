const url = "http://localhost:3001/notes";

export const getNotes = () => {
    return fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            return data;
        })
        .catch((err) => console.error(err));
};
