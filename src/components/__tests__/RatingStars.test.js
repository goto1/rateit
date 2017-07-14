import React from "react";
import RatingStars from "../RatingStars";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import "jest-enzyme";

describe("RatingStars component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<RatingStars rating={4} />);
    expect(tree).toMatchSnapshot();
  });
});
