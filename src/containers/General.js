import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchSchoolsIfNeeded, fetchMajorsIfNeeded } from "../actions";
import { submitGeneralForm as submitForm } from "../utils/API";
import { Formik } from "formik";
import Yup from "yup";
import { get, reduce, isEqual, isNil, filter } from "lodash";
import * as FormUtils from "../utils/FormUtils";
import PreloaderScreen from "../components/PreloaderScreen";
import SubmittedFormScreen from "../components/SubmittedFormScreen";
import FormFieldLabel from "../components/FormFieldLabel";
import {
  Button,
  ContentBlock,
  InputElement,
  List,
  ListBlock,
  NavCenter,
  NavLeft,
  Navbar,
  SmartSelect
} from "../components/f7";
import { Page } from "framework7-react";

export const AccountInformation = ({
  errors,
  handleBlur,
  handleChange,
  touched,
  values
}) => {
  const emailFieldValid = FormUtils.isFormFieldValid("email", {
    touched,
    errors
  });
  return (
    <div>
      <FormFieldLabel
        description="Account information"
        error="Invalid email address"
        valid={emailFieldValid}
      />
      <List inset>
        <InputElement
          icon="email"
          name="email"
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="example@gmail.com"
          type="email"
          valid={emailFieldValid}
          value={values.email}
        />
      </List>
    </div>
  );
};

AccountInformation.propTypes = {
  errors: PropTypes.object.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  touched: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired
};

export const SchoolInformation = ({
  handleMultipleSelect,
  majors,
  schools,
  setFieldTouched,
  setFieldValue,
  values
}) => {
  const smartSelectsValid = values.school.length > 0 && values.major.length > 0;
  return (
    <div>
      <FormFieldLabel
        description="School information"
        error="School & major can't be blank"
        valid={smartSelectsValid}
      />
      <ListBlock>
        <SmartSelect
          name="school"
          value={values.school}
          options={schools}
          multiple
          searchbarPlaceholder="Search for a school..."
          onChange={e =>
            handleMultipleSelect(e, setFieldValue, setFieldTouched)}
        />
        <SmartSelect
          name="major"
          value={values.major}
          options={majors}
          multiple
          searchbarPlaceholder="Search for a major..."
          onChange={e =>
            handleMultipleSelect(e, setFieldValue, setFieldTouched)}
        />
      </ListBlock>
    </div>
  );
};

SchoolInformation.propTypes = {
  handleMultipleSelect: PropTypes.func.isRequired,
  majors: PropTypes.array.isRequired,
  schools: PropTypes.array.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired
};

export const PasswordReset = ({
  errors,
  handleBlur,
  handleChange,
  touched,
  values
}) => {
  const passFieldValid = FormUtils.isFormFieldValid("pass", {
    touched,
    errors
  });
  const formFieldsValid =
    touched.pass_repeat === undefined
      ? true
      : values.pass === values.pass_repeat ? true : false;
  return (
    <div>
      <FormFieldLabel
        description="Password reset"
        error="Passwords are not matching"
        valid={formFieldsValid}
      />
      <List inset>
        <InputElement
          icon="lock_outline"
          name="pass"
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="New Password"
          type="password"
          valid={passFieldValid}
          value={values.pass}
        />
        <InputElement
          icon="lock_outline"
          name="pass_repeat"
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="Repeat Password"
          type="password"
          valid={formFieldsValid}
          value={values.pass_repeat}
        />
      </List>
    </div>
  );
};

PasswordReset.propTypes = {
  errors: PropTypes.object.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  touched: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired
};

class UserInformation extends React.Component {
  goBack = () => {
    const props = this.props;
    const submitStatus = get(props, "status.submission", null);

    if (submitStatus && submitStatus.success) {
      props.setStatus({});
      props.resetForm();
    }

    if (submitStatus && !submitStatus.success) {
      props.setStatus({});
      props.setSubmitting(false);
    }
  };

