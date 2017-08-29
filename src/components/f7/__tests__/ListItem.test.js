import React from "react";
import ListItem from "../ListItem";
import renderer from "react-test-renderer";
import { mount } from "enzyme";

describe("ListItem component", () => {
  function getListItem(props) {
    const updatedProps = {
      icon: "exit_to_app",
      children: "Logout",
      url: "/",
      ...props
    };
    return <ListItem {...updatedProps} />;
  }

  it("should render as an hyperlink", () => {
    const ListItem = getListItem();
    const wrapper = mount(ListItem);
    const actual = wrapper.find("a").props().href;
    const expected = "/";
    expect(actual).toBe(expected);
  });

  it("should render with the `exit_to_app` icon", () => {
    const ListItem = getListItem();
    const wrapper = mount(ListItem);
    const actual = wrapper.find("i.icon").text();
    const expected = "exit_to_app";
    expect(actual).toBe(expected);
  });

  it("should render the text `Logout`", () => {
    const ListItem = getListItem();
    const wrapper = mount(ListItem);
    const actual = wrapper.find(".item-inner").text();
    const expected = "Logout";
    expect(actual).toBe(expected);
  });

  it("should render as a `div` element when `onClick` is passed as a prop", () => {
    const ListItem = getListItem({ onClick: jest.fn() });
    const wrapper = mount(ListItem);
    const hyperlinkNotFound = wrapper.find("a").length === 0;
    const onClickHandlerFound =
      typeof wrapper.find(".item-content").props().onClick !== "undefined";
    expect(hyperlinkNotFound).toBe(true);
    expect(onClickHandlerFound).toBe(true);
  });
});
