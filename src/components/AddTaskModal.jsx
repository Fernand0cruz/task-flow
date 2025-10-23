import { useState } from "react";

const AddTaskModal = ({ onSave, onClose }) => {
    const [newTask, setNewTask] = useState({ title: "", description: "" });
    const [errors, setErrors] = useState({ title: "", description: "" });

    function handleSubmit(e) {
        e.preventDefault();
        setErrors({ title: "", description: "" });

        let hasError = false;
        const newErrors = { title: "", description: "" };

        if (!newTask.title.trim()) {
            newErrors.title = "O título é obrigatório!";
            hasError = true;
        } else if (newTask.title.length > 60) {
            newErrors.title = "O título deve ter no máximo 60 caracteres.";
            hasError = true;
        }

        if (newTask.description.length > 200) {
            newErrors.description =
                "A descrição deve ter no máximo 200 caracteres.";
            hasError = true;
        }

        if (hasError) {
            setErrors(newErrors);
            return;
        }

        onSave(newTask);
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
                        value={newTask.title}
                        onChange={(e) =>
                            setNewTask({ ...newTask, title: e.target.value })
                        }
                        maxLength={60}
                    />

                    {errors.title && (
                        <span className="error-msg">{errors.title}</span>
                    )}

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

                    {errors.description && (
                        <span className="error-msg">{errors.description}</span>
                    )}

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