  render() {
    const props = { ...this.props };
    const submitStatus = get(props, "status.submission", null);
    const disableSubmission =
      FormUtils.shouldDisableSubmission(props) ||
      props.values.pass !== props.values.pass_repeat;

    if (submitStatus && submitStatus.success) {
      return (
        <SubmittedFormScreen buttonName="Back" onClick={this.goBack}>
          Your account information was changed successfully!
        </SubmittedFormScreen>
      );
    }

    if (submitStatus && !submitStatus.success) {
      return (
        <SubmittedFormScreen buttonName="Back" onClick={this.goBack}>
          Looks like something went wrong! Please go back and try again.
        </SubmittedFormScreen>
      );
    }

    return props.isSubmitting
      ? <PreloaderScreen size="big" />
      : <form onSubmit={props.handleSubmit}>
          <AccountInformation {...props} />
          <SchoolInformation {...props} />
          <PasswordReset {...props} />
          <ContentBlock>
            <Button
              big
              color="green"
              disabled={disableSubmission}
              fill
              type="submit"
            >
              Submit Changes
            </Button>
          </ContentBlock>
        </form>;
  }
}

UserInformation.propTypes = {
  errors: PropTypes.object.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleChangeValue: PropTypes.func.isRequired,
  handleMultipleSelect: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  majors: PropTypes.array.isRequired,
  schools: PropTypes.array.isRequired,
  touched: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired
};

UserInformation = Formik({
  mapPropsToValues: props => ({
    email: props.initialValues.email,
    school: props.initialValues.school,
    major: props.initialValues.major,
    pass: props.initialValues.pass,
    pass_repeat: props.initialValues.pass_repeat
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string().email(),
    school: Yup.array().required(),
    major: Yup.array().required(),
    pass: Yup.string(),
    pass_repeat: Yup.string().when("pass", {
      is: val => (val === undefined ? false : val.length > 0 ? true : false),
      then: Yup.string().required(),
      otherwise: Yup.string()
    })
  }),
  handleSubmit: (values, { props, setErrors, setSubmitting, setStatus }) => {
    const userId = props.userId;
    const formData = filter(
      {
        ...values,
        major: !isEqual(values.major, props.initialValues.major)
          ? values.major
          : null,
        school: !isEqual(values.school, props.initialValues.school)
          ? values.school
          : null
      },
      item => (item === "" ? false : isNil(item) ? false : true)
    );

    setSubmitting(true);

    submitForm(userId, formData)
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
            error: "Could not submit the form."
          }
        });
      });
  }
})(UserInformation);

class General extends React.Component {
  componentDidMount() {
    const props = this.props;

    props.fetchSchoolsIfNeeded();
    props.fetchMajorsIfNeeded();
  }

  handleMultipleSelect = (e, setFieldValue, setFieldTouched) => {
    const { name, options } = e.target;
    const selected = [...options]
      .filter(option => option.selected)
      .map(option => option.value);

    setFieldValue(name, selected);
    setFieldTouched(name, true);
  };

  getFormProps = () => {
    const { auth, schools, majors } = this.props;
    const selectedMajor = auth.info ? auth.info.majors.map(m => m.id) : [];
    const selectedSchool = auth.info ? auth.info.schools.map(s => s.id) : [];
    const schoolOptions = filter(schools, i => typeof i === "object");
    const majorOptions = filter(majors, i => typeof i === "object");

    return {
      majors: majorOptions,
      schools: schoolOptions,
      userId: auth.info.id,
      initialValues: {
        email: "",
        school: selectedSchool,
        major: selectedMajor,
        pass: "",
        pass_repeat: ""
      }
    };
  };

  render() {
    const formProps = this.getFormProps();

    const isDoneLoading = reduce(
      formProps,
      (res, val, key) => res && val.length !== 0,
      true
    );

    return (
      <Page>
        <Navbar>
          <NavLeft backLink="Back" sliding />
          <NavCenter sliding>General</NavCenter>
        </Navbar>
        {isDoneLoading &&
          <UserInformation
            handleMultipleSelect={this.handleMultipleSelect}
            {...formProps}
          />}
      </Page>
    );
  }
}

General.propTypes = {
  fetchMajorsIfNeeded: PropTypes.func.isRequired,
  fetchSchoolsIfNeeded: PropTypes.func.isRequired,
  majors: PropTypes.object.isRequired,
  schools: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  schools: state.schools,
  majors: state.majors
});

const mapDispatchToProps = dispatch => ({
  fetchSchoolsIfNeeded: () => dispatch(fetchSchoolsIfNeeded()),
  fetchMajorsIfNeeded: () => dispatch(fetchMajorsIfNeeded())
});

export default connect(mapStateToProps, mapDispatchToProps)(General);
