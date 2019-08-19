import types from './types'

const INITIAL_BUTTONS = {
    buttons: [
      {id: 'this.nextUniqueId()', htmlID: 'clear', name: 'C', className: ''},
      {id: 'this.nextUniqueId()', htmlID: 'change sign', name: '+/-', className: ''},
      {id: 'this.nextUniqueId()', htmlID: 'element', name: '%', className: ''},
      {id: 'this.nextUniqueId()', htmlID: 'divide', name: '÷', className: 'calculator--buttons--button__bold'},
      {id: 'this.nextUniqueId()', htmlID: 'one', name: '1', className: ''},
      {id: 'this.nextUniqueId()', htmlID: 'two', name: '2', className: ''},
      {id: 'this.nextUniqueId()', htmlID: 'three', name: '3', className: ''},
      {id: 'this.nextUniqueId()', htmlID: 'multiply', name: '×', className: 'calculator--buttons--button__bold'},
      {id: 'this.nextUniqueId()', htmlID: 'four', name: '4', className: ''},
      {id: 'this.nextUniqueId()', htmlID: 'five', name: '5', className: ''},
      {id: 'this.nextUniqueId()', htmlID: 'six', name: '6', className: ''},
      {id: 'this.nextUniqueId()', htmlID: 'subtract', name: '-', className: 'calculator--buttons--button__bold'},
      {id: 'this.nextUniqueId()', htmlID: 'seven', name: '7', className: ''},
      {id: 'this.nextUniqueId()', htmlID: 'eight', name: '8', className: ''},
      {id: 'this.nextUniqueId()', htmlID: 'nine', name: '9', className: ''},
      {id: 'this.nextUniqueId()', htmlID: 'add', name: '+', className: 'calculator--buttons--button__bold'},
      {id: 'this.nextUniqueId()', htmlID: 'zero', name: '0', className: ''},
      {id: 'this.nextUniqueId()', htmlID: 'comma', name: ',', className: ''},
      {id: 'this.nextUniqueId()', htmlID: 'delete', name: 'DEL', className: ''},
      {id: 'this.nextUniqueId()', htmlID: 'equal', name: '=', className: 'calculator--buttons--button__bold'}
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