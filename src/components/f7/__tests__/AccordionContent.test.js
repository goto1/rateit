import React from "react";
import AccordionContent from "../AccordionContent";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

describe("AccordionContent component", () => {
  it("should render correctly", () => {
    const tree = renderer
      .create(
        <AccordionContent>
          <span>HelloWorld!</span>
        </AccordionContent>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render a span", () => {
    const wrapper = shallow(
      <AccordionContent>
        <span>HelloWorld!</span>
      </AccordionContent>
    );
    const actual = wrapper.find("span").at(0).html();
    const expected = "<span>HelloWorld!</span>";
    expect(actual).toBe(expected);
  });

  it("should render with a specified className", () => {
    const wrapper = shallow(
      <AccordionContent className="custom">HelloWorld!</AccordionContent>
    );
    const actual = wrapper.props().className;
    const expected = "accordion-item-content custom";
    expect(actual).toBe(expected);
  });
});
