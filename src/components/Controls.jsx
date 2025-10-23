const Controls = ({ filter, setFilter, search, setSearch, openAddModal }) => {
    return (
        <div className="controls">
            {/* campo de busca por titulo ou descricao */}
            <input
                type="text"
                placeholder="🔍Buscar por título ou descrição..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {/* seletor de filtro para mostrar todas, concluidas ou pendentes */}
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="all">Todas</option>
                <option value="done">Concluídas</option>
                <option value="pending">Pendentes</option>
            </select>

            {/* botao para abrir modal de nova tarefa */}
            <button className="add-btn" onClick={openAddModal}>
                Nova Tarefa
            </button>
        </div>
    );
};

export default Controls;
