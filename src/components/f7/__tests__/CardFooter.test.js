import React from "react";
import CardFooter from "../CardFooter";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

describe("CardFooter component", () => {
  it("should render correctly", () => {
    const tree = renderer.create(<CardFooter>HelloWorld!</CardFooter>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render a span", () => {
    const wrapper = shallow(
      <CardFooter>
        <span>HelloWorld!</span>
      </CardFooter>
    );
    const actual = wrapper.find("span").at(0).html();
    const expected = "<span>HelloWorld!</span>";
    expect(actual).toBe(expected);
  });

  it("should render with a specified className", () => {
    const wrapper = shallow(
      <CardFooter className="custom">HelloWorld!</CardFooter>
    );
    const actual = wrapper.props().className;
    const expected = "card-footer custom";
    expect(actual).toBe(expected);
  });
});
