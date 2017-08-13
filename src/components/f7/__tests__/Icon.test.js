import React from "react";
import Icon from "../Icon";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

describe("Icon component", () => {
  const getIcon = props => {
    const newProps = {
      material: "thumbs_down",
      className: "custom",
      onClick: jest.fn()
    };
    return <Icon {...newProps} />;
  };

  it("should render correctly", () => {
    const Icon = getIcon();
    const tree = renderer.create(Icon).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render a `thumbs_down` icon", () => {
    const Icon = getIcon();
    const wrapper = shallow(Icon);
    const actual = wrapper.props().children;
    const expected = "thumbs_down";
    expect(actual).toBe(expected);
  });

  it("should render with a `custom` styling class", () => {
    const Icon = getIcon();
    const wrapper = shallow(Icon);
    const actual = wrapper.props().className.includes("custom");
    const expected = true;
    expect(actual).toBe(expected);
  });

  it("should call `onClick` when the icon is clicked", () => {
    const Icon = getIcon();
    const wrapper = shallow(Icon);
    wrapper.simulate("click");
    const actual = wrapper.props().onClick.mock.calls.length;
    const expected = 1;
    expect(actual).toBe(expected);
  });
});
