import React from "react";
import PreloaderScreen from "../PreloaderScreen";
import { shallow } from "enzyme";

describe("PreloaderScreen component", () => {
  const createPreloaderScreen = newProps => {
    const props = {
      ...newProps
    };
    return <PreloaderScreen {...props} />;
  };

  it("should render as a div element", () => {
    const PreloaderScreen = createPreloaderScreen();
    const wrapper = shallow(PreloaderScreen);
    const actual = wrapper.type().target;
    const expected = "div";
    expect(actual).toBe(expected);
  });

  it("should render a `preloader` icon", () => {
    const PreloaderScreen = createPreloaderScreen();
    const wrapper = shallow(PreloaderScreen);
    const actual = wrapper.find(".preloader").exists();
    const expected = true;
    expect(actual).toBe(expected);
  });

  it("should render with a `small` preloader icon", () => {
    const PreloaderScreen = createPreloaderScreen();
    const wrapper = shallow(PreloaderScreen);
    const actual = wrapper.find(".preloader").props().size;
    const expected = "small";
    expect(actual).toBe(expected);
  });

  it("should render with a `big` preloader icon", () => {
    const PreloaderScreen = createPreloaderScreen({ size: "big" });
    const wrapper = shallow(PreloaderScreen);
    const actual = wrapper.find(".preloader").props().size;
    const expected = "big";
    expect(actual).toBe(expected);
  });

  it("should render with a `custom` styling class", () => {
    const PreloaderScreen = createPreloaderScreen({ className: "custom" });
    const wrapper = shallow(PreloaderScreen);
    const actual = wrapper.props().className.includes("custom");
    const expected = true;
    expect(actual).toBe(expected);
  });
});
