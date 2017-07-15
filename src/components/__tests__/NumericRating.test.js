import React from "react";
import NumericRating, { Rating } from "../NumericRating";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

const getShallowNumericRating = props => shallow(<NumericRating {...props} />);

describe("NumericRating component", () => {
  it("should render correctly", () => {
    const tree = renderer.create(<NumericRating rating={4.5} />).toJSON();
    expect(tree).toMatchStyledComponentsSnapshot();
  });

  it("should render the correct rating", () => {
    const wrapper = getShallowNumericRating({ rating: 4.5 });
    const actual = wrapper.find(Rating).children().at(0).text();
    const expected = "4.5";
    expect(actual).toBe(expected);
  });

  it("should render the rating number in green", () => {
    const wrapper = getShallowNumericRating({ rating: 4 });
    const actual = wrapper.find(Rating).at(0).props().color;
    const expected = "#A1BA37";
    expect(actual).toBe(expected);
  });

  it("should render the rating number in yellow", () => {
    const wrapper = getShallowNumericRating({ rating: 3 });
    const actual = wrapper.find(Rating).at(0).props().color;
    const expected = "#DEB21C";
    expect(actual).toBe(expected);
  });

  it("should render the rating number in red", () => {
    const wrapper = getShallowNumericRating({ rating: 1.5 });
    const actual = wrapper.find(Rating).at(0).props().color;
    const expected = "#D91948";
    expect(actual).toBe(expected);
  });
});
