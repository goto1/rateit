import React from "react";
import Textarea from "../Textarea";
import Icon from "../Icon";
import { shallow, mount } from "enzyme";

describe("Textarea component", () => {
  const createTextarea = newProps => {
    const props = {
      icon: "info",
      name: "about",
      onBlur: jest.fn(),
      onChange: jest.fn(),
      placeholder: "Tell us about yourself...",
      valid: true,
      ...newProps
    };
    return <Textarea {...props} />;
  };

  it("should render a textarea element with the `name` attribute equal to `about`", () => {
    const Textarea = createTextarea();
    const wrapper = shallow(Textarea);
    const actual = wrapper.find("textarea").props().name;
    const expected = "about";
    expect(actual).toBe(expected);
  });

  it("should render the `value` prop when passed", () => {
    const expected = "Great stuff!";
    const Textarea = createTextarea({ value: expected });
    const wrapper = mount(Textarea);
    const actual = wrapper.find("textarea").props().value;
    expect(actual).toBe(expected);
  });

  it("should update the `value` attribute of textarea when it is changed", () => {
    const Textarea = createTextarea();
    const element = shallow(Textarea).find("textarea");
    element.simulate("change");
    const actual = element.props().onChange.mock.calls.length;
    const expected = 1;
    expect(actual).toBe(expected);
  });

  it("should call the `onChange` function when textarea changes", () => {
    const Textarea = createTextarea();
    const element = shallow(Textarea).find("textarea");
    element.simulate("change");
    const actual = element.props().onChange.mock.calls.length;
    const expected = 1;
    expect(actual).toBe(expected);
  });

  it("should call the `onBlur` function when textarea is in focus", () => {
    const Textarea = createTextarea();
    const element = shallow(Textarea).find("textarea");
    element.simulate("focus");
    element.simulate("change");
    element.simulate("blur");
    const actual = element.props().onBlur.mock.calls.length;
    const expected = 1;
    expect(actual).toBe(expected);
  });
});
