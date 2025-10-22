const Controls = () => {
    return (
        <div className="controls">
            <input
                type="text"
                placeholder="🔍Buscar por título ou descrição..."
            />

            <select>
                <option value="all">Todas</option>
                <option value="done">Concluídas</option>
                <option value="pending">Pendentes</option>
            </select>

            <button className="add-btn">Nova Tarefa</button>
        </div>
    );
};

export default Controls;
