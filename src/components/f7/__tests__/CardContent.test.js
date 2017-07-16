import React from "react";
import CardContent from "../CardContent";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

describe("CardContent component", () => {
  it("should render correctly", () => {
    const tree = renderer
      .create(<CardContent>HelloWorld!</CardContent>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render a span", () => {
    const wrapper = shallow(
      <CardContent>
        <span>HelloWorld!</span>
      </CardContent>
    );
    const actual = wrapper.find("span").at(0).html();
    const expected = "<span>HelloWorld!</span>";
    expect(actual).toBe(expected);
  });

  it("should render with a specified className", () => {
    const wrapper = shallow(
      <CardContent className="custom">HelloWorld!</CardContent>
    );
    const actual = wrapper.props().className;
    const expected = "card-content custom";
    expect(actual).toBe(expected);
  });
});
