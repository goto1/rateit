import React from "react";
import { Content, ContactForm } from "../HelpCenter";
import {
  Button,
  ContentBlockTitle,
  InputElement,
  NavCenter,
  NavLeft,
  Navbar,
  Textarea
} from "../../components/f7";
import renderer from "react-test-renderer";
import { shallow, mount } from "enzyme";

describe("HelpCenter container", () => {
  it("should render correctly", () => {
    const tree = renderer.create(<Content />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render a Navbar component with NavLeft and NavCenter as children", () => {
    const wrapper = shallow(<Content />);
    const navBarFound = wrapper.find(Navbar).exists();
    const navLeftFound = wrapper.find(NavLeft).exists();
    const navCenterFound = wrapper.find(NavCenter).exists();
    const actual = navBarFound && navLeftFound && navCenterFound;
    const expected = true;
    expect(actual).toBe(expected);
  });

  it("should render a ContentBlockComponent with string as a child", () => {
    const wrapper = shallow(<Content />);
    const contentBlockChild = wrapper.find(ContentBlockTitle).props().children;
    const actual = typeof contentBlockChild === "string";
    const expected = true;
    expect(actual).toBe(expected);
  });

  it("should render a ContactForm component with two form fields and a button", () => {
    const wrapper = mount(<Content />);
    const contactFormFound = wrapper.find(ContactForm).exists();
    const inputElementFound = wrapper.find(InputElement).exists();
    const textareaFound = wrapper.find(Textarea).exists();
    const buttonFound = wrapper.find(Button).exists();
    const actual =
      contactFormFound && inputElementFound && textareaFound && buttonFound;
    const expected = true;
    expect(actual).toBe(expected);
  });
});
