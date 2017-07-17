import React from "react";
import Accordion, {
  AccordionItem,
  AccordionToggle,
  AccordionContent
} from "../Accordion";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

describe("Accordion component", () => {
  it("should render correctly", () => {
    const tree = renderer
      .create(
        <Accordion>
          <AccordionItem>HelloWorld</AccordionItem>
          <AccordionToggle>HelloWorld</AccordionToggle>
          <AccordionContent>HelloWorld</AccordionContent>
        </Accordion>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render AccordionContent component", () => {
    const wrapper = shallow(
      <Accordion>
        <AccordionContent>HelloWorld</AccordionContent>
      </Accordion>
    );
    const actual = wrapper.find(AccordionContent).length;
    const expected = 1;
    expect(actual).toBe(expected);
  });

  it("should render with a custom styling class", () => {
    const wrapper = shallow(
      <Accordion className="custom">
        <span>HelloWorld</span>
      </Accordion>
    );
    const actual = wrapper.props().className.includes("custom");
    const expected = true;
    expect(actual).toBe(expected);
  });

  describe("AccordionItem", () => {
    it("should render a span element", () => {
      const wrapper = shallow(
        <AccordionItem>
          <span>HelloWorld</span>
        </AccordionItem>
      );
      const actual = wrapper.find("span").length;
      const expected = 1;
      expect(actual).toBe(expected);
    });
  });

  describe("AccordionToggle", () => {
    it("should render a span element", () => {
      const wrapper = shallow(
        <AccordionToggle>
          <span>HelloWorld</span>
        </AccordionToggle>
      );
      const actual = wrapper.find("span").length;
      const expected = 1;
      expect(actual).toBe(expected);
    });
  });

  describe("AccordionContent", () => {
    it("should render a span element", () => {
      const wrapper = shallow(
        <AccordionContent>
          <span>HelloWorld</span>
        </AccordionContent>
      );
      const actual = wrapper.find("span").length;
      const expected = 1;
      expect(actual).toBe(expected);
    });
  });
});
