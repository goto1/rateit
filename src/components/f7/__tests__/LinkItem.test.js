import React from "react";
import LinkItem from "../LinkItem";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import "jest-enzyme";
import "jest-styled-components";

const props = {
  url: "/"
};

describe("LinkItem component", () => {
  const HelloWorld = <div>HelloWorld</div>;
  const tree = renderer
    .create(<LinkItem {...props}>HelloWorldComponent</LinkItem>)
    .toJSON();

  it("renders correctly", () => {
    expect(tree).toMatchStyledComponentsSnapshot();
  });

  it("contains a component", () => {
    const wrapper = shallow(
      <LinkItem {...props}>
        {HelloWorld}
      </LinkItem>
    );
    expect(wrapper).toContainReact(HelloWorld);
  });
});
