const Controls = ({ search, setSearch, openAddModal }) => {
    return (
        <div className="controls">
            <input
                type="text"
                placeholder="🔍Buscar por título ou descrição..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <select>
                <option value="all">Todas</option>
                <option value="done">Concluídas</option>
                <option value="pending">Pendentes</option>
            </select>

            <button className="add-btn" onClick={openAddModal}>
                Nova Tarefa
            </button>
        </div>
    );
};

export default Controls;
