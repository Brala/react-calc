import { combineReducers } from 'redux'
import buttonsReducer from '../buttons/reducers/duck'
import displayReducer from '../display/reducers/duck'

const rootReducer = combineReducers({
    buttons: buttonsReducer,
    display: displayReducer,
})

export default rootReducer