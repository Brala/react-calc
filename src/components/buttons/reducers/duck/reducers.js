import types from './types'

const INITIAL_BUTTONS = {
    buttons: [
      {htmlID: 'clear', name: 'C', className: ''},
      {htmlID: 'change sign', name: '+/-', className: ''},
      {htmlID: 'element', name: '%', className: ''},
      {htmlID: 'divide', name: '÷', className: 'calculator--buttons--button__bold'},
      {htmlID: 'one', name: '1', className: ''},
      {htmlID: 'two', name: '2', className: ''},
      {htmlID: 'three', name: '3', className: ''},
      {htmlID: 'multiply', name: '×', className: 'calculator--buttons--button__bold'},
      {htmlID: 'four', name: '4', className: ''},
      {htmlID: 'five', name: '5', className: ''},
      {htmlID: 'six', name: '6', className: ''},
      {htmlID: 'subtract', name: '-', className: 'calculator--buttons--button__bold'},
      {htmlID: 'seven', name: '7', className: ''},
      {htmlID: 'eight', name: '8', className: ''},
      {htmlID: 'nine', name: '9', className: ''},
      {htmlID: 'add', name: '+', className: 'calculator--buttons--button__bold'},
      {htmlID: 'zero', name: '0', className: ''},
      {htmlID: 'comma', name: ',', className: ''},
      {htmlID: 'delete', name: 'DEL', className: ''},
      {htmlID: 'equal', name: '=', className: 'calculator--buttons--button__bold'}
    ]
  }
  
const buttonsReducer = (state = INITIAL_BUTTONS, action) => {
    switch (action.type) {
      case types.ADD_BUTTON:
        return {
          ...state, buttons: [...state.buttons, 
            {
            id: 'this.nextUniqueId()', 
            htmlID: action.htmlID, 
            name: action.name, 
            className: action.className
            }]
        }
      case types.RESET_BUTTONS:
        return {
          ...state, buttons: []
        }
      default:
        return state
    }
  }

  export default buttonsReducer