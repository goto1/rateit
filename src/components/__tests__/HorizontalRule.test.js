import React from "react";
import HorizontalRule from "../HorizontalRule";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import "jest-enzyme";
import "jest-styled-components";

const props = {
  width: "90%",
  margin: "5px",
  colorOne: "#E5E5E5",
  colorTwo: "#0B7EFF"
};

const tree = renderer.create(<HorizontalRule {...props} />).toJSON();

describe("HorizontalRule component", () => {
  it("renders correctly", () => {
    expect(tree).toMatchStyledComponentsSnapshot();
  });

  it("renders with specified styling rules", () => {
    expect(tree).toHaveStyleRule("width", "90%");
    expect(tree).toHaveStyleRule("margin", "5px");
  });
});
