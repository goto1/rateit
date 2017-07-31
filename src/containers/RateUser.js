import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { isFormValid } from "../utils/FormUtils";
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

const StyledContentBlock = styled(ContentBlock)`
  margin: 0 !important;
  text-transform: uppercase;
  text-align: center;
  color: red !important;
  font-size: 12.5px;
  letter-spacing: .5px;
`;

const StyledList = styled(List)`
  margin-bottom: ${props =>
    `${props.margin ? props.margin : "25"}px !important`};
`;

const FormSection = ({ title, margin, children }) =>
  <div>
    <ContentBlockTitle>
      {title}
    </ContentBlockTitle>
    <StyledList margin={margin} inset>
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
  handleBlur,
  ratingCategories,
  selectedSchools,
  selectedMajors,
  schools,
  majors
}) => {
  const validForm = isFormValid(values);
  return (
    <form onSubmit={handleSubmit}>
      <FormSection title="Student Information">
        <InputElement
          icon="account_circle"
          name="name"
          type="text"
          value={values.student_name}
          placeholder="John Doe"
          onChange={handleChange}
          onBlur={handleBlur}
          valid={errors.name && touched.name && false}
        />
        <InputElement
          icon="email"
          name="email"
          type="email"
          value={values.email}
          placeholder="john@school.edu"
          onChange={handleChange}
          onBlur={handleBlur}
          valid={errors.email && touched.email && false}
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
          onChange: handleChange,
          onBlur: handleBlur
        };
        return <RatingCategoryInput {...props} />;
      })}
      <FormSection title="Additional Information" margin={5}>
        <Textarea
          icon="comment"
          name="comment"
          value={values.comment}
          placeholder="Your comment here..."
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <RadioInput icon="done" name="recommend" onChange={handleChange} />
      </FormSection>
      {!validForm &&
        <StyledContentBlock>Please fill out all fields</StyledContentBlock>}
      <ContentBlock>
        <Button
          type="submit"
          color="green"
          disabled={isSubmitting || !validForm}
          big
          fill
        >
          Submit
        </Button>
      </ContentBlock>
    </form>
  );
};

StudentForm = Formik({
  mapPropsToValues: props => ({
    name: "",
    email: "",
    school: props.selectedSchools[0].id,
    major: props.selectedMajors[0].id,
    comment: "",
    recommend: false,
    DRFJY9jd: "",
    j84WAR77: "",
    wXe02QBg: "",
    zoQCOOJO: "",
    Gb1tXreK: "",
    TrK3zUiV: ""
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    school: Yup.string().required(),
    major: Yup.string().required(),
    comment: Yup.string().required(),
    recommend: Yup.bool().required(),
    DRFJY9jd: Yup.string().required(),
    j84WAR77: Yup.string().required(),
    wXe02QBg: Yup.string().required(),
    zoQCOOJO: Yup.string().required(),
    Gb1tXreK: Yup.string().required(),
    TrK3zUiV: Yup.string().required()
  }),
  handleSubmit: (values, { props, setErrors, setSubmitting }) => {
    console.log(values);
  }
})(StudentForm);

let ProfessorForm = ({
  values,
  touched,
  errors,
  isSubmitting,
  handleChange,
  handleSubmit,
  handleBlur,
  ratingCategories,
  selectedSchools,
  selectedMajors,
  schools,
  majors
}) => {
  const validForm = isFormValid(values);
  return (
    <form onSubmit={handleSubmit}>
      <FormSection title="Professor Information">
        <InputElement
          icon="account_circle"
          name="name"
          type="text"
          value={values.name}
          placeholder="John Doe"
          onChange={handleChange}
          onBlur={handleBlur}
          valid={errors.name && touched.name && false}
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
          onBlur={handleBlur}
        />
        <SmartSelect
          name="major"
          value={values.major}
          options={majors}
          selected={selectedMajors}
          multiple={false}
          searchbarPlaceholder="Search for a major..."
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </FormSection>
      {ratingCategories.map(category =>
        <RatingCategoryInput
          {...category}
          key={category.id}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      )}
      {!validForm &&
        <StyledContentBlock>Please fill out all fields</StyledContentBlock>}
      <ContentBlock>
        <Button
          type="submit"
          color="green"
          disabled={isSubmitting || !validForm}
          big
          fill
        >
          Submit
        </Button>
      </ContentBlock>
    </form>
  );
};

ProfessorForm = Formik({
  mapPropsToValues: props => ({
    name: "",
    school: props.selectedSchools[0].id,
    major: props.selectedMajors[0].id,
    T5wKYAmI: "",
    jUtauYzO: "",
    mh4m4LcX: "",
    yZyycMRm: "",
    sBuPhZef: ""
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    school: Yup.string().required(),
    major: Yup.string().required(),
    T5wKYAmI: Yup.string().required(),
    jUtauYzO: Yup.string().required(),
    mh4m4LcX: Yup.string().required(),
    yZyycMRm: Yup.string().required(),
    sBuPhZef: Yup.string().required()
  }),
  handleSubmit: (values, { props, setErrors, setSubmitting }) => {
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
