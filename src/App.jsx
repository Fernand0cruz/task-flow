import "./App.css";
import Header from "./components/Header";
import Controls from "./components/Controls";

function App() {
    return (
        <div className="app-container">
            {/*Header */}
            <Header />

            {/*Controls*/}
            {<Controls />}

            {/*Task List*/}
        </div>
    );
}

export default App;
