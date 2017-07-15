import React from "react";
import RatingCategoriesList from "../RatingCategoriesList";
import renderer from "react-test-renderer";
import { shallow, render } from "enzyme";

const props = {
  ratings: [
    {
      description: "Attends Group Meetings",
      rating: 3
    },
    {
      description: "Contributes to Discussions",
      rating: 5
    }
  ],
  hrColors: {
    colorOne: "#FFF",
    colorTwo: "#000"
  }
};

describe("RatingCategoriesList component", () => {
  it("should render correctly", () => {
    const tree = renderer.create(<RatingCategoriesList {...props} />);
    expect(tree).toMatchSnapshot();
  });

  it("should render the right amount of rating categories", () => {
    const wrapper = shallow(<RatingCategoriesList {...props} />);
    const actual = wrapper.find("div").length;
    const expected = 2;
    expect(actual).toBe(expected);
  });

  it("should render the specified rating category", () => {
    const wrapper = render(<RatingCategoriesList {...props} />);
    const actual = wrapper.html().includes("Attends Group Meetings");
    const expected = true;
    expect(actual).toBe(expected);
  });
});
