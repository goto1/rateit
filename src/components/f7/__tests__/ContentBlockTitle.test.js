import React from "react";
import ContentBlockTitle from "../ContentBlockTitle";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import "jest-enzyme";

describe("ContentBlockTitle", () => {
  const HelloWorld = <div className="hello">HelloWorld!</div>;

  it("renders correctly", () => {
    const tree = renderer.create(<ContentBlockTitle />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("contains `HelloWorld` component", () => {
    const wrapper = shallow(
      <ContentBlockTitle>
        {HelloWorld}
      </ContentBlockTitle>
    );
    expect(wrapper).toContainReact(HelloWorld);
  });

  it("contains `HelloWorld!` message", () => {
    const wrapper = shallow(
      <ContentBlockTitle>
        {HelloWorld}
      </ContentBlockTitle>
    );
    expect(wrapper.find(".hello")).toHaveText("HelloWorld!");
  });
});
