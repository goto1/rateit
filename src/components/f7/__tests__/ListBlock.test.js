import React from "react";
import ListBlock from "../ListBlock";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import "jest-enzyme";

describe("ListBlock", () => {
  const HelloWorld = <div>HelloWorld!</div>;

  it("renders correctly", () => {
    const tree = renderer
      .create(
        <ListBlock>
          {HelloWorld}
        </ListBlock>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("contains `HelloWorld` component", () => {
    const wrapper = shallow(
      <ListBlock>
        {HelloWorld}
      </ListBlock>
    );
    expect(wrapper).toContainReact(HelloWorld);
  });
});
