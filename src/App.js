import "./App.css";
import NewNote from "./components/NewNote";
import ListOfNotes from "./components/ListOfNotes";

const App = () => {
    return (
        <div className="app">
            <NewNote />
            <ListOfNotes />
        </div>
    );
};

export default App;
