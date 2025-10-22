const AddTaskModal = ({onClose}) => {
    function handleSubmit(e) {
        e.preventDefault();

        onClose();
    }
    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Nova Tarefa</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Título (obrigatório)"
                        maxLength={60}
                    />

                    <p className="error-msg">erro</p>

                    <textarea
                        placeholder="Descrição (opcional)"
                        maxLength={200}
                    />

                    <p className="error-msg">erro</p>

                    <div className="modal-actions">
                        <button type="submit" className="green">
                            Salvar
                        </button>
                        <button type="button" className="red" onClick={onClose}>
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTaskModal;
