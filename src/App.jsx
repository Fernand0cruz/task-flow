import "./App.css";
import Header from "./components/Header";
import Controls from "./components/Controls";
import TaskList from "./components/TaskList";
import AddTaskModal from "./components/AddTaskModal";
import DeleteModal from "./components/DeleteModal";
import { useState, useEffect } from "react";

function App() {
    // state para controlar a exibicao dos modais
    const [showAddModal, setShowAddModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(null);

    // state para controlar se os dados foram carregados do localstorage
    const [loaded, setLoaded] = useState(false);

    // state principais da aplicacao
    const [tasks, setTasks] = useState([]);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("all");

    // useeffect para carregar tarefas do localStorage quando o componente e montado
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

    // useeffect para salvar tarefas no localStorage sempre que o array de tarefas mudar
    useEffect(() => {
        if (loaded) {
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
    }, [tasks, loaded]); // executa quando tasks ou loaded mudarem

    // funcao para adicionar uma nova tarefa ao array
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

    // funcao para deletar uma tarefa pelo id
    function deleteTask(id) {
        setTasks(tasks.filter((t) => t.id !== id));
        setShowDeleteModal(null);
    }

    // funcao para alternar o status de conclusao de uma tarefa
    function toggleStatus(id) {
        setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
    }

    // conta quantas tarefas estao concluidas
    const completedCount = tasks.filter((t) => t.done).length;

    // filtra as tarefas baseado nas busca e no filtro
    const filteredTasks = tasks.filter((t) => {
        const matchesSearch =
            t.title.toLowerCase().includes(search.toLowerCase()) ||
            t.description.toLowerCase().includes(search.toLowerCase());
        const matchesFilter =
            filter === "all" ||
            (filter === "done" && t.done) ||
            (filter === "pending" && !t.done);
        return matchesSearch && matchesFilter;
    });

    return (
        <div className="app-container">
            {/* cabecalho com estatisticas das tarefas */}
            <Header
                completed={completedCount}
                pending={tasks.length - completedCount}
            />

            {/* controles de busca, filtro e adicionar tarefas */}
            <Controls
                search={search}
                setSearch={setSearch}
                filter={filter}
                setFilter={setFilter}
                openAddModal={() => setShowAddModal(true)}
            />

            {/* lista de tarefas filtradas */}
            <TaskList
                onToggle={toggleStatus}
                tasks={filteredTasks}
                onDelete={setShowDeleteModal}
            />

            {/* modal para adicionar nova tarefa / so aparece se showaddmodal for true */}
            {showAddModal && (
                <AddTaskModal
                    onSave={addTask}
                    onClose={() => setShowAddModal(false)}
                />
            )}

            {/* modal de confirmação para deletar tarefa / so aparece se showdeletemodal tiver um id */}
            {showDeleteModal && (
                <DeleteModal
                    onConfirm={() => deleteTask(showDeleteModal)}
                    onCancel={() => setShowDeleteModal(null)}
                />
            )}
        </div>
    );
}

export default App;
