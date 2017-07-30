import React from "react";
import InputElement, { StyledIcon } from "../InputElement";
import { shallow } from "enzyme";

describe("InputElement component", () => {
  const getInputElement = newProps => {
    const defaultProps = {
      icon: "account_circle",
      name: "username",
      onChange: jest.fn(),
      placeholder: "John Doe",
      type: "text",
      valid: true
    };
    const props = { ...defaultProps, ...newProps };
    return shallow(<InputElement {...props} />);
  };

  it("should render an input element with the type of `text`", () => {
    const wrapper = getInputElement();
    const actual = wrapper.find("input").props().type;
    const expected = "text";
    expect(actual).toBe(expected);
  });

  it("should render a `warning` icon when the input fields is invalid", () => {
    const wrapper = getInputElement({ valid: false });
    const actual = wrapper.find(StyledIcon).props().material;
    const expected = "warning";
    expect(actual).toBe(expected);
  });

  it("should call the passed in function when input changes", () => {
    const wrapper = getInputElement();
    wrapper.find("input").simulate("change");
    const actual = wrapper.find("input").props().onChange.mock.calls.length;
    const expected = 1;
    expect(actual).toBe(expected);
  });
});
