const TaskItem = ({ task, onDelete }) => {
    return (
        <li className="task-item">
            <div className="task-info">
                <h3>{task.title}</h3>

                <p>{task.description}</p>

                <small className="task-date">
                    Criado em: {new Date(task.createdAt).toLocaleString()}
                </small>
            </div>

            <div className="actions">
                <button className="status-btn">Pendente</button>
                <button className="delete-btn" onClick={() => onDelete(1)}>
                    🗑️
                </button>
            </div>
        </li>
    );
};

export default TaskItem;
