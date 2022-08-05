import React, { createContext, useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
}

const TodoContext = createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id) => {},
});

export default TodoContext;

export const TodoContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }

  const removeTodoHandler = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id));
  }

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler
  };

  return <TodoContext.Provider value={contextValue}>{props.children}</TodoContext.Provider>
};
