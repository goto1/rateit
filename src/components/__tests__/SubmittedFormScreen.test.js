import React from "react";
import SubmittedFormScreen from "../SubmittedFormScreen";
import { shallow } from "enzyme";

describe("SubmittedFormScreen component", () => {
  const createSubmittedFormScreen = newProps => {
    const props = {
      buttonName: "Back",
      onClick: jest.fn(),
      children: "Successful submission",
      ...newProps
    };
    return <SubmittedFormScreen {...props} />;
  };

  it("should render as a `content-block` element", () => {
    const SubmittedFormScreen = createSubmittedFormScreen();
    const wrapper = shallow(SubmittedFormScreen);
    const actual = wrapper.render().find(".content-block").length;
    const expected = 1;
    expect(actual).toBe(expected);
  });

  it("should render a message saying `Successful submission`", () => {
    const SubmittedFormScreen = createSubmittedFormScreen();
    const wrapper = shallow(SubmittedFormScreen);
    const actual = wrapper
      .render()
      .find("div")
      .first()
      .html()
      .includes("Successful submission");
    const expected = true;
    expect(actual).toBe(expected);
  });

  it("should render a `button` element with a name of `Back`", () => {
    const SubmittedFormScreen = createSubmittedFormScreen();
    const wrapper = shallow(SubmittedFormScreen);
    const actual = wrapper.render().find("button").html();
    const expected = "Back";
    expect(actual).toBe(expected);
  });
});
