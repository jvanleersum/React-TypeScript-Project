import { useRef } from 'react';

const NewTodo: React.FC<{onAddTodo: (text: string) => void}> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const addTodoHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = todoTextInputRef.current!.value

    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    } 

    props.onAddTodo(enteredText)
    todoTextInputRef.current!.value = "";
  }

  return <form onSubmit={addTodoHandler}>
    <label htmlFor="text">Todo Text</label>
    <input type="string" is="text" ref={todoTextInputRef}/>
    <button>Create Todo</button>
  </form>
}

export default NewTodo;