import React from 'react'

export const FormInput = ({ChangeValue,AddTodo}) => { 

    return (
        <div className="card-1">
            <form> 
            <div className="form-control">
              <input className="todoInput" type="text" onChange={ChangeValue}   />
              <button onClick={AddTodo} className="addBtn">Add To do</button>
            </div>
          </form>
        </div>
    )
}
