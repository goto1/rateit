import React from "react";
import InputElement from "../InputElement";
import Icon from "../Icon";
import { shallow } from "enzyme";

describe("InputElement component", () => {
  const createInputElement = newProps => {
    const props = {
      icon: "account_circle",
      id: "username",
      name: "username",
      onBlur: jest.fn(),
      onChange: jest.fn(),
      placeholder: "John Doe",
      type: "text",
      valid: true,
      value: "Fred",
      ...newProps
    };
    return <InputElement {...props} />;
  };

  it("should render an `account_circle` icon", () => {
    const InputElement = createInputElement();
    const wrapper = shallow(InputElement);
    const actual = wrapper
      .render()
      .find(".icon")
      .html()
      .includes("account_circle");
    const expected = true;
    expect(actual).toBe(expected);
  });

  it("should render an input element with the name attribute of `username`", () => {
    const InputElement = createInputElement();
    const wrapper = shallow(InputElement);
    const actual = wrapper.find("input").props().name;
    const expected = "username";
    expect(actual).toBe(expected);
  });

  it("should call `onChange` when input changes", () => {
    const InputElement = createInputElement();
    const element = shallow(InputElement).find("input");

    element.simulate("change");

    const actual = element.props().onChange.mock.calls.length;
    const expected = 1;
    expect(actual).toBe(expected);
  });

  it("should call `onBlur` when input is in focus", () => {
    const InputElement = createInputElement();
    const element = shallow(InputElement).find("input");

    element.simulate("focus");
    element.simulate("change");
    element.simulate("blur");

    const actual = element.props().onBlur.mock.calls.length;
    const expected = 1;
    expect(actual).toBe(expected);
  });
});
