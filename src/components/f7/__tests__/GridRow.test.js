import React from "react";
import GridRow, { GridCol } from "../GridRow";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

describe("GridRow component", () => {
  it("should render correctly", () => {
    const tree = renderer
      .create(
        <GridRow>
          <GridCol>HelloWorld</GridCol>
          <GridCol>HelloWorld</GridCol>
        </GridRow>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render with `no-gutter` styling class", () => {
    const wrapper = shallow(<GridRow noGutter={true}>HelloWorld</GridRow>);
    const actual = wrapper.props().className.includes("no-gutter");
    const expected = true;
    expect(actual).toBe(expected);
  });

  it("renders with a custom styling class", () => {
    const wrapper = shallow(<GridRow className="custom">HelloWorld</GridRow>);
    const actual = wrapper.props().className.includes("custom");
    const expected = true;
    expect(actual).toBe(expected);
  });

  describe("GridCol", () => {
    it("should render with an `auto` styling class when width not specified", () => {
      const wrapper = shallow(<GridCol>HelloWorld</GridCol>);
      const actual = wrapper.props().className.includes("col-auto");
      const expected = true;
      expect(actual).toBe(true);
    });

    it("should render with a specified width", () => {
      const wrapper = shallow(<GridCol width="50">HelloWorld</GridCol>);
      const actual = wrapper.props().className.includes("col-50");
      const expected = true;
      expect(actual).toBe(expected);
    });

    it("should render with a custom styling class", () => {
      const wrapper = shallow(<GridCol className="custom">HelloWorld</GridCol>);
      const actual = wrapper.props().className.includes("custom");
      const expected = true;
      expect(actual).toBe(expected);
    });
  });
});
