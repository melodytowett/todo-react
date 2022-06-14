import React from 'react'

 function Todo({todo}) {
  return (
    <label>
      <input type='checkbox' checked = {todo.complete}/>
      {todo.name}
    </label>
  )
}
export default Todo;
