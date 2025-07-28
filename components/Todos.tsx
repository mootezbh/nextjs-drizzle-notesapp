"use client";
import { FC, useState } from "react";
import { todoType } from "@/types/todoType";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
import {
  addTodo,
  deleteTodo,
  editTodo,
  toggleTodo,
} from "@/actions/todoActions";

interface Props {
  todos: todoType[];
  user: any;
}

const Todos: FC<Props> = ({ todos, user }) => {
  const [todoItems, setTodoItems] = useState<todoType[]>(todos);

  const createTodo = (text: string) => {
    // addUser();
    const id = new Date().getTime();
    addTodo(id, text, user?.id);
    setTodoItems((prev) => [
      ...prev,
      { id: id, text, done: false, userId: user?.id },
    ]);
  };

  const changeTodoText = (id: number, text: string) => {
    setTodoItems((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    );
    editTodo(id, text);
  };

  const toggleIsTodoDone = (id: number, done: boolean) => {
    setTodoItems((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
    toggleTodo(id, done);
  };

  const deleteTodoItem = (id: number) => {
    setTodoItems((prev) => prev.filter((todo) => todo.id !== id));
    deleteTodo(id);
  };

  return (
    <main className="glass-card flex mx-auto max-w-xl w-full min-h-[60vh] flex-col items-center p-10 shadow-2xl">
      <div className="text-5xl font-medium retro-glow mb-6">Your Todos</div>
      <div className="w-full flex flex-col mt-2 gap-3">
        {todoItems?.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            changeTodoText={changeTodoText}
            toggleIsTodoDone={toggleIsTodoDone}
            deleteTodoItem={deleteTodoItem}
          />
        ))}
      </div>
      <AddTodo createTodo={createTodo} />
    </main>
  );
};

export default Todos;
