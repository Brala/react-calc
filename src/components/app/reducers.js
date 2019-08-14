import { combineReducers } from 'redux'
import buttonsReducer from '../button/reducers/duck'

const rootReducer = combineReducers({
    buttons: buttonsReducer
})

export default rootReducer