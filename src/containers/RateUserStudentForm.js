import React from "react";
import PropTypes from "prop-types";
import RatingCategoryInput from "../components/RatingCategoryInput";
import { FormSection, StyledContentBlock } from "./RateUser";
import Yup from "yup";
import {
  Button,
  ContentBlock,
  InputElement,
  RadioInput,
  SmartSelect,
  Textarea
} from "../components/f7";
import UserForm from "./UserForm";

class StudentForm extends React.Component {
  renderRatingCategoriesList = () => {
    const { ratingCategories, handleChange, handleBlur } = this.props;

    return ratingCategories.map(cat => (
      <RatingCategoryInput
        key={cat.id}
        onChange={handleChange}
        onBlur={handleBlur}
        {...cat}
      />
    ));
  };

  render() {
    const props = this.props;
    const { values, errors, touched } = this.props;
    const ratingCategoriesList = this.renderRatingCategoriesList();

    return (
      <form onSubmit={props.handleSubmit}>
        <FormSection title="Student Information">
          <InputElement
            icon="account_circle"
            name="name"
            onBlur={props.handleBlur}
            onChange={props.handleChange}
            placeholder="John Doe"
            type="text"
            valid={errors.name && touched.name && false}
            value={values.name}
          />
          <InputElement
            icon="email"
            name="email"
            onBlur={props.handleBlur}
            onChange={props.handleChange}
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
            onChange={e => props.handleSelectChange(e, props.handleChangeValue)}
            options={props.schools}
            searchbarPlaceholder="Search for a school..."
            value={values.school}
          />
          <SmartSelect
            multiple={false}
            name="major"
            onChange={e => props.handleSelectChange(e, props.handleChangeValue)}
            options={props.majors}
            searchbarPlaceholder="Search for a major..."
            value={values.major}
          />
        </FormSection>

        {ratingCategoriesList}

        <FormSection title="Additional Information" margin={5}>
          <Textarea
            icon="comment"
            name="comment"
            onBlur={props.handleBlur}
            onChange={props.handleChange}
            placeholder="Your comment here..."
            value={values.comment}
          />
          <RadioInput
            icon="done"
            name="recommend"
            onChange={props.handleChange}
          />
        </FormSection>

        {!props.validForm && (
          <StyledContentBlock>Please fill out all fields</StyledContentBlock>
        )}

        <ContentBlock>
          <Button
            type="submit"
            color="green"
            disabled={props.disableSubmission}
            big
            fill
          >
            Submit
          </Button>
        </ContentBlock>
      </form>
    );
  }
}

const formikOptions = {
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
    email: Yup.string()
      .email()
      .lowercase()
      .required(),
    major: Yup.string()
      .max(10)
      .required(),
    name: Yup.string().required(),
    recommend: Yup.boolean().required(),
    school: Yup.string()
      .max(10)
      .required(),
    DRFJY9jd: Yup.string().required(),
    j84WAR77: Yup.string().required(),
    wXe02QBg: Yup.string().required(),
    zoQCOOJO: Yup.string().required(),
    Gb1tXreK: Yup.string().required(),
    TrK3zUiV: Yup.string().required()
  })
};

const RateUserStudentForm = UserForm(StudentForm, formikOptions);

export default RateUserStudentForm;
