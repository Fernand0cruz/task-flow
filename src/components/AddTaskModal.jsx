import { useState } from "react";

const AddTaskModal = ({ onSave, onClose }) => {
    // state para armazenar os dados da nova tarefa sendo criada
    const [newTask, setNewTask] = useState({ title: "", description: "" });

    // state para armazenar mensagens de erro de validacao
    const [errors, setErrors] = useState({ title: "", description: "" });

    // funcao para lidar com o envio do formulario
    function handleSubmit(e) {
        e.preventDefault(); 
        setErrors({ title: "", description: "" });

        let hasError = false;
        const newErrors = { title: "", description: "" };

        // validação do titulo - obrigatorio e maximo 60 caracteres
        if (!newTask.title.trim()) {
            newErrors.title = "O título é obrigatório!";
            hasError = true;
        } else if (newTask.title.length > 60) {
            newErrors.title = "O título deve ter no máximo 60 caracteres.";
            hasError = true;
        }

        // validacao da descricao: maximo 200 caracteres
        if (newTask.description.length > 200) {
            newErrors.description =
                "A descrição deve ter no máximo 200 caracteres.";
            hasError = true;
        }

        // se erros exibe as mensagens e nao salva
        if (hasError) {
            setErrors(newErrors);
            return;
        }

        // se nao ha erros salva a tarefa e fecha o modal
        onSave(newTask);
        onClose();
    }
    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Nova Tarefa</h2>
                <form onSubmit={handleSubmit}>
                    {/* campo de titulo com validacao */}
                    <input
                        type="text"
                        placeholder="Título (obrigatório)"
                        value={newTask.title}
                        onChange={(e) =>
                            setNewTask({ ...newTask, title: e.target.value })
                        }
                        maxLength={60}
                    />

                    {/* exibe erro de validacao do titulo se existir */}
                    {errors.title && (
                        <span className="error-msg">{errors.title}</span>
                    )}

                    {/* campo de descricao opcional */}
                    <textarea
                        placeholder="Descrição (opcional)"
                        value={newTask.description}
                        onChange={(e) =>
                            setNewTask({
                                ...newTask,
                                description: e.target.value,
                            })
                        }
                        maxLength={200}
                    />

                    {/* exibe erro de validacao da descricao se existir */}
                    {errors.description && (
                        <span className="error-msg">{errors.description}</span>
                    )}

                    {/* botoes de acao do modal */}
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
