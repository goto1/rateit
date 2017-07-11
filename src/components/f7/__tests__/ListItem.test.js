import React from "react";
import ListItem from "../ListItem";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import "jest-enzyme";

describe("ListItem", () => {
  const HelloWorld = "HelloWorld!";

  it("renders correctly", () => {
    const tree = renderer
      .create(
        <ListItem icon="home" url="/home">
          {HelloWorld}
        </ListItem>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("contains title of the item", () => {
    const wrapper = shallow(
      <ListItem icon="home" url="/home">
        {HelloWorld}
      </ListItem>
    );
    expect(wrapper.find(".item-inner")).toHaveText("HelloWorld!");
  });
});
