import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import RatingCategoryInput from "../components/RatingCategoryInput";
import { FormSection, StyledContentBlock } from "./RateUser";
import { Formik } from "formik";
import Yup from "yup";
import { isEmpty } from "lodash";
import {
  Button,
  ContentBlock,
  InputElement,
  SmartSelect
} from "../components/f7";

import { submitRateProfessorForm as submitForm } from "../utils/API";

class RateUserProfessorForm extends React.Component {
  renderRatingCategoriesList = () => {
    const { ratingCategories, handleChange, handleBlur } = this.props;

    return ratingCategories.map(cat =>
      <RatingCategoryInput
        key={cat.id}
        onChange={handleChange}
        onBlur={handleBlur}
        {...cat}
      />
    );
  };

  render() {
    const props = this.props;
    const { errors, touched, values } = this.props;
    const ratingCategoriesList = this.renderRatingCategoriesList();

    const validForm = isEmpty(errors);
    const disableSubmission =
      !validForm || props.isSubmitting || isEmpty(props.touched);

    if (props.status) {
      console.log(props.status);
    }

    return (
      <form onSubmit={props.handleSubmit}>
        <FormSection title="Professor Information">
          <InputElement
            icon="account_circle"
            name="name"
            onBlur={props.handleBlur}
            onChange={props.handleChange}
            placeholder="John Doe"
            type="text"
            valid={!errors.name && touched.name && true}
            value={values.name}
          />
        </FormSection>

        <FormSection title="School Information">
          <SmartSelect
            multiple={false}
            name="school"
            onBlur={props.handleBlur}
            onChange={e => props.handleSelectChange(e, props.handleChangeValue)}
            options={props.schools}
            searchbarPlaceholder="Search for a school..."
            value={values.school}
          />
          <SmartSelect
            multiple={false}
            name="major"
            onBlur={props.handleBlur}
            onChange={e => props.handleSelectChange(e, props.handleChangeValue)}
            options={props.majors}
            searchbarPlaceholder="Search for a major..."
            value={values.major}
          />
        </FormSection>

        {ratingCategoriesList}

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
  }
}

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
  handleSubmit: (values, { props, setSubmitting, setStatus }) => {
    const authUser = props.auth.info;
    const formData = {
      ...values,
      authorId: authUser.id
    };

    console.log(formData);

    setSubmitting(true);

    submitForm(authUser.id, formData)
      .then(response => {
        setStatus({
          submission: {
            success: true,
            error: ""
          }
        });
      })
      .catch(error => {
        setStatus({
          submission: {
            success: false,
            error
          }
        });
      });
  }
})(RateUserProfessorForm);

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(RateUserProfessorForm);
