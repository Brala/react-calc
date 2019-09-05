import { types } from "./types.js";
import buttonsReducer from "./reducers.js";

describe("Buttons reducer", () => {
  it("Should return default state", () => {
    const newState = buttonsReducer(undefined, {});
    expect(typeof newState).toBe("object");
  });
});
