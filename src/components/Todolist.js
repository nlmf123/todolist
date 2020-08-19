import React, { useState } from 'react'

import TodoItem from './TodoItem'

const Todolist = () => {
  const [state, setState] = useState({
    todo: '',
    todolist: [],
  })

  const [edit, setEdit] = useState({
    editTodo: '',
    editIndex: '',
  })

  const [isUpdate, setIsUpdate] = useState(false)

  const { todo, todolist } = state
  const { editTodo, editIndex } = edit

  const handleOnChange = (e) => {
    const { name, value } = e.target

    setState({ ...state, [name]: value })
  }

  const handleOnChangeEdit = (e) => {
    const { name, value } = e.target

    setEdit({ ...edit, [name]: value })
  }

  const handleOnClickEdit = (index, value) => {
    setIsUpdate(true)
    setEdit({ editTodo: value, editIndex: index })
  }

  const handleOnClickCancel = () => {
    setIsUpdate(false)
  }

  /* Create */
  const createTodo = () => {
    const list = todolist //current state
    list.push(todo) // current state plus current todo on input

    setState({ todo: '', todolist: list })
  }

  /* Delete */
  const deleteTodo = (index) => {
    const list = todolist //current state
    list.splice(index, 1) // current state minus current todo index

    setState({ todo: '', todolist: list })
  }

  /* Update */
  const updateTodo = (index) => {
    const list = todolist //current state
    list[index] = editTodo // current updated value
    setState({ ...state, todolist: list })
    setIsUpdate(false)
    setEdit({ editTodo: '', editIndex: '' })
  }

  return (
    <div className="todolist-main">
      <div className="form-wrapper">
        <input
          type="text"
          name="todo"
          placeholder="Create todolist"
          value={todo}
          onChange={handleOnChange}
        />
        <button onClick={createTodo}>Add</button>
      </div>
      <div className="table-main">
        <div className="header-wrapper">
          <span>To Do</span>
          <span>Action</span>
        </div>
        {todolist.length ? (
          todolist.map((value, index) => (
            <TodoItem
              key={index}
              index={index}
              value={value}
              deleteTodo={deleteTodo}
              handleOnClickEdit={handleOnClickEdit}
            />
          ))
        ) : (
          <span>No records found</span>
        )}

        {isUpdate ? (
          <div className="form-wrapper2">
            <span>Index {editIndex}</span>
            <input
              type="text"
              name="editTodo"
              placeholder="Update todo"
              value={editTodo}
              onChange={handleOnChangeEdit}
            />
            <button onClick={() => updateTodo(editIndex)}>Update</button>
            <button onClick={handleOnClickCancel}>Cancel</button>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default Todolist
