import TaskItem from "./TaskItem";

const TaskList = ({ onToggle, tasks, onDelete }) => {
    return (
        <ul className="task-list">
            {/* render condicional: se nao ha tarefas, mostra mensagem, senao mostra a/as tarefa/s */}
            {tasks.length === 0 ? (
                <p className="empty">Nenhuma tarefa encontrada.</p>
            ) : (
                tasks.map((task) => (
                    <TaskItem
                        onToggle={onToggle} 
                        key={task.id} 
                        task={task} 
                        onDelete={onDelete}
                    />
                ))
            )}
        </ul>
    );
};

export default TaskList;
