import React from "react";
import RatingCategoryInput, {
  Label,
  RadioInput,
  RatingCircle,
  RatingCircles,
  StyledCardContent
} from "../RatingCategoryInput";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

describe("RatingCategoryInput component", () => {
  const getWrapper = () => {
    const props = {
      id: "DRFJY9jd",
      description: "Attends Group Meetings",
      onChange: jest.fn()
    };
    return shallow(<RatingCategoryInput {...props} />);
  };

  it("should render a `header` with description of the input element", () => {
    const wrapper = getWrapper();
    const actual = wrapper
      .find(".header")
      .html()
      .includes("Attends Group Meetings");
    const expected = true;
    expect(actual).toBe(expected);
  });

  it("should render a `footer` that describes the rating options", () => {
    const wrapper = getWrapper();
    const actual = wrapper.find(".footer").html().includes("Awful");
    const expected = true;
    expect(actual).toBe(expected);
  });

  it("should render a RatingCircles component", () => {
    const wrapper = getWrapper();
    const actual = wrapper.find(RatingCircles).length;
    const expected = 1;
    expect(actual).toBe(expected);
  });

  describe("RatingCircles", () => {
    const props = {
      name: "DRFJY9jd",
      onChange: jest.fn()
    };
    const getRCWrapper = () => shallow(<RatingCircles {...props} />);

    it("should render 5 rating circles", () => {
      const wrapper = getRCWrapper();
      const actual = wrapper.find(RatingCircle).length;
      const expected = 5;
      expect(actual).toBe(expected);
    });

    // it("should change the `checked` attribute when change is triggered", () => {
    // });
  });
});
