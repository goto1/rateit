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

// DELETE WHEN DONE TESTING
const user = API.getUserDetails("UArjrbxWHX");
const schools = user.schools;
const majors = API.getMajors();
const selectedSchools = schools.slice(0, 1).map(school => school.id);
const selectedMajors = user.majors.slice(0, 1).map(school => school.id);
const ratingCategoriesStud = API.getRatingCategories().student;

const StudentRatingForm = ({ handleSubmit, handleChange }) =>
  <form onSubmit={handleSubmit}>
    <FormSection title="Student Information">
      <InputElement
        icon="account_circle"
        name="student_name"
        type="text"
        placeholder="John Doe"
        onChange={handleChange}
      />
      <InputElement
        icon="email"
        name="student_email"
        type="email"
        placeholder="john@school.edu"
        onChange={handleChange}
      />
    </FormSection>
    <FormSection title="School Information">
      <SmartSelect
        name="school"
        options={schools}
        selected={selectedSchools}
        multiple={false}
        searchbarPlaceholder="Search for a school..."
        onChange={handleChange}
      />
      <SmartSelect
        name="major"
        options={majors}
        selected={selectedMajors}
        multiple={false}
        searchbarPlaceholder="Search for a major..."
        onChange={handleChange}
      />
    </FormSection>
    {ratingCategoriesStud.map(category => {
      const props = {
        ...category,
        key: category.id,
        onChange: handleChange
      };
      return <RatingCategoryInput {...props} />;
    })}
    <FormSection title="Additional Information">
      <Textarea
        icon="comment"
        name="comment"
        placeholder="Your comment here..."
        onChange={handleChange}
      />
      <RadioInput icon="done" name="recommend" onChange={handleChange} />
    </FormSection>
    <ContentBlock>
      <Button type="submit" color="green" big fill>
        Submit
      </Button>
    </ContentBlock>
  </form>;

const ratingCategoriesProf = API.getRatingCategories().professor;

const ProfessorRatingForm = ({ handleSubmit, handleChange }) =>
  <form onSubmit={handleSubmit}>
    <FormSection title="Professor Information">
      <InputElement
        icon="account_circle"
        name="professor_name"
        type="text"
        placeholder="John Doe"
        onChange={handleChange}
      />
    </FormSection>
    <FormSection title="School Information">
      <SmartSelect
        name="school"
        options={schools}
        selected={selectedSchools}
        multiple={false}
        searchbarPlaceholder="Search for a school..."
        onChange={handleChange}
      />
      <SmartSelect
        name="major"
        options={majors}
        selected={selectedMajors}
        multiple={false}
        searchbarPlaceholder="Search for a major..."
        onChange={handleChange}
      />
    </FormSection>
    {ratingCategoriesProf.map(category => {
      const props = {
        ...category,
        key: category.id,
        onChange: handleChange
      };
      return <RatingCategoryInput {...props} />;
    })}
    <ContentBlock>
      <Button type="submit" color="green" big fill>
        Submit
      </Button>
    </ContentBlock>
  </form>;

const handleSubmit = e => {
  e.preventDefault();
  console.log("submitted...");
};

const handleChange = e => {
  const { name, value } = e.target;
  console.log(`${name}: ${value}`);
};

let RateUser = ({ currentRoute }) => {
  const userType = JSON.parse(currentRoute.query).type;
  const props = { handleSubmit, handleChange };
  return (
    <Page>
      <Navbar>
        <NavLeft backLink="Cancel" sliding />
        <NavCenter sliding>Rating Submission</NavCenter>
      </Navbar>
      {userType === "professor" ? <ProfessorRatingForm {...props} /> : null}
      {userType === "student" ? <StudentRatingForm {...props} /> : null}
    </Page>
  );
};

const mapStateToProps = state => ({ currentRoute: state.currentRoute });

RateUser = connect(mapStateToProps)(RateUser);

export default RateUser;
