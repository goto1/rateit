import React from "react";
import InputElement, { StyledIcon } from "../InputElement";
import Icon from "../Icon";
import { shallow } from "enzyme";

describe("InputElement component", () => {
  const getInputElement = props => {
    const newProps = {
      icon: "account_circle",
      id: "username",
      name: "username",
      onBlur: jest.fn(),
      onChange: jest.fn(),
      placeholder: "John Doe",
      type: "text",
      valid: true,
      value: "Fred",
      ...props
    };
    return <InputElement {...newProps} />;
  };

  it("should render a `warning` Icon component when invalid", () => {
    const InputElement = getInputElement({ valid: false });
    const wrapper = shallow(InputElement);
    const actual = wrapper.find(StyledIcon).props().material;
    const expected = "warning";
    expect(actual).toBe(expected);
  });

  it("should render an `account_circle` Icon component", () => {
    const InputElement = getInputElement();
    const wrapper = shallow(InputElement);
    const actual = wrapper.find(Icon).props().material;
    const expected = "account_circle";
    expect(actual).toBe(expected);
  });

  it("should render an input element with attribute name of `username`", () => {
    const InputElement = getInputElement();
    const wrapper = shallow(InputElement);
    const actual = wrapper.find("input").props().name;
    const expected = "username";
    expect(actual).toBe(expected);
  });

  it("should call `onChange` when input changes", () => {
    const InputElement = getInputElement();
    const element = shallow(InputElement).find("input");
    element.simulate("change");
    const actual = element.props().onChange.mock.calls.length;
    const expected = 1;
    expect(actual).toBe(expected);
  });

  it("should call `onBlur` when input is in focus", () => {
    const InputElement = getInputElement();
    const element = shallow(InputElement).find("input");
    element.simulate("focus");
    element.simulate("change");
    element.simulate("blur");
    const actual = element.props().onBlur.mock.calls.length;
    const expected = 1;
    expect(actual).toBe(expected);
  });
});
