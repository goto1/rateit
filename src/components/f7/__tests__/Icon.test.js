import React from "react";
import Icon from "../Icon";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import "jest-enzyme";

describe("Icon component", () => {
  const iconName = "thumbs_down";

  it("renders correctly", () => {
    const tree = renderer.create(<Icon material={iconName} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders with custom `className` property", () => {
    const className = "customStyles";
    const wrapper = shallow(<Icon material={iconName} className={className} />);
    expect(wrapper).toHaveClassName(className);
  });

  it("renders name of the icon", () => {
    const wrapper = shallow(<Icon material={iconName} />);
    expect(wrapper).toHaveText(iconName);
  });
});
