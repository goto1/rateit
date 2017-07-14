import React from "react";
import RatingStars from "../RatingStars";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

const getWrapper = rating => shallow(<RatingStars rating={rating} />);

describe("RatingStars component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<RatingStars rating={4} />);
    expect(tree).toMatchSnapshot();
  });

  it("renders the correct amount of stars", () => {
    const wrapper = getWrapper(4);
    expect(wrapper.children()).toHaveLength(5);
  });

  it("renders the correct amount of empty stars", () => {
    const wrapper = getWrapper(2.5);
    const emptyStars = wrapper
      .children()
      .filterWhere(star => star.render().text() === "star_border");

    expect(emptyStars).toHaveLength(2);
  });

  it("renders the correct amount of half stars", () => {
    const wrapper = getWrapper(3.5);
    const halfStars = wrapper
      .children()
      .filterWhere(star => star.render().text() === "star_half");

    expect(halfStars).toHaveLength(1);
  });

  it("renders the correct amount of full stars", () => {
    const wrapper = getWrapper(3.5);
    const fullStars = wrapper
      .children()
      .filterWhere(star => star.render().text() === "star");

    expect(fullStars).toHaveLength(3);
  });
});
