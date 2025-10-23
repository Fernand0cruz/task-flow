const Header = ({ completed, pending }) => {
    return (
        <header>
            <h1>Sua Lista de Tarefas!</h1>

            <div className="stats">
                <span>Concluídas: {completed}</span>
                <span>Pendentes: {pending}</span>
            </div>
        </header>
    );
};

export default Header;
