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
  describe("ContactForm", () => {
    const getContactForm = props => {
      const newProps = {
        errors: {},
        handleBlur: jest.fn(),
        handleChange: jest.fn(),
        handleSubmit: jest.fn(),
        isSubmitting: false,
        touched: {},
        values: { title: "", message: "" },
        ...props
      };
      return <ContactForm {...newProps} />;
    };

    it("should render correctly", () => {
      const ContactForm = getContactForm();
      const tree = renderer.create(ContactForm).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("should render all form elements", () => {
      const ContactForm = getContactForm();
      const wrapper = mount(ContactForm);
      const inputExists = wrapper.find(InputElement).exists();
      const textareaExists = wrapper.find(Textarea).exists();
      const buttonExists = wrapper.find(Button).exists();
      const actual = inputExists && textareaExists && buttonExists;
      const expected = true;
      expect(actual).toBe(expected);
    });

    it("should submit the form and disable the submit button", () => {
      const ContactForm = getContactForm();
      const element = mount(ContactForm).find("form");
      element.simulate("submit", {
        preventDefault: () => {}
      });
      const actual = element.find(Button).props().disabled;
      const expected = true;
      expect(actual).toBe(true);
    });
  });

  describe("Content", () => {
    it("should render correctly", () => {
      const tree = renderer.create(<Content />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("should render all navbar elements", () => {
      const wrapper = shallow(<Content />);
      const navbarExists = wrapper.find(Navbar).exists();
      const navLeftExists = wrapper.find(NavLeft).exists();
      const navCenterExists = wrapper.find(NavCenter).exists();
      const actual = navbarExists && navLeftExists && navCenterExists;
      const expected = true;
      expect(actual).toBe(expected);
    });

    it("should render a ContactBlockTitle component", () => {
      const wrapper = shallow(<Content />);
      const actual = wrapper.find(ContentBlockTitle).exists();
      const expected = true;
      expect(actual).toBe(expected);
    });

    it("should render a ContactForm component", () => {
      const wrapper = shallow(<Content />);
      const actual = wrapper.find(ContactForm).exists();
      const expected = true;
      expect(actual).toBe(expected);
    });
  });
});
