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

export let StudentForm = ({
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
  const disableSubmission =
    isSubmitting &&
    Object.keys(errors).length !== 0 &&
    Object.keys(touched).length === 0;
  const validForm = Object.keys(errors).length === 0;
  return (
    <form onSubmit={handleSubmit}>
      <FormSection title="Student Information">
        <InputElement
          icon="account_circle"
          name="name"
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="John Doe"
          type="text"
          valid={errors.name && touched.name && false}
          value={values.student_name}
        />
        <InputElement
          icon="email"
          name="email"
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="john@school.edu"
          type="email"
          valid={errors.email && touched.email && false}
          value={values.email}
        />
      </FormSection>
      <FormSection title="School Information">
        <SmartSelect
          multiple={false}
          name="school"
          onChange={handleChange}
          options={schools}
          searchbarPlaceholder="Search for a school..."
          selected={selectedSchools}
          value={values.school}
        />
        <SmartSelect
          multiple={false}
          name="major"
          onChange={handleChange}
          options={majors}
          searchbarPlaceholder="Search for a major..."
          selected={selectedMajors}
          value={values.major}
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
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="Your comment here..."
          value={values.comment}
        />
        <RadioInput icon="done" name="recommend" onChange={handleChange} />
      </FormSection>
      {!validForm &&
        <StyledContentBlock>Please fill out all fields</StyledContentBlock>}
      <ContentBlock>
        <Button
          type="submit"
          color="green"
          disabled={disableSubmission}
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
    comment: "",
    email: "",
    major: props.selectedMajors[0].id,
    name: "",
    recommend: false,
    school: props.selectedSchools[0].id,
    DRFJY9jd: "",
    j84WAR77: "",
    wXe02QBg: "",
    zoQCOOJO: "",
    Gb1tXreK: "",
    TrK3zUiV: ""
  }),
  validationSchema: Yup.object().shape({
    comment: Yup.string().required(),
    email: Yup.string().email().required(),
    major: Yup.string().required(),
    name: Yup.string().required(),
    recommend: Yup.bool().required(),
    school: Yup.string().required(),
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

export let ProfessorForm = ({
  errors,
  handleBlur,
  handleChange,
  handleChangeValue,
  handleSelectChange,
  handleSubmit,
  isSubmitting,
  majors,
  ratingCategories,
  schools,
  selectedMajors,
  selectedSchools,
  touched,
  values
}) => {
  const disableSubmission =
    isSubmitting ||
    Object.keys(errors).length !== 0 ||
    Object.keys(touched).length === 0;
  const validForm = Object.keys(errors).length === 0;
  return (
    <form onSubmit={handleSubmit}>
      <FormSection title="Professor Information">
        <InputElement
          icon="account_circle"
          name="name"
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="John Doe"
          type="text"
          valid={errors.name && touched.name && false}
          value={values.name}
        />
      </FormSection>
      <FormSection title="School Information">
        <SmartSelect
          multiple={false}
          name="school"
          onBlur={handleBlur}
          onChange={e => {
            handleSelectChange(e, handleChangeValue);
          }}
          options={schools}
          searchbarPlaceholder="Search for a school..."
          selected={selectedSchools}
          value={values.school}
        />
        <SmartSelect
          multiple={false}
          name="major"
          onBlur={handleBlur}
          onChange={e => {
            handleSelectChange(e, handleChangeValue);
          }}
          options={majors}
          searchbarPlaceholder="Search for a major..."
          selected={selectedMajors}
          value={values.major}
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
          big
          color="green"
          disabled={disableSubmission}
          fill
          type="submit"
        >
          Submit
        </Button>
      </ContentBlock>
    </form>
  );
};

ProfessorForm = Formik({
  mapPropsToValues: props => ({
    major: props.selectedMajors[0].toString(),
    name: "",
    school: props.selectedSchools[0].toString(),
    T5wKYAmI: "",
    jUtauYzO: "",
    mh4m4LcX: "",
    yZyycMRm: "",
    sBuPhZef: ""
  }),
  validationSchema: Yup.object().shape({
    major: Yup.string().required(),
    name: Yup.string().required(),
    school: Yup.string().required(),
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

    this.selectedSchools = this.schools.slice(0, 1).map(school => school.id);
    this.selectedMajors = currUser.majors.slice(0, 1).map(major => major.id);

    this.profRatingCat = API.getRatingCategories().professor;
    this.studRatingCat = API.getRatingCategories().student;
  };

  handleSelectChange = (e, handleChange) => {
    const selected = [...e.target.options].filter(option => option.selected);
    handleChange(e.target.name, selected[0].value);
  };

  render() {
    this.fetchUserInfo();
    const userType = JSON.parse(this.props.currentRoute.query).type;
    const pFormProps = {
      handleSelectChange: this.handleSelectChange,
      majors: this.allMajors,
      ratingCategories: this.profRatingCat,
      schools: this.schools,
      selectedMajors: this.selectedMajors,
      selectedSchools: this.selectedSchools
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
