import React from 'react'

const Todolist = () => {
    return (
        <div className="todolist-main">
            <div className="form-wrapper">
                <input type="text" placeholder="Create todolist" />
                <button>Add</button>
            </div>
            <div className="table-main">
                <div className="row-wrapper">
                    <span>Do my homework</span>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Todolist