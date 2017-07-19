import React from "react";
import InputElement from "../InputElement";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

const props = {
  icon: "account",
  type: "text",
  name: "user_name",
  id: "user_name",
  placeholder: "Your name goes here..",
  value: "Jim",
  onChange: jest.fn()
};

describe("InputElement component", () => {
  it("should renders correctly", () => {
    const tree = renderer.create(<InputElement {...props} />).toJSON();
    expect(tree).toMatchStyledComponentsSnapshot();
  });

  it("should render the input element with specified attributes", () => {
    const wrapper = shallow(<InputElement {...props} />);
    const actual = wrapper.find("input").props().name;
    const expected = "user_name";
    expect(actual).toBe(expected);
  });

  it("should call a function when input changes", () => {
    const wrapper = shallow(<InputElement {...props} />);
    wrapper.find("input").simulate("change");
    const actual = props.onChange.mock.calls.length;
    const expected = 1;
    expect(actual).toBe(expected);
  });
});
