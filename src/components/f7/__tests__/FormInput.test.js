import React from "react";
import FormInput from "../FormInput";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import "jest-enzyme";
import "jest-styled-components";

const props = {
  icon: "account_box",
  type: "text",
  name: "username",
  placeholder: "Type your name",
  onChange: jest.fn()
};

describe("FormInput component", () => {
  const tree = renderer.create(<FormInput {...props} />).toJSON();

  it("renders correctly", () => {
    expect(tree).toMatchStyledComponentsSnapshot();
  });

  it("calls a function when input changes", () => {
    const wrapper = shallow(<FormInput {...props} />);
    const onChange = props.onChange;

    wrapper.find("input").simulate("change");
    expect(onChange.mock.calls.length).toBe(1);
  });
});
