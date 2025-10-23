const TaskItem = ({ onToggle, task, onDelete }) => {
    return (
        <li className={`task-item ${task.done ? "done" : ""}`}>
            <div className="task-info">
                <h3>{task.title}</h3>

                <p>{task.description}</p>

                <small className="task-date">
                    Criado em: {new Date(task.createdAt).toLocaleString()}
                </small>
            </div>

            <div className="actions">
                <button
                    className={`status-btn ${task.done ? "green" : "gray"}`}
                    onClick={() => onToggle(task.id)}
                >
                    {task.done ? "Concluída" : "Pendente"}
                </button>
                <button
                    className="delete-btn"
                    onClick={() => onDelete(task.id)}
                >
                    🗑️
                </button>
            </div>
        </li>
    );
};

export default TaskItem;
