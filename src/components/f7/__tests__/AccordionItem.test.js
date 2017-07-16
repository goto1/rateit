import React from "react";
import AccordionItem from "../AccordionItem";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

describe("AccordionItem component", () => {
  it("should render correctly", () => {
    const tree = renderer
      .create(
        <AccordionItem>
          <span>HelloWorld!</span>
        </AccordionItem>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render a span", () => {
    const wrapper = shallow(
      <AccordionItem>
        <span>HelloWorld!</span>
      </AccordionItem>
    );
    const actual = wrapper.find("span").at(0).html();
    const expected = "<span>HelloWorld!</span>";
    expect(actual).toBe(expected);
  });

  it("should render with a specified className", () => {
    const wrapper = shallow(
      <AccordionItem className="custom">HelloWorld!</AccordionItem>
    );
    const actual = wrapper.props().className;
    const expected = "accordion-item custom";
    expect(actual).toBe(expected);
  });
});
