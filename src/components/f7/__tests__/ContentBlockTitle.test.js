import React from "react";
import ContentBlockTitle from "../ContentBlockTitle";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import "jest-enzyme";
import "jest-styled-components";

describe("ContentBlockTitle component", () => {
  const tree = renderer
    .create(<ContentBlockTitle>HelloWorld!</ContentBlockTitle>)
    .toJSON();

  it("renders correctly", () => {
    expect(tree).toMatchStyledComponentsSnapshot();
  });

  it("renders with a style rule `margin-top` equal to 25px", () => {
    expect(tree).toHaveStyleRule("margin-top", "25px !important");
  });

  it("contains `HelloWorld` component", () => {
    const HelloWorld = <div>HelloWorld!</div>;
    const wrapper = shallow(
      <ContentBlockTitle>
        {HelloWorld}
      </ContentBlockTitle>
    );
    expect(wrapper).toContainReact(HelloWorld);
  });
});
