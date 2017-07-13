import React from "react";
import Card from "../Card";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import "jest-enzyme";
import "jest-styled-components";

describe("Card component", () => {
  const Component1 = <div>Lorem ipsum dolor sit amet</div>;
  const Component2 = "Lorem ipsum dolor sit amet";

  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Card>
          {Component1}
          {Component2}
        </Card>
      )
      .toJSON();
    expect(tree).toMatchStyledComponentsSnapshot();
  });

  it("renders with default styling", () => {
    const tree = renderer
      .create(
        <Card>
          {Component1}
        </Card>
      )
      .toJSON();
    expect(tree).toHaveStyleRule("margin", "10px");
  });

  it("renders with custom margin style property", () => {
    const tree = renderer
      .create(
        <Card margin="5px 15px">
          {Component2}
        </Card>
      )
      .toJSON();
    expect(tree).toHaveStyleRule("margin", "5px 15px !important");
  });
});
