import React from "react";
import Button from "../Button";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import "jest-enzyme";
import "jest-styled-components";

const props = {
  onClick: jest.fn()
};

describe("Button component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Button {...props}>Submit</Button>).toJSON();
    expect(tree).toMatchStyledComponentsSnapshot();
  });

  it("renders with the `default` color scheme", () => {
    const newProps = { ...props };
    const tree = renderer
      .create(<Button {...newProps}>Submit</Button>)
      .toJSON();
    expect(tree).toHaveStyleRule("background-color", "inherit !important");
    expect(tree).toHaveStyleRule("border-color", "#057AFF !important");
    expect(tree).toHaveStyleRule("color", "#057AFF !important");
  });

  it("renders with the `primary` color scheme", () => {
    const newProps = { ...props, type: "primary" };
    const tree = renderer
      .create(<Button {...newProps}>Submit</Button>)
      .toJSON();
    expect(tree).toHaveStyleRule("background-color", "#057AFF !important");
    expect(tree).toHaveStyleRule("border-color", "#057AFF !important");
    expect(tree).toHaveStyleRule("color", "#F1F1F5 !important");
  });

  it("renders with the `success` color scheme", () => {
    const newProps = { ...props, type: "success" };
    const tree = renderer
      .create(<Button {...newProps}>Submit</Button>)
      .toJSON();
    expect(tree).toHaveStyleRule("background-color", "#369947 !important");
    expect(tree).toHaveStyleRule("border-color", "#369947 !important");
    expect(tree).toHaveStyleRule("color", "#F1F1F5 !important");
  });

  it("calls a function when clicked", () => {
    const { onClick } = props;
    const wrapper = shallow(<Button {...props}>Submit</Button>);
    wrapper.simulate("click");
    expect(onClick.mock.calls.length).toBe(1);
  });
});
