import React from "react";
import PropTypes from "prop-types";
import RatingCategoryInput from "../components/RatingCategoryInput";
import { FormSection, StyledContentBlock } from "./RateUser";
import { Formik } from "formik";
import Yup from "yup";
import { isSubmissionDisabled } from "../utils/FormUtils";
import {
  Button,
  ContentBlock,
  InputElement,
  SmartSelect
} from "../components/f7";

let RateUserProfessorForm = ({
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
  const disableSubmission = isSubmissionDisabled({
    isSubmitting,
    errors,
    touched
  });
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

RateUserProfessorForm.propTypes = {
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

RateUserProfessorForm = Formik({
  mapPropsToValues: props => ({
    major: props.major,
    name: "",
    school: props.school,
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
})(RateUserProfessorForm);

export default RateUserProfessorForm;
