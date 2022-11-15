import axios from "axios"
export const ADD_TODO_SUCCESS="ADD_TODO_SUCCESS"
export const ADD_TODO_FAILURE="ADD_TODO_FAILURE"
export const ADD_TODO_STARTED="ADD_TODO_STARTED"
export const DELETE_TODO="DELETE_TODO"
export const ADD_DATA="ADD_DATA"

export const addTodoSuccess=(data)=>{
    return{
        type:ADD_TODO_SUCCESS,
        payload:[...data]
    }
}
export const addTodoFailure=(data)=>{
    return{
        type:ADD_TODO_FAILURE,
        payload:data
    }
}
export const addTodoStarted=()=>{
    return{
        type:ADD_TODO_STARTED,
        payload:[]
    }
}
export const DeleteTodo=(data)=>{
    return{
        type:DELETE_TODO,
        payload:data
    }
}

export const loadKar=()=>{
    return (dispatch)=>{
        dispatch(addTodoStarted())
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res=>{
            dispatch(addTodoSuccess(res.data))
        })
        .catch(error=>dispatch(addTodoFailure(error)))
    }
}
export const addkar=(state,data)=>{
    return (dispatch)=>{
        dispatch(addTodoStarted())
        axios.post('https://jsonplaceholder.typicode.com/todos',{
            method: 'POST',
            body: JSON.stringify({
              title: data,
              userID:3,
              completed:false
            })})
        .then(res=>{
            console.log("ADD",res)
            dispatch({type:ADD_DATA,payload:[{...JSON.parse(res.data.body)},...state]})
        })
    }
}
