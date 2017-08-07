import React from "react";
import {
  AccountInfoForm,
  EmailFormField,
  PasswordResetFormFields,
  SchoolInfoFormFields
} from "../General";
import { Button, InputElement, SmartSelect } from "../../components/f7";
import renderer from "react-test-renderer";
import { shallow, mount } from "enzyme";

describe("General container", () => {
  describe("AccountInfoForm", () => {
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
        selectedMajors: ["hvdMFjM", "e2LejDg"],
        selectedSchools: ["bruHy", "5y7fh"],
        ...props
      };
      return <AccountInfoForm {...newProps} />;
    };

    it("should render correctly", () => {
      const AccountInfoForm = getForm();
      const tree = renderer.create(AccountInfoForm).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("should render with EmailFormField, SchoolInfoFormFields, and PasswordResetFormFields components", () => {
      const AccountInfoForm = getForm();
      const wrapper = mount(AccountInfoForm);
      const emailFieldFound = wrapper.find(EmailFormField).exists();
      const schoolFieldsFound = wrapper.find(SchoolInfoFormFields).exists();
      const passFieldsFound = wrapper.find(PasswordResetFormFields).exists();
      const actual = emailFieldFound && schoolFieldsFound && passFieldsFound;
      const expected = true;
      expect(actual).toBe(expected);
    });

    it("should render an InputElement of type `password` with a submit button", () => {
      const AccountInfoForm = getForm();
      const wrapper = mount(AccountInfoForm);
      const inputElementType = wrapper.find(InputElement).at(3).props().type;
      const submitButtonFound = wrapper.find(Button).exists();
      const actual = inputElementType === "password" && submitButtonFound;
      const expected = true;
      expect(actual).toBe(expected);
    });
  });
});
