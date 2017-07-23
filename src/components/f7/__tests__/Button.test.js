import React from "react";
import Button from "../Button";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

describe("Button component", () => {
  const getButton = props => shallow(<Button {...props} />);

  it("should render as a `big` button", () => {
    const wrapper = getButton({ big: true, children: "HelloWorld" });
    const actual = wrapper.props().className.includes("button-big");
    const expected = true;
    expect(actual).toBe(expected);
  });

  it("should render as a `filled` button", () => {
    const wrapper = getButton({ fill: true, children: "HelloWorld" });
    const actual = wrapper.props().background.includes("#057AFF");
    const expected = true;
    expect(actual).toBe(expected);
  });

  it("should render as a red button", () => {
    const wrapper = getButton({ color: "red", children: "HelloWorld" });
    const actual = wrapper.props().border.includes("#C9302C");
    const expected = true;
    expect(actual).toBe(expected);
  });

  it("should render a span as its child", () => {
    const wrapper = getButton({ children: <span>HelloWorld</span> });
    const actual = wrapper.children().at(0).is("span");
    const expected = true;
    expect(actual).toBe(expected);
  });

  it("should render with a custom styling class", () => {
    const wrapper = getButton({ className: "custom", children: "HelloWorld" });
    const actual = wrapper.props().className.includes("custom");
    const expected = true;
    expect(actual).toBe(expected);
  });

  it("should render with an attribute `type` of `button`", () => {
    const wrapper = getButton({ children: "HelloWorld" });
    const actual = wrapper.props().type.includes("button");
    const expected = true;
    expect(actual).toBe(expected);
  });

  it("should render with an attribute `type` of `submit`", () => {
    const wrapper = getButton({ type: "submit", children: "HelloWorld" });
    const actual = wrapper.props().type.includes("submit");
    const expected = true;
    expect(actual).toBe(expected);
  });
});
