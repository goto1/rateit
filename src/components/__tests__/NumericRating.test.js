import React from "react";
import NumericRating from "../NumericRating";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import "jest-enzyme";
import "jest-styled-components";

describe("NumericRating component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<NumericRating rating={4.5} />).toJSON();
    expect(tree).toMatchStyledComponentsSnapshot();
  });
});
