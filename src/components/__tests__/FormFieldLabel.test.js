import React from "react";
import FormFieldLabel from "../FormFieldLabel";
import { shallow } from "enzyme";

describe("FormFieldLabel component", () => {
  const getFormFieldLabel = newProps => {
    const props = {
      description: "Account Information",
      error: "Incorrect email address",
      valid: true,
      ...newProps
    };
    return <FormFieldLabel {...props} />;
  };

  it("should render as a `content-block-title`", () => {
    const FormFieldLabel = getFormFieldLabel();
    const wrapper = shallow(FormFieldLabel);
    const actual = wrapper.render().find(".content-block-title").length;
    const expected = 1;
    expect(actual).toBe(expected);
  });

  it("should render two div elements as its children", () => {
    const FormFieldLabel = getFormFieldLabel();
    const wrapper = shallow(FormFieldLabel);
    const children = wrapper.children();
    const actual =
      children.at(0).type().target === "div" &&
      children.at(1).type().target === "div";
    const expected = true;
    expect(actual).toBe(expected);
  });
});
