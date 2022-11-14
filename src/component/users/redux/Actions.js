import { Actions } from "./ActionTypes"
// Step 3

export const addTodoSuccess = (data) => {
    return {
        type: Actions.ADD_TODO_SUCCESS,
        payload: data
    }
}
export const TodoFailure = (data) => {
    return {
        type: Actions.ADD_TODO_FAILURE,
        payload: data
    }
}
export const TodoStart = (data) => {
    return {
        type: Actions.ADD_TODO_STARTED,
        payload: data
    }
}
export const TodoDelete = (data) => {
    return {
        type: Actions.DELETE_TODO,
        payload: data
    }
}