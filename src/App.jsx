import "./App.css";
import Header from "./components/Header";
import Controls from "./components/Controls";
import TaskList from "./components/TaskList";

function App() {
    return (
        <div className="app-container">
            {/*Header */}
            <Header />

            {/*Controls*/}
            {<Controls />}

            {/*Task List*/}
            {<TaskList/>}
        </div>
    );
}

export default App;
