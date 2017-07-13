import React from "react";
import Card from "../Card";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import "jest-enzyme";

const CardContent = (
  <div>
    Lorem ipsum dolor sit amet
    <span>Lorem ipsum dolor sit amet</span>
  </div>
);

describe("Card component", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Card>
          {CardContent}
        </Card>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders with custom styling class", () => {
    const wrapper = shallow(
      <Card className="custom-styles">
        {CardContent}
      </Card>
    );
    expect(wrapper).toHaveClassName("custom-styles");
  });
});
