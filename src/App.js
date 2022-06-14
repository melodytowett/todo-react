import React,{useState,useRef,useEffect} from 'react';
import TodoList from './TodoList'
import './App.css';
const LOCAL_STORAGE = 'todoApp' 

function App() {
  const [todos,setTodos] = useState([])
  const todoNameRef = useRef() 
useEffect(()=>{
  const storedTodos = JSON.parse(localStorage.getItem (LOCAL_STORAGE))
  if (storedTodos) setTodos(storedTodos)
},[])
  useEffect(() =>{
    localStorage.setItem(LOCAL_STORAGE,JSON.stringify(todos))
  },[todos])
function toggleTodo(id){
  const newTodos = [...todos]
  const todo = newTodos.find(todo => todo.id === id)
  todo.complete = !todo.complete
  setTodos(newTodos)
}
  function handleAddTodo(e){
    const name = todoNameRef.current.value
    if(name === '')return
     setTodos(prevTodos => {
      return [...prevTodos, {id:1, name: name, complete :false}]

     })
     todoNameRef.current.value = null
  }
  return (  
    <>
    <TodoList todos={todos} toggleTodo={toggleTodo}/>
    <input ref={todoNameRef} type='text'></input>
    <button onClick={handleAddTodo}>Add Todo</button>
    <button>Clear Completed</button>
    <div>0 left to do</div>
    </>
  );
}

export default App;
