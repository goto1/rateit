import React from "react";
import RatingStars from "../RatingStars";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

const getShallowRatingStars = props => shallow(<RatingStars {...props} />);

describe("RatingStars component", () => {
  it("should render correctly", () => {
    const tree = renderer.create(<RatingStars rating={4} />);
    expect(tree).toMatchSnapshot();
  });

  it("should render the correct amount of stars", () => {
    const wrapper = getShallowRatingStars({ rating: 4 });
    const actual = wrapper.children().length;
    const expected = 5;
    expect(actual).toBe(expected);
  });

  it("should render the correct amount of empty stars", () => {
    const wrapper = getShallowRatingStars({ rating: 2.5 });
    const actual = wrapper
      .children()
      .filterWhere(star => star.render().text() === "star_border").length;
    const expected = 2;
    expect(actual).toBe(expected);
  });

  it("should render the correct amount of half stars", () => {
    const wrapper = getShallowRatingStars({ rating: 3.5 });
    const actual = wrapper
      .children()
      .filterWhere(star => star.render().text() === "star_half").length;
    const expected = 1;
    expect(actual).toBe(expected);
  });

  it("should render the correct amount of full stars", () => {
    const wrapper = getShallowRatingStars({ rating: 3.5 });
    const actual = wrapper
      .children()
      .filterWhere(star => star.render().text() === "star").length;
    const expected = 3;
    expect(actual).toBe(expected);
  });
});
