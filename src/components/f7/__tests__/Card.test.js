import React from "react";
import Card, { CardContent, CardFooter, CardHeader } from "../Card";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

describe("Card component", () => {
  it("should render correctly", () => {
    const tree = renderer
      .create(
        <Card>
          <CardHeader>HelloWorld</CardHeader>
          <CardContent>HelloWorld</CardContent>
          <CardFooter>HelloWorld</CardFooter>
        </Card>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render CardHeader component", () => {
    const wrapper = shallow(
      <Card>
        <CardHeader>HelloWorld</CardHeader>
      </Card>
    );
    const actual = wrapper.find(CardHeader).length;
    const expected = 1;
    expect(actual).toBe(expected);
  });

  it("should render with a custom styling class", () => {
    const wrapper = shallow(
      <Card className="custom">
        <span>HelloWorld</span>
      </Card>
    );
    const actual = wrapper.props().className.includes("custom");
    const expected = true;
    expect(actual).toBe(expected);
  });

  describe("CardContent", () => {
    it("should render a span element", () => {
      const wrapper = shallow(
        <CardContent>
          <span>HelloWorld</span>
        </CardContent>
      );
      const actual = wrapper.find("span").length;
      const expected = 1;
      expect(actual).toBe(expected);
    });
  });

  describe("CardHeader", () => {
    it("should render a span element", () => {
      const wrapper = shallow(
        <CardHeader>
          <span>HelloWorld</span>
        </CardHeader>
      );
      const actual = wrapper.find("span").length;
      const expected = 1;
      expect(actual).toBe(expected);
    });
  });

  describe("CardFooter", () => {
    it("should render a span element", () => {
      const wrapper = shallow(
        <CardFooter>
          <span>HelloWorld</span>
        </CardFooter>
      );
      const actual = wrapper.find("span").length;
      const expected = 1;
      expect(actual).toBe(expected);
    });
  });
});
