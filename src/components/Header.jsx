const Header = ({ completed, pending }) => {
    return (
        <header>
            <h1>Sua Lista de Tarefas!</h1>

            {/* estatisticas das tarefas */}
            <div className="stats">
                <span>Concluídas: {completed}</span>
                <span>Pendentes: {pending}</span>
            </div>
        </header>
    );
};

export default Header;
