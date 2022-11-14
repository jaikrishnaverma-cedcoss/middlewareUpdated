import { createStore } from 'redux'

import userReducer from './users/redux/userReducer'

const store = createStore(userReducer)

export default store
