import React from "react";
import NumericRating, { Rating } from "../NumericRating";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

const getWrapper = rating => shallow(<NumericRating rating={rating} />);

describe("NumericRating component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<NumericRating rating={4.5} />).toJSON();
    expect(tree).toMatchStyledComponentsSnapshot();
  });

  it("renders the rating number in a green color", () => {
    const wrapper = getWrapper(4);
    const ratingColor = wrapper.find(Rating).at(0).props().color;

    expect(ratingColor).toBe("#A1BA37");
  });

  it("renders the rating number in a yellow color", () => {
    const wrapper = getWrapper(3);
    const ratingColor = wrapper.find(Rating).at(0).props().color;

    expect(ratingColor).toBe("#DEB21C");
  });

  it("renders the rating number in a red color", () => {
    const wrapper = getWrapper(1);
    const ratingColor = wrapper.find(Rating).at(0).props().color;

    expect(ratingColor).toBe("#D91948");
  });
});
