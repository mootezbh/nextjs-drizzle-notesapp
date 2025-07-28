"use client";
import { ChangeEvent, FC, useState } from "react";

interface Props {
  createTodo: (value: string) => void;
}

const AddTodo: FC<Props> = ({ createTodo }) => {
  // State for handling input value
  const [input, setInput] = useState("");

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleAdd = async () => {
    createTodo(input);
    setInput("");
  };

  return (
    <div className="glass-card w-full flex gap-2 mt-6 p-2">
      <input
        type="text"
        className="w-full px-3 py-2 bg-[#1a1a2e] border border-[#3a0ca3] text-white rounded outline-none focus:ring-2 focus:ring-[#7209b7] transition-all"
        onChange={handleInput}
        value={input}
        placeholder="Add a new todo..."
      />
      <button
        className="flex items-center justify-center bg-gradient-to-r from-[#3a0ca3] to-[#7209b7] text-white font-semibold rounded px-4 h-10 py-1 shadow-md hover:scale-105 transition-transform"
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
