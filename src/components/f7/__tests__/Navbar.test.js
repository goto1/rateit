import React from "react";
import Navbar, { NavLeft, NavCenter, NavRight } from "../Navbar";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

describe("Navbar component", () => {
  it("should render correctly", () => {
    const tree = renderer.create(
      <Navbar>
        <NavLeft backLink="Back" />
        <NavCenter>Home</NavCenter>
        <NavRight>See More</NavRight>
      </Navbar>
    );
    expect(tree).toMatchSnapshot();
  });

  it("should render NavLeft component", () => {
    const wrapper = shallow(
      <Navbar>
        <NavLeft backLink="Back" />
      </Navbar>
    );
    const actual = wrapper.find(NavLeft).length;
    const expected = 1;
    expect(actual).toBe(expected);
  });

  it("should render NavCenter component", () => {
    const wrapper = shallow(
      <Navbar>
        <NavCenter>Home</NavCenter>
      </Navbar>
    );
    const actual = wrapper.find(NavCenter).length;
    const expected = 1;
    expect(actual).toBe(expected);
  });

  it("should render NavRight component", () => {
    const wrapper = shallow(
      <Navbar>
        <NavRight>See more</NavRight>
      </Navbar>
    );
    const actual = wrapper.find(NavRight).length;
    const expected = 1;
    expect(actual).toBe(expected);
  });

  describe("NavLeft", () => {
    it("should render as a sliding element", () => {
      const wrapper = shallow(<NavLeft backLink="Back" sliding={true} />);
      const actual = wrapper.props().className.includes("sliding");
      const expected = true;
      expect(actual).toBe(expected);
    });

    it("should render the back link text", () => {
      const wrapper = shallow(<NavLeft backLink="Back" />);
      const actual = wrapper.find("span").at(0).html().includes("Back");
      const expected = true;
      expect(actual).toBe(expected);
    });
  });

  describe("NavCenter", () => {
    it("should render with a custom styling class", () => {
      const wrapper = shallow(<NavCenter className="custom">Home</NavCenter>);
      const actual = wrapper.props().className.includes("custom");
      const expected = true;
      expect(actual).toBe(expected);
    });
  });

  describe("NavRight", () => {
    it("should render a span element", () => {
      const wrapper = shallow(
        <NavRight>
          <span>Hello</span>
        </NavRight>
      );
      const actual = wrapper.find("span").length;
      const expected = 1;
      expect(actual).toBe(expected);
    });
  });
});
