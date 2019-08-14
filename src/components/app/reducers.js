import { combineReducers } from 'redux'
import buttonsReducer from '../buttons/reducers/duck'

const rootReducer = combineReducers({
    buttons: buttonsReducer
})

export default rootReducer