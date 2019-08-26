import types from './types'

const INITIAL_DISPLAY = {
    currentEquation: "0",
    currentResult: "0",
    operatorFlag: false,
    commaFlag: false
}

const displayReducer = (state = INITIAL_DISPLAY, action) => {
  switch (action.type) {
    case types.UPDATE_DISPLAY:
      return {
        ...state, 
        currentEquation: action.currentEquation, 
        currentResult: action.currentResult, 
        operatorFlag: action.operatorFlag, 
        commaFlag: action.commaFlag
        // buttons: [...state.buttons, 
        //   {
        //   id: 'this.nextUniqueId()', 
        //   htmlID: action.htmlID, 
        //   name: action.name, 
        //   className: action.className
        //   }]
      }
    default:
      return state
  }
}

  export default displayReducer