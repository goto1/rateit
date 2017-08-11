import React from "react";
import RadioInput, { LabelTitleWrapper } from "../RadioInput";
import { shallow } from "enzyme";
import Icon from "../Icon";

describe("RadioInput component", () => {
  const getRadioInput = props => {
    const newProps = {
      icon: "done",
      name: "recommend",
      onChange: jest.fn(),
      onBlur: jest.fn(),
      className: "custom",
      ...props
    };
    return <RadioInput {...newProps} />;
  };

  it("should render with a `custom` styling class", () => {
    const RadioInput = getRadioInput();
    const wrapper = shallow(RadioInput);
    const actual = wrapper
      .find("div")
      .at(0)
      .props()
      .className.includes("custom");
    const expected = true;
    expect(actual).toBe(expected);
  });

  it("should render a `done` Icon component", () => {
    const RadioInput = getRadioInput();
    const wrapper = shallow(RadioInput);
    const actual = wrapper.find(Icon).props().material;
    const expected = "done";
    expect(actual).toBe(expected);
  });

  it("should render a title of `recommend` inside the LabelTitleWrapper", () => {
    const RadioInput = getRadioInput();
    const wrapper = shallow(RadioInput);
    const actual = wrapper.find(LabelTitleWrapper).props().children;
    const expected = "Recommend";
    expect(actual).toBe(expected);
  });

  it("should render an input element with the `name` attribute of `recommend`", () => {
    const RadioInput = getRadioInput();
    const wrapper = shallow(RadioInput);
    const actual = wrapper.find("input").props().name;
    const expected = "recommend";
    expect(actual).toBe(expected);
  });

  it("should call `onChange` when input changes", () => {
    const RadioInput = getRadioInput();
    const element = shallow(RadioInput).find("input");
    element.simulate("change");
    const actual = element.props().onChange.mock.calls.length;
    const expected = 1;
    expect(actual).toBe(expected);
  });

  it("should call `onBlur` when input is in focus", () => {
    const RadioInput = getRadioInput();
    const element = shallow(RadioInput).find("input");
    element.simulate("focus");
    element.simulate("change");
    element.simulate("blur");
    const actual = element.props().onBlur.mock.calls.length;
    const expected = 1;
    expect(actual).toBe(expected);
  });
});
