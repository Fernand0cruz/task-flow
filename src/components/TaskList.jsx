import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onDelete }) => {
    return (
        <div className="TaskList">
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} onDelete={onDelete} />
            ))}
        </div>
    );
};

export default TaskList;
