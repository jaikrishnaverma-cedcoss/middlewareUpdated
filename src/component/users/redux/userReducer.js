import { Actions } from "./ActionsTypes"
const initialState = {
    data: []
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.ADD: {
            return {
                ...state, data: [...state.data, { ...action.payload }]
            }
        }
        case Actions.DELETE: {
            state.data.splice(action.payload, 1)
            return {
                ...state, data: [...state.data]
            }
        }
        case Actions.EDIT: {
            state.data[action.payload.index] = { ...action.payload.newdata }
            return {
                ...state, data: [...state.data]
            }
        }
        default: return state
    }
}
