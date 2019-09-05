import React from "react";
import { Provider } from "react-redux";
import store from "../../store";
import { shallow, mount } from "enzyme";
// import sinon from "sinon";
import App from "./App";
import { expect } from "chai";
import checkPropTypes from "check-prop-types";

const setUp = () => {
  const component = mount(
    <Provider store={store}>
      <App />
    </Provider>
  );
  return component;
};
const findByTestAttr = (component, attribute) => {
  const testAttribute = component.find(`[data-test='${attribute}']`);
  return testAttribute;
};

describe("<App />", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  describe("Checking PropTypes", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        handleClick: () => {
          "Test function";
        },
        checkProps: [
          {
            slideDown: { Test: "object" },
            dispatch: () => {
              "Test function";
            },
            currentEquation: "Test string",
            currentResult: "Test string",
            operatorFlag: true,
            commaFlag: true
          }
        ]
      };
      const propsErr = checkPropTypes(
        App.propTypes,
        expectedProps,
        "props",
        App.name
      );
      expect(propsErr).to.be.undefined;
    });
  });

  it("renders both displays", () => {
    // console.log(component.debug())
    const wrapper = findByTestAttr(component, "display");
    expect(wrapper.length).to.equal(2);
  });
  it("renders buttons", () => {
    expect(findByTestAttr(component, "calculator--buttons")).to.have.lengthOf(
      1
    );
  });
});
