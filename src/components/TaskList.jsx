import TaskItem from "./TaskItem";

const TaskList = ({ onDelete }) => {
    return (
        <div className="TaskList">
            {/*map*/}
            <TaskItem onDelete={onDelete} />
        </div>
    );
};

export default TaskList;
