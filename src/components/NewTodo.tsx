import { useRef, useContext } from 'react';
import TodoContext from '../store/todo-context';
import classes from './NewTodo.module.css';


const NewTodo: React.FC = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const todosCtx = useContext(TodoContext);

  const addTodoHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = todoTextInputRef.current!.value

    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    } 

    todosCtx.addTodo(enteredText)
    todoTextInputRef.current!.value = "";
  }

  return <form onSubmit={addTodoHandler} className={classes.form}>
    <label htmlFor="text">Todo Text</label>
    <input type="string" is="text" ref={todoTextInputRef}/>
    <button>Create Todo</button>
  </form>
}

export default NewTodo;