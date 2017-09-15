import React from "react";
import PropTypes from "prop-types";
import UserForm from "./UserForm";
import RatingCategoryInput from "../components/RatingCategoryInput";
import { FormSection, StyledContentBlock } from "./RateUser";
import Yup from "yup";
import {
  Button,
  ContentBlock,
  InputElement,
  SmartSelect
} from "../components/f7";

class ProfessorForm extends React.Component {
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

        {!props.validForm && (
          <StyledContentBlock>Please fill out all fields</StyledContentBlock>
        )}

        <ContentBlock>
          <Button
            big
            color="green"
            disabled={props.disableSubmission}
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

const formikOptions = {
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
  })
};

const RateUserProfessorForm = UserForm(ProfessorForm, formikOptions);

export default RateUserProfessorForm;
