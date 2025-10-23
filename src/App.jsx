import "./App.css";
import Header from "./components/Header";
import Controls from "./components/Controls";
import TaskList from "./components/TaskList";
import AddTaskModal from "./components/AddTaskModal";
import DeleteModal from "./components/DeleteModal";
import { useState, useEffect } from "react";

function App() {
    const [showAddModal, setShowAddModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const saved = localStorage.getItem("tasks");
        if (saved) {
            try {
                setTasks(JSON.parse(saved));
            } catch {
                console.error("Erro ao ler tarefas do localStorage");
            }
        }
        setLoaded(true);
    }, []);

    useEffect(() => {
        if (loaded) {
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
    }, [tasks, loaded]);

    function addTask(newTask) {
        setTasks([
            ...tasks,
            {
                id: Date.now(),
                ...newTask,
                done: false,
                createdAt: Date.now(),
            },
        ]);
    }

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
