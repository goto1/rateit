import React from "react";
import RadioInput from "../RadioInput";
import { shallow } from "enzyme";
import Icon from "../Icon";

describe("RadioInput component", () => {
  const getRadioInput = () => {
    const props = {
      icon: "done",
      name: "user_comment",
      onChange: jest.fn(),
      className: "custom"
    };
    return shallow(<RadioInput {...props} />);
  };

  it("should render an input element of type `checkbox`", () => {
    const wrapper = getRadioInput();
    const actual = wrapper.find("input").props().type;
    const expected = "checkbox";
    expect(actual).toBe(expected);
  });

  it("should render a `done` icon", () => {
    const wrapper = getRadioInput();
    const actual = wrapper.find(Icon).html().includes("done");
    const expected = true;
    expect(actual).toBe(expected);
  });

  it("should trigger the `onChange` function when checkbox changes", () => {
    const wrapper = getRadioInput();
    wrapper.find("input").simulate("change");
    const actual = wrapper.find("input").props().onChange.mock.calls.length;
    const expected = 1;
    expect(actual).toBe(expected);
  });

  it("should render with a custom styling class", () => {
    const wrapper = getRadioInput();
    const actual = wrapper.props().className.includes("custom");
    const expected = true;
    expect(actual).toBe(expected);
  });
});
