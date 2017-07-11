import React from "react";
import LinkItem from "../LinkItem";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import "jest-enzyme";

describe("LinkItem", () => {
  const HelloWorld = <div>HelloWorld!</div>;

  it("renders correctly", () => {
    const tree = renderer
      .create(
        <LinkItem url="/home">
          {HelloWorld}
        </LinkItem>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("contains `HelloWorld` component", () => {
    const wrapper = shallow(
      <LinkItem url="/home">
        {HelloWorld}
      </LinkItem>
    );
    expect(wrapper).toContainReact(HelloWorld);
  });
});
