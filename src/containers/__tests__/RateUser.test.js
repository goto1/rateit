import React from "react";
import { ProfessorForm, StudentForm } from "../RateUser";
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
      ? <ProfessorForm {...props} />
      : <StudentForm {...props} />;
  };

  describe("ProfessorForm", () => {
    it("should render correctly", () => {
      const ProfessorForm = getForm("professor");
      const tree = renderer.create(ProfessorForm).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("should render an `InputElement` with the `name` attribute set to `name`", () => {
      const ProfessorForm = getForm("professor");
      const wrapper = mount(ProfessorForm);
      const actual = wrapper.find(InputElement).props().name;
      const expected = "name";
      expect(actual).toBe(expected);
    });

    it("should render two `SmartSelect` components with options for school and major information", () => {
      const ProfessorForm = getForm("professor");
      const wrapper = mount(ProfessorForm);
      const schools = wrapper.find(SmartSelect).at(0).props().name === "school";
      const majors = wrapper.find(SmartSelect).at(1).props().name === "major";
      const actual = schools && majors;
      const expected = true;
      expect(actual).toBe(expected);
    });

    it("should render two `RatingCategoryInput` components", () => {
      const ProfessorForm = getForm("professor");
      const wrapper = mount(ProfessorForm);
      const actual = wrapper.find(RatingCategoryInput).length;
      const expected = 2;
      expect(actual).toBe(expected);
    });
  });

  describe("StudentForm", () => {
    it("should render correctly", () => {
      const StudentForm = getForm("student");
      const tree = renderer.create(StudentForm).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("should render two `InputElement` components", () => {
      const StudentForm = getForm("student");
      const wrapper = mount(StudentForm);
      const actual = wrapper.find(InputElement).length;
      const expected = 2;
      expect(actual).toBe(expected);
    });

    it("should render two `SmartSelect` components for picking school and major options", () => {
      const StudentForm = getForm("student");
      const wrapper = mount(StudentForm);
      const schools = wrapper.find(SmartSelect).at(0).props().name === "school";
      const majors = wrapper.find(SmartSelect).at(1).props().name === "major";
      const actual = schools && majors;
      const expected = true;
      expect(actual).toBe(expected);
    });

    it("should render two `RatingCategoryInput` components", () => {
      const StudentForm = getForm("student");
      const wrapper = mount(StudentForm);
      const actual = wrapper.find(RatingCategoryInput).length;
      const expected = 2;
      expect(actual).toBe(expected);
    });

    it("should render a `Textarea` component with the `name` attribute of `comment`", () => {
      const StudentForm = getForm("student");
      const wrapper = mount(StudentForm);
      const actual = wrapper.find(Textarea).exists();
      const expected = true;
      expect(actual).toBe(expected);
    });

    it("should render a `RadioInput` component with the `name` attribute of `recommend`", () => {
      const StudentForm = getForm("student");
      const wrapper = mount(StudentForm);
      const actual = wrapper.find(RadioInput).props().name;
      const expected = "recommend";
      expect(actual).toBe(expected);
    });
  });
});
