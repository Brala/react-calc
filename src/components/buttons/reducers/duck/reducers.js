import types from './types'

const INITIAL_BUTTONS = {
    buttons: [
      {htmlID: 'clear', name: 'C', className: 'calculator--buttons--button', hover: false},
      {htmlID: 'change sign', name: '+/-', className: 'calculator--buttons--button', hover: false},
      {htmlID: 'element', name: '%', className: 'calculator--buttons--button', hover: false},
      {htmlID: 'divide', name: '÷', className: 'calculator--buttons--button__bold', hover: false},
      {htmlID: 'one', name: '1', className: 'calculator--buttons--button', hover: false},
      {htmlID: 'two', name: '2', className: 'calculator--buttons--button', hover: false},
      {htmlID: 'three', name: '3', className: 'calculator--buttons--button', hover: false},
      {htmlID: 'multiply', name: '×', className: 'calculator--buttons--button__bold', hover: false},
      {htmlID: 'four', name: '4', className: 'calculator--buttons--button', hover: false},
      {htmlID: 'five', name: '5', className: 'calculator--buttons--button', hover: false},
      {htmlID: 'six', name: '6', className: 'calculator--buttons--button', hover: false},
      {htmlID: 'subtract', name: '-', className: 'calculator--buttons--button__bold', hover: false},
      {htmlID: 'seven', name: '7', className: 'calculator--buttons--button', hover: false},
      {htmlID: 'eight', name: '8', className: 'calculator--buttons--button', hover: false},
      {htmlID: 'nine', name: '9', className: 'calculator--buttons--button', hover: false},
      {htmlID: 'add', name: '+', className: 'calculator--buttons--button__bold', hover: false},
      {htmlID: 'zero', name: '0', className: 'calculator--buttons--button', hover: false},
      {htmlID: 'comma', name: ',', className: 'calculator--buttons--button', hover: false},
      {htmlID: 'delete', name: 'DEL', className: 'calculator--buttons--button', hover: false},
      {htmlID: 'equal', name: '=', className: 'calculator--buttons--button__bold', hover: false}
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
            className: action.className,
            hover: false
            }]
        }
      case types.TOGGLE_HOVER_BUTTON:
        state.buttons[action.index] = {
          ...state.buttons[action.index],
          hover: state.buttons[action.index].hover = !state.buttons[action.index].hover
        }
        return {
          ...state, 
          buttons: [
            ...state.buttons
          ]
        }
      case types.RESET_BUTTONS:
        return {
          ...state, buttons: [ ]
        }
      default:
        return state
    }
  }
  export default buttonsReducer