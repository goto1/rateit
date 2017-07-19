import React from "react";
import ContentBlockTitle from "../ContentBlockTitle";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

describe("ContentBlockTitle component", () => {
  it("should render correctly", () => {
    const tree = renderer
      .create(<ContentBlockTitle>HelloWorld!</ContentBlockTitle>)
      .toJSON();
    expect(tree).toMatchStyledComponentsSnapshot();
  });

  it("should render a span element", () => {
    const wrapper = shallow(
      <ContentBlockTitle>
        <span>HelloWorld!</span>
      </ContentBlockTitle>
    );
    const actual = wrapper.find("span").length;
    const expected = 1;
    expect(actual).toBe(expected);
  });

  it("should render with a custom styling class", () => {
    const wrapper = shallow(
      <ContentBlockTitle className="custom">HelloWorld!</ContentBlockTitle>
    );
    const actual = wrapper.props().className.includes("custom");
    const expected = true;
    expect(actual).toBe(expected);
  });
});
