import React from "react";
import Tabs from "../Tabs";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

describe("Tabs component", () => {
  it("should render correctly", () => {
    const tree = renderer
      .create(
        <Tabs>
          <span>HelloWorld!</span>
        </Tabs>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render with a custom styling class", () => {
    const wrapper = shallow(<Tabs className="custom">HelloWorld!</Tabs>);
    const actual = wrapper.props().className.includes("custom");
    const expected = true;
    expect(actual).toBe(expected);
  });
});
