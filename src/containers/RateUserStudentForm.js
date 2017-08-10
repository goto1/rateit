import React from "react";
import PropTypes from "prop-types";
import RatingCategoryInput from "../components/RatingCategoryInput";
import { FormSection, StyledContentBlock } from "./RateUser";
import { Formik } from "formik";
import Yup from "yup";
import { isFormValid } from "../utils/FormUtils";
import {
  Button,
  ContentBlock,
  InputElement,
  RadioInput,
  SmartSelect,
  Textarea
} from "../components/f7";

let RateUserStudentForm = ({
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
  touched,
  values
}) => {
  const disableSubmission = isFormValid({ isSubmitting, errors, touched });
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
          onChange={e => {
            handleSelectChange(e, handleChangeValue);
          }}
          options={schools}
          searchbarPlaceholder="Search for a school..."
          value={values.school}
        />
        <SmartSelect
          multiple={false}
          name="major"
          onChange={e => {
            handleSelectChange(e, handleChangeValue);
          }}
          options={majors}
          searchbarPlaceholder="Search for a major..."
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

RateUserStudentForm.propTypes = {
  errors: PropTypes.object,
  handleBlur: PropTypes.func,
  handleChange: PropTypes.func,
  handleChangeValue: PropTypes.func,
  handleSelectChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  isSubmitting: PropTypes.bool,
  majors: PropTypes.array,
  ratingCategories: PropTypes.array,
  schools: PropTypes.array,
  touched: PropTypes.object,
  values: PropTypes.object
};

RateUserStudentForm = Formik({
  mapPropsToValues: props => ({
    comment: "",
    email: "",
    major: props.major,
    name: "",
    recommend: false,
    school: props.school,
    DRFJY9jd: "",
    j84WAR77: "",
    wXe02QBg: "",
    zoQCOOJO: "",
    Gb1tXreK: "",
    TrK3zUiV: ""
  }),
  validationSchema: Yup.object().shape({
    comment: Yup.string().required(),
    email: Yup.string().email().lowercase().required(),
    major: Yup.string().max(10).required(),
    name: Yup.string().required(),
    recommend: Yup.boolean().required(),
    school: Yup.string().max(10).required(),
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
})(RateUserStudentForm);

export default RateUserStudentForm;
