import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
import RatingCategoryInput from "../components/RatingCategoryInput";
import { Formik } from "formik";
import Yup from "yup";
import {
  Button,
  Card,
  CardContent,
  ContentBlock,
  ContentBlockTitle,
  GridCol,
  GridRow,
  Icon,
  InputElement,
  List,
  NavCenter,
  NavLeft,
  Navbar,
  RadioInput,
  SmartSelect,
  Textarea
} from "../components/f7";
import { Page, ListItem } from "framework7-react";

// DELETE WHEN DONE TESTING
import * as API from "../utils";
// DELETE WHEN DONE TESTING

const StyledList = styled(List)`
  margin-bottom: 25px !important;
`;

const FormSection = ({ title, children }) =>
  <div>
    <ContentBlockTitle>
      {title}
    </ContentBlockTitle>
    <StyledList inset>
      {children}
    </StyledList>
  </div>;

FormSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

class StudentRatingForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log("submitted..");
  };

  handleChange = e => {
    const { name, value } = e.target;
    console.log(name, value);
  };

  render() {
    // DELETE WHEN DONE TESTING
    const user = API.getUserDetails("UArjrbxWHX");
    const schools = user.schools;
    const majors = API.getMajors();
    const selectedSchools = schools.slice(0, 1).map(school => school.id);
    const selectedMajors = user.majors.slice(0, 1).map(school => school.id);
    const ratingCategories = API.getRatingCategories().student;
    return (
      <form onSubmit={this.handleSubmit}>
        <FormSection title="Student Information">
          <InputElement
            icon="account_circle"
            name="student_name"
            type="text"
            placeholder="John Doe"
            onChange={this.handleChange}
          />
          <InputElement
            icon="email"
            name="student_email"
            type="email"
            placeholder="john@school.edu"
            onChange={this.handleChange}
          />
        </FormSection>
        <FormSection title="School Information">
          <SmartSelect
            name="school"
            options={schools}
            selected={selectedSchools}
            searchbarPlaceholder="Search for a school..."
            onChange={this.handleChange}
          />
          <SmartSelect
            name="major"
            options={majors}
            selected={selectedMajors}
            searchbarPlaceholder="Search for a major..."
            onChange={this.handleChange}
          />
        </FormSection>
        {ratingCategories.map(category => {
          const props = {
            ...category,
            key: category.id,
            onChange: this.handleChange
          };
          return <RatingCategoryInput {...props} />;
        })}
        <FormSection title="Additional Information">
          <Textarea
            icon="comment"
            name="comment"
            placeholder="Your comment here..."
            onChange={this.handleChange}
          />
          <RadioInput
            icon="done"
            name="recommend"
            onChange={this.handleChange}
          />
        </FormSection>
        <ContentBlock>
          <Button type="submit" color="green" big fill>
            Submit
          </Button>
        </ContentBlock>
      </form>
    );
  }
}

class ProfessorRatingForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log("submitted..");
  };

  handleChange = e => {
    const { name, value } = e.target;
    console.log(name, value);
  };

  render() {
    // DELETE WHEN DONE TESTING //
    const user = API.getUserDetails("UArjrbxWHX");
    const schools = user.schools;
    const majors = API.getMajors();
    const selectedSchools = schools.slice(0, 1).map(school => school.id);
    const selectedMajors = user.majors.slice(0, 1).map(school => school.id);
    const ratingCategories = API.getRatingCategories().professor;
    // DELETE WHEN DONE TESTING //
    return (
      <form onSubmit={this.handleSubmit}>
        <FormSection title="Professor Information">
          <InputElement
            icon="account_circle"
            name="professor_name"
            type="text"
            placeholder="John Doe"
            onChange={() => "onChange"}
          />
        </FormSection>
        <FormSection title="School Information">
          <SmartSelect
            name="school"
            options={schools}
            selected={selectedSchools}
            searchbarPlaceholder="Search for a school..."
            onChange={() => "onChange"}
          />
          <SmartSelect
            name="major"
            options={majors}
            selected={selectedMajors}
            searchbarPlaceholder="Search for a major..."
            onChange={() => "onChange"}
          />
        </FormSection>
        {ratingCategories.map(category => {
          const props = {
            ...category,
            key: category.id,
            onChange: this.handleChange
          };
          return <RatingCategoryInput {...props} />;
        })}
        <ContentBlock>
          <Button type="submit" color="green" big fill>
            Submit
          </Button>
        </ContentBlock>
      </form>
    );
  }
}

let RateUser = ({ currentRoute }) => {
  const userType = JSON.parse(currentRoute.query).type;
  return (
    <Page>
      <Navbar>
        <NavLeft backLink="Cancel" sliding />
        <NavCenter sliding>Rating Submission</NavCenter>
      </Navbar>
      {userType === "professor" ? <ProfessorRatingForm /> : null}
      {userType === "student" ? <StudentRatingForm /> : null}
    </Page>
  );
};

const mapStateToProps = state => ({ currentRoute: state.currentRoute });

RateUser = connect(mapStateToProps)(RateUser);

export default RateUser;
