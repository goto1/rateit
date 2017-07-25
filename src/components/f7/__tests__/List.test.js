import React from "react";
import List from "../List";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

describe("List component", () => {
  it("should render correctly", () => {
    const tree = renderer
      .create(
        <List>
          <span>HelloWorld!</span>
        </List>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render a span element", () => {
    const wrapper = shallow(
      <List>
        <span>HelloWorld!</span>
      </List>
    );
    const actual = wrapper.find("span").length;
    const expected = 1;
    expect(actual).toBe(expected);
  });

  it("should render with a custom styling class", () => {
    const wrapper = shallow(<List className="custom">HelloWorld!</List>);
    const actual = wrapper.props().className.includes("custom");
    const expected = true;
    expect(actual).toBe(expected);
  });

  it("should render with an inset styling class", () => {
    const wrapper = shallow(<List inset={true}>HelloWorld!</List>);
    const actual = wrapper.props().className.includes("inset");
    const expected = true;
    expect(actual).toBe(expected);
  });

  it("should render with an `id` attribute set to `search-results`", () => {
    const wrapper = shallow(<List id="search-results">HelloWorld!</List>);
    const actual = wrapper.props().id.includes("search-results");
    const expected = true;
    expect(actual).toBe(expected);
  });
});
