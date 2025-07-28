"use client";
import { ChangeEvent, FC, useState } from "react";
import { todoType } from "@/types/todoType";
import { FaEdit, FaSave, FaTimes, FaTrash } from "react-icons/fa";

interface Props {
  todo: todoType;
  changeTodoText: (id: number, text: string) => void;
  toggleIsTodoDone: (id: number, done: boolean) => void;
  deleteTodoItem: (id: number) => void;
}

const Todo: FC<Props> = ({
  todo,
  changeTodoText,
  toggleIsTodoDone,
  deleteTodoItem,
}) => {
  const [editing, setEditing] = useState(false);

  const [text, setText] = useState(todo.text);

  const [isDone, setIsDone] = useState(todo.done);

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleIsDone = async () => {
    toggleIsTodoDone(todo.id, !isDone);
    setIsDone((prev) => !prev);
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = async () => {
    changeTodoText(todo.id, text);
    setEditing(false);
  };

  const handleCancel = () => {
    setEditing(false);
    setText(todo.text);
  };

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this todo?")) {
      deleteTodoItem(todo.id);
    }
  };

  return (
    <div className="glass-card flex items-center gap-2 p-4 mb-2 shadow-lg transition-all">
      <input
        type="checkbox"
        className="accent-[#7209b7] rounded-sm h-4 w-4 focus:ring-2 focus:ring-[#3a0ca3]"
        checked={isDone}
        onChange={handleIsDone}
      />
      <input
        type="text"
        value={text}
        onChange={handleTextChange}
        readOnly={!editing}
        className={`bg-transparent text-lg w-full outline-none px-2 py-1 rounded transition-all ${todo.done ? "line-through text-gray-400" : "retro-glow text-white"} read-only:border-transparent focus:border border-[#3a0ca3]`}
      />
      {/* Action buttons for editing, saving, canceling, and deleting */}
      <div className="flex gap-1 ml-auto">
        {editing ? (
          <button
            onClick={handleSave}
            className="bg-gradient-to-r from-[#3a0ca3] to-[#7209b7] text-white rounded px-3 py-1 shadow-md hover:scale-105 transition-transform flex items-center gap-1"
            title="Save"
          >
            <FaSave /> <span className="hidden sm:inline">Save</span>
          </button>
        ) : (
          <button
            onClick={handleEdit}
            className="bg-gradient-to-r from-[#4361ee] to-[#3a0ca3] text-white rounded px-3 py-1 shadow-md hover:scale-105 transition-transform flex items-center gap-1"
            title="Edit"
          >
            <FaEdit /> <span className="hidden sm:inline">Edit</span>
          </button>
        )}
        {editing ? (
          <button
            onClick={handleCancel}
            className="bg-gradient-to-r from-[#7209b7] to-[#3a0ca3] text-white rounded px-3 py-1 shadow-md hover:scale-105 transition-transform flex items-center gap-1"
            title="Cancel"
          >
            <FaTimes /> <span className="hidden sm:inline">Close</span>
          </button>
        ) : (
          <button
            onClick={handleDelete}
            className="bg-gradient-to-r from-[#7209b7] to-[#3a0ca3] text-white rounded px-3 py-1 shadow-md hover:scale-105 transition-transform flex items-center gap-1"
            title="Delete"
          >
            <FaTrash /> <span className="hidden sm:inline">Delete</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Todo;
