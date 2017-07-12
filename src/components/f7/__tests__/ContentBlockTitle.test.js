import React from "react";
import ContentBlockTitle from "../ContentBlockTitle";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import "jest-enzyme";

describe("ContentBlockTitle", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<ContentBlockTitle>HelloWorld!</ContentBlockTitle>)
      .toJSON();
    expect(tree).toMatchSnapshot();
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
