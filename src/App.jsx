import "./App.css";
import Header from "./components/Header";
import Controls from "./components/Controls";
import TaskList from "./components/TaskList";
import AddTaskModal from "./components/AddTaskModal";
import DeleteModal from "./components/DeleteModal";
import { useState } from "react";

function App() {
    const [showAddModal, setShowAddModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(null);

    function addTask() {}

    return (
        <div className="app-container">
            {/*Header */}
            <Header />

            {/*Controls*/}
            <Controls openAddModal={() => setShowAddModal(true)} />

            {/*Task List*/}
            <TaskList onDelete={setShowDeleteModal} />

            {/* Modal add new task */}
            {showAddModal && (
                <AddTaskModal
                    onSave={addTask}
                    onClose={() => setShowAddModal(false)}
                />
            )}

            {/*Modal confirm delete task*/}
            {showDeleteModal && (
                <DeleteModal onCancel={() => setShowDeleteModal(null)} />
            )}
        </div>
    );
}

export default App;
