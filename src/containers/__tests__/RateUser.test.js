import React from "react";
import RateUserProfessorForm from "../RateUserProfessorForm";
import RateUserStudentForm from "../RateUserStudentForm";
import {
  Button,
  InputElement,
  RadioInput,
  SmartSelect,
  Textarea
} from "../../components/f7";
import RatingCategoryInput from "../../components/RatingCategoryInput";
import renderer from "react-test-renderer";
import { mount } from "enzyme";

describe("RateUser container", () => {
  const getForm = type => {
    const props = {
      ratingCategories: [
        { id: "DRFJY9jd", description: "Attends Group Meetings" },
        { id: "j84WAR77", description: "Contributes to Discussions" }
      ],
      selectedSchools: [
        {
          id: "bruHy",
          name: "New Jersey Institute of Technology, Newark",
          abbreviation: "NJIT"
        }
      ],
      selectedMajors: [
        { id: "hvdMFjM", name: "Computer Science", abbreviation: "CS" }
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
      majors: [
        { id: "hvdMFjM", name: "Computer Science", abbreviation: "CS" },
        { id: "e2LejDg", name: "Information Systems", abbreviation: "IS" }
      ]
    };
    return type === "professor"
      ? <RateUserProfessorForm {...props} />
      : <RateUserStudentForm {...props} />;
  };

  describe("RateUserProfessorForm", () => {
    it("should render correctly", () => {
      const RateUserProfessorForm = getForm("professor");
      const tree = renderer.create(RateUserProfessorForm).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("should render an InputElement with the name attribute set to name", () => {
      const RateUserProfessorForm = getForm("professor");
      const wrapper = mount(RateUserProfessorForm);
      const actual = wrapper.find(InputElement).props().name;
      const expected = "name";
      expect(actual).toBe(expected);
    });

    it("should render two SmartSelect components with options for school and major information", () => {
      const RateUserProfessorForm = getForm("professor");
      const wrapper = mount(RateUserProfessorForm);
      const schools = wrapper.find(SmartSelect).at(0).props().name === "school";
      const majors = wrapper.find(SmartSelect).at(1).props().name === "major";
      const actual = schools && majors;
      const expected = true;
      expect(actual).toBe(expected);
    });

    it("should render two RatingCategoryInput components", () => {
      const RateUserProfessorForm = getForm("professor");
      const wrapper = mount(RateUserProfessorForm);
      const actual = wrapper.find(RatingCategoryInput).length;
      const expected = 2;
      expect(actual).toBe(expected);
    });

    it("should update an InputElement component when it is changed", () => {
      const Form = getForm("professor");
      const wrapper = mount(Form);
      wrapper.find(InputElement).find("input").simulate("change", {
        persist: () => {},
        target: {
          name: "name",
          value: "John Doe"
        }
      });
      const actual = wrapper.find(InputElement).find("input").props().value;
      const expected = "John Doe";
      expect(actual).toBe(expected);
    });

    it("should submit the form and disable the submit button", () => {
      const Form = getForm("professor");
      const wrapper = mount(Form);
      wrapper.find("form").simulate("submit", {
        preventDefault: () => {}
      });
      const actual = wrapper.find(Button).props().disabled;
      const expected = true;
      expect(actual).toBe(true);
    });
  });

  describe("StudentForm", () => {
    it("should render correctly", () => {
      const RateUserStudentForm = getForm("student");
      const tree = renderer.create(RateUserStudentForm).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("should render two InputElement components", () => {
      const RateUserStudentForm = getForm("student");
      const wrapper = mount(RateUserStudentForm);
      const actual = wrapper.find(InputElement).length;
      const expected = 2;
      expect(actual).toBe(expected);
    });

    it("should render two SmartSelect components for picking school and major options", () => {
      const RateUserStudentForm = getForm("student");
      const wrapper = mount(RateUserStudentForm);
      const schools = wrapper.find(SmartSelect).at(0).props().name === "school";
      const majors = wrapper.find(SmartSelect).at(1).props().name === "major";
      const actual = schools && majors;
      const expected = true;
      expect(actual).toBe(expected);
    });

    it("should render two RatingCategoryInput components", () => {
      const RateUserStudentForm = getForm("student");
      const wrapper = mount(RateUserStudentForm);
      const actual = wrapper.find(RatingCategoryInput).length;
      const expected = 2;
      expect(actual).toBe(expected);
    });

    it("should render a Textarea component with the name attribute of comment", () => {
      const RateUserStudentForm = getForm("student");
      const wrapper = mount(RateUserStudentForm);
      const actual = wrapper.find(Textarea).exists();
      const expected = true;
      expect(actual).toBe(expected);
    });

    it("should render a RadioInput component with the name attribute of recommend", () => {
      const RateUserStudentForm = getForm("student");
      const wrapper = mount(RateUserStudentForm);
      const actual = wrapper.find(RadioInput).props().name;
      const expected = "recommend";
      expect(actual).toBe(expected);
    });

    it("should update an InputElement component when it is changed", () => {
      const Form = getForm("student");
      const wrapper = mount(Form);
      wrapper.find(InputElement).at(0).find("input").simulate("change", {
        persist: () => {},
        target: {
          name: "name",
          value: "John Doe"
        }
      });
      const actual = wrapper.find(InputElement).at(0).find("input").props()
        .value;
      const expected = "John Doe";
      expect(actual).toBe(expected);
    });

    it("should submit the form and disable the submit button", () => {
      const Form = getForm("student");
      const wrapper = mount(Form);
      wrapper.find("form").simulate("submit", {
        preventDefault: () => {}
      });
      const actual = wrapper.find(Button).props().disabled;
      const expected = true;
      expect(actual).toBe(true);
    });
  });
});
