import "./App.css";
import Header from "./components/Header";
import Controls from "./components/Controls";
import TaskList from "./components/TaskList";
import AddTaskModal from "./components/AddTaskModal";
import { useState } from "react";

function App() {
    const [showAddModal, setShowAddModal] = useState(false);

    function addTask() {
        
    }
    return (
        <div className="app-container">
            {/*Header */}
            <Header />

            {/*Controls*/}
            <Controls 
                openAddModal={() => setShowAddModal(true)} />

            {/*Task List*/}
            <TaskList />

            {/*Modal add new task*/}
            {showAddModal && (
                <AddTaskModal
                    onSave={addTask}
                    onClose={() => setShowAddModal(false)}
                />
            )}
        </div>
    );
}

export default App;
