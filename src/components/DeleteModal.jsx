function DeleteModal({ onConfirm, onCancel }) {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Excluir tarefa?</h2>
                <p>Certeza que deseja excluir essa tarefa?</p>
                <p>Essa ação não pode ser desfeita.</p>

                {/* botoes de acao do modal */}
                <div className="modal-actions">
                    <button className="red" onClick={onConfirm}>
                        Excluir
                    </button>
                    <button className="neutral" onClick={onCancel}>
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeleteModal;
