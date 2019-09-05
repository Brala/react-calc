import types from "./types";

const add = item => ({
  type: types.ADD_BUTTON,
  ...item
});

const hover = item => ({
  type: types.TOGGLE_HOVER_BUTTON,
  ...item
});

const reset = () => ({
  type: types.RESET_BUTTONS
});

export default {
  add,
  hover,
  reset
};
