const TaskItem = () => {
    return (
        <li className="task-item">
            <div className="task-info">
                <h3>Title</h3>

                <p>Description</p>

                <small className="task-date">
                    Created at: xx/xx/xxxx xx:xx:xx
                </small>
            </div>

            <div className="actions">
                <button className="status-btn">Pendente</button>
                <button className="delete-btn">🗑️</button>
            </div>
        </li>
    );
};

export default TaskItem;