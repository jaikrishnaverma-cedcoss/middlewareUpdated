import * as actions from './Actions'
const initialState = {
    loading: true,
    data: [],
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD_TODO_FAILURE: return {
            ...state, loading: false,
            error: action.payload
        }
        case actions.ADD_TODO_STARTED: return {
            ...state, loading: true,
            data: [],
            error: ''
        }
        case actions.ADD_TODO_SUCCESS: return {
            ...state, loading: false,
            data: [...action.payload],
            error: ''
        }
        case actions.DELETE_TODO: {
            state.data.splice(action.payload, 1)
            return {
                ...state, loading: false,
                error: ''
            }
        }
        case actions.ADD_DATA: {
            return {
                ...state, loading: false,
                data: [...action.payload],
                error: ''
            }
        }
        default: return state
    }
}