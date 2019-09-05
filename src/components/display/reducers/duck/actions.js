import types from "./types";

const update = item => ({
  type: types.UPDATE_DISPLAY,
  ...item
});

const reset = () => ({
  type: types.RESET_BUTTONS
});

export default {
  update,
  reset
};
