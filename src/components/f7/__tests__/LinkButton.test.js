import React from "react";
import LinkButton from "../LinkButton";
import { shallow } from "enzyme";

describe("LinkButtonComponent", () => {
  const getButton = props => {
    const newProps = { href: "/", children: "Home", ...props };
    return shallow(<LinkButton {...newProps} />);
  };

  it("should render with an `href` attribute set to `/home`", () => {
    const wrapper = getButton({ href: "/home" });
    const actual = wrapper.props().href.includes("/home");
    const expected = true;
    expect(actual).toBe(expected);
  });

  it("should render as a `big` button", () => {
    const wrapper = getButton({ big: true });
    const actual = wrapper.props().className.includes("button-big");
    const expected = true;
    expect(actual).toBe(expected);
  });

  it("should render with a custom styling class", () => {
    const wrapper = getButton({ className: "custom" });
    const actual = wrapper.props().className.includes("custom");
    const expected = true;
    expect(actual).toBe(expected);
  });

  it("should render the string `Home` as its child", () => {
    const wrapper = getButton();
    const actual = wrapper.html().includes("Home");
    const expected = true;
    expect(actual).toBe(expected);
  });
});
