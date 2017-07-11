import React from "react";
import FormInput from "../FormInput";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import "jest-enzyme";

describe("FormInput", () => {
  const mockFn = jest.fn();

  it("renders correctly", () => {
    const tree = renderer
      .create(
        <FormInput
          icon="account_box"
          type="text"
          name="username"
          placeholder="Type your username"
          onChange={mockFn}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("calls a function when input changes", () => {
    const wrapper = shallow(
      <FormInput
        icon="account_box"
        type="text"
        name="username"
        placeholder="Type your username"
        onChange={mockFn}
      />
    );
    wrapper.find("input").simulate("change");

    expect(mockFn.mock.calls.length).toBe(1);
  });
});
