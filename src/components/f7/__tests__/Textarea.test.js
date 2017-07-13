import React from "react";
import Textarea from "../Textarea";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import "jest-enzyme";

const props = {
  icon: "info",
  name: "about",
  placeholder: "Tell us about yourself...",
  onChange: jest.fn()
};

describe("Textarea component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Textarea {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders a textarea element with a specified name attribute", () => {
    const wrapper = shallow(<Textarea {...props} />);
    expect(wrapper.find("textarea")).toHaveProp("name", props.name);
  });

  it("calls a function when value changes", () => {
    const wrapper = shallow(<Textarea {...props} />);
    const { onChange } = props;

    wrapper.find("textarea").simulate("change");
    expect(onChange.mock.calls.length).toBe(1);
  });
});
