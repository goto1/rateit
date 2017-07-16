import React from "react";
import AccordionToggle from "../AccordionToggle";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

describe("AccordionToggle component", () => {
  it("should render correctly", () => {
    const tree = renderer
      .create(
        <AccordionToggle>
          <span>HelloWorld!</span>
        </AccordionToggle>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render a span", () => {
    const wrapper = shallow(
      <AccordionToggle>
        <span>HelloWorld!</span>
      </AccordionToggle>
    );
    const actual = wrapper.find("span").at(0).html();
    const expected = "<span>HelloWorld!</span>";
    expect(actual).toBe(expected);
  });

  it("should render with a specified className", () => {
    const wrapper = shallow(
      <AccordionToggle className="custom">
        <span>HelloWorld!</span>
      </AccordionToggle>
    );
    const actual = wrapper.props().className;
    const expected = "accordion-item-toggle custom";
    expect(actual).toBe(expected);
  });
});
