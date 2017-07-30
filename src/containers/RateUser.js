import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
import RatingCategoryInput from "../components/RatingCategoryInput";
import { Formik } from "formik";
import Yup from "yup";
import {
  Button,
  ContentBlock,
  ContentBlockTitle,
  InputElement,
  List,
  NavCenter,
  NavLeft,
  Navbar,
  RadioInput,
  SmartSelect,
  Textarea
} from "../components/f7";
import { Page } from "framework7-react";

// DELETE WHEN DONE TESTING
import * as API from "../utils";

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

let StudentForm = ({
  values,
  touched,
  errors,
  dirty,
  isSubmitting,
  handleChange,
  handleSubmit,
  ratingCategories,
  selectedSchools,
  selectedMajors,
  schools,
  majors
}) =>
  <form onSubmit={handleSubmit}>
    <FormSection title="Student Information">
      <InputElement
        icon="account_circle"
        name="student_name"
        type="text"
        value={values.student_name}
        placeholder="John Doe"
        onChange={handleChange}
      />
      <InputElement
        icon="email"
        name="email"
        type="email"
        value={values.email}
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
    {ratingCategories.map(category => {
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
        value={values.comment}
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

StudentForm = Formik({
  mapPropsToValues: props => ({
    student_name: "",
    email: "",
    school: props.selectedSchools[0].id,
    major: props.selectedMajors[0].id,
    DRFJY9jd: "",
    j84WAR77: "",
    wXe02QBg: "",
    zoQCOOJO: "",
    Gb1tXreK: "",
    TrK3zUiV: "",
    comment: "",
    recommend: false
  }),
  validationSchema: Yup.object().shape({
    professor_name: Yup.string(),
    school: Yup.string(),
    major: Yup.string()
  }),
  handleSubmit: (values, { props, setErrors, setSubmitting }) => {
    console.log(values);
    console.log(props);
  }
})(StudentForm);

let ProfessorForm = ({
  values,
  touched,
  errors,
  dirty,
  isSubmitting,
  handleChange,
  handleSubmit,
  ratingCategories,
  selectedSchools,
  selectedMajors,
  schools,
  majors
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <FormSection title="Professor Information">
        <InputElement
          icon="account_circle"
          name="prof_name"
          type="text"
          value={values.prof_name}
          placeholder="John Doe"
          onChange={handleChange}
        />
      </FormSection>
      <FormSection title="School Information">
        <SmartSelect
          name="school"
          value={values.school}
          options={schools}
          selected={selectedSchools}
          multiple={false}
          searchbarPlaceholder="Search for a school..."
          onChange={handleChange}
        />
        <SmartSelect
          name="major"
          value={values.major}
          options={majors}
          selected={selectedMajors}
          multiple={false}
          searchbarPlaceholder="Search for a major..."
          onChange={handleChange}
        />
      </FormSection>
      {ratingCategories.map(category =>
        <RatingCategoryInput
          {...category}
          key={category.id}
          onChange={handleChange}
        />
      )}
      <ContentBlock>
        <Button type="submit" color="green" disabled={isSubmitting} big fill>
          Submit
        </Button>
      </ContentBlock>
    </form>
  );
};

ProfessorForm = Formik({
  mapPropsToValues: props => ({
    prof_name: "",
    school: props.selectedSchools[0].id,
    major: props.selectedMajors[0].id,
    T5wKYAmI: "",
    jUtauYzO: "",
    mh4m4LcX: "",
    yZyycMRm: "",
    sBuPhZef: ""
  }),
  validationSchema: Yup.object().shape({
    prof_name: Yup.string(),
    school: Yup.string(),
    major: Yup.string(),
    T5wKYAmI: Yup.string(),
    jUtauYzO: Yup.string(),
    mh4m4LcX: Yup.string(),
    yZyycMRm: Yup.string(),
    sBuPhZef: Yup.string()
  }),
  handleSubmit: (values, { props, setErrors, setSubmitting }) => {
    console.log(props);
    console.log(values);
  }
})(ProfessorForm);

class RateUser extends React.Component {
  fetchUserInfo = () => {
    const allSchools = API.getSchools();
    const currUser = API.getUserDetails("UArjrbxWHX");
    this.allMajors = API.getMajors();

    const t1 = currUser.schools.map(school => school.id);
    this.schools = allSchools.filter(school => t1.includes(school.id));

    this.selectedSchools = this.schools.slice(0, 1);
    this.selectedMajors = currUser.majors.slice(0, 1);

    this.profRatingCat = API.getRatingCategories().professor;
    this.studRatingCat = API.getRatingCategories().student;
  };

  render() {
    this.fetchUserInfo();
    const userType = JSON.parse(this.props.currentRoute.query).type;
    const pFormProps = {
      ratingCategories: this.profRatingCat,
      selectedSchools: this.selectedSchools,
      selectedMajors: this.selectedMajors,
      schools: this.schools,
      majors: this.allMajors
    };
    const sFormProps = {
      ...pFormProps,
      ratingCategories: this.studRatingCat
    };
    return (
      <Page>
        <Navbar>
          <NavLeft backLink="Cancel" sliding />
          <NavCenter sliding>Rating Submission</NavCenter>
        </Navbar>
        {userType === "professor"
          ? <ProfessorForm {...pFormProps} />
          : <StudentForm {...sFormProps} />}
      </Page>
    );
  }
}

const mapStateToProps = state => ({ currentRoute: state.currentRoute });

RateUser = connect(mapStateToProps)(RateUser);

export default RateUser;
