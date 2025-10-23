function DeleteModal({ onCancel }) {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Excluir tarefa?</h2>
                <p>Certeza que deseja excluire essa tarefa?</p>
                <p>Essa ação não pode ser desfeita.</p>
                <div className="modal-actions">
                    <button className="red">Excluir</button>
                    <button className="neutral" onClick={onCancel}>
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeleteModal;
