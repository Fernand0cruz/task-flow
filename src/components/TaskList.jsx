import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onDelete }) => {
    return (
        <ul className="task-list">
            {tasks.length === 0 ? (
                <p className="empty">Nenhuma tarefa encontrada.</p>
            ) : (
                tasks.map((task) => (
                    <TaskItem key={task.id} task={task} onDelete={onDelete} />
                ))
            )}
        </ul>
    );
};

export default TaskList;
