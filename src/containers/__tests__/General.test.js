import React from "react";
import {
  AccountInformation,
  SchoolInformation,
  PasswordReset,
  UserInformation
} from "../General";
import { Button, InputElement, SmartSelect } from "../../components/f7";
import renderer from "react-test-renderer";
import { mount } from "enzyme";

describe("General container", () => {
  describe("UserInformation", () => {
    const getForm = props => {
      const newProps = {
        majors: [
          { id: "hvdMFjM", name: "Computer Science", abbreviation: "CS" },
          { id: "e2LejDg", name: "Information Systems", abbreviation: "IS" }
        ],
        schools: [
          {
            id: "bruHy",
            name: "New Jersey Institute of Technology, Newark",
            abbreviation: "NJIT"
          },
          {
            id: "5y7fh",
            name: "Rutgers University, New Brunswick",
            abbreviation: "RU"
          }
        ],
        major: ["hvdMFjM", "e2LejDg"],
        school: ["bruHy", "5y7fh"],
        ...props
      };
      return <UserInformation {...newProps} />;
    };

    it("should render correctly", () => {
      const Form = getForm();
      const tree = renderer.create(Form).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("should render AccountInformation, SchoolInformation, and PasswordReset components", () => {
      const Form = getForm();
      const wrapper = mount(Form);
      const accInfoExists = wrapper.find(AccountInformation).exists();
      const schoolInfoExists = wrapper.find(SchoolInformation).exists();
      const passResetExists = wrapper.find(PasswordReset).exists();
      const actual = accInfoExists && schoolInfoExists && passResetExists;
      const expected = true;
      expect(actual).toBe(expected);
    });

    it("should render an InputElement for current password information", () => {
      const Form = getForm();
      const wrapper = mount(Form);
      const actual = wrapper.find(InputElement).at(3).props().name;
      const expected = "current_password";
      expect(actual).toBe(expected);
    });

    it("should render a Button for submitting the form", () => {
      const Form = getForm();
      const wrapper = mount(Form);
      const actual = wrapper.find(Button).props().type;
      const expected = "submit";
      expect(actual).toBe(expected);
    });
  });
});
