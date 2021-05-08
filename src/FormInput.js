import React from 'react'

export const FormInput = ({ChangeValue,AddTodo}) => { 

    return (
        <div className="card-1">
            <form> 
            <div className="form-control">
              <input type="text" onChange={ChangeValue}   />
              <button onClick={AddTodo}>Add To do</button>
            </div>
          </form>
        </div>
    )
}
