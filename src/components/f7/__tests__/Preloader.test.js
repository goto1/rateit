import React from "react";
import Preloader from "../Preloader";
import { shallow } from "enzyme";

describe("Preloader component", () => {
  function getPreloader(props) {
    const newProps = {
      size: "small",
      ...props
    };
    return <Preloader {...newProps} />;
  }

  it("should render as a `small` preloader", () => {
    const Preloader = getPreloader();
    const wrapper = shallow(Preloader);
    const actual = wrapper.props().size;
    const expected = "small";
    expect(actual).toBe(expected);
  });

  it("should render as a `big` preloader", () => {
    const Preloader = getPreloader({ size: "big" });
    const wrapper = shallow(Preloader);
    const actual = wrapper.props().size;
    const expected = "big";
    expect(actual).toBe(expected);
  });

  it("should render with a `custom` styling class", () => {
    const Preloader = getPreloader({ className: "custom" });
    const wrapper = shallow(Preloader);
    const actual = wrapper.props().className.includes("custom");
    const expected = true;
    expect(actual).toBe(expected);
  });
});
