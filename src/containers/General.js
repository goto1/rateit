import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchSchoolsIfNeeded, fetchMajorsIfNeeded } from "../actions";
import { submitGeneralForm as submitForm } from "../utils/API";
import Yup from "yup";
import { reduce, isEqual, isNil, filter } from "lodash";
import * as FormUtils from "../utils/FormUtils";
import FormikForm from "../utils/FormikForm";
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
  getFormikProps = () => ({
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
    submitForm: (values, { props }) => {
      const userId = props.userId;
      const formData = filter(
        {
          ...values,
          major: !isEqual(props.major, props.initialValues.major)
            ? values.major
            : null,
          school: !isEqual(props.school, props.initialValues.school)
            ? values.school
            : null
        },
        item => (item === "" ? false : isNil(item) ? false : true)
      );

      return submitForm(userId, formData);
    },
    ...this.props
  });

  render() {
    return (
      <FormikForm {...this.getFormikProps()}>
        {formik => (
          <form onSubmit={formik.handleSubmit}>
            <AccountInformation {...formik} />
            <SchoolInformation {...formik} />
            <PasswordReset {...formik} />
            <ContentBlock>
              <Button
                big
                color="green"
                disabled={
                  FormUtils.shouldDisableSubmission(formik) ||
                  formik.values.pass !== formik.values.pass_repeat
                }
                fill
                type="submit"
              >
                Submit Changes
              </Button>
            </ContentBlock>
          </form>
        )}
      </FormikForm>
    );
  }
}

UserInformation.propTypes = {
  handleMultipleSelect: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired,
  majors: PropTypes.array.isRequired,
  schools: PropTypes.array.isRequired,
  userId: PropTypes.string.isRequired
};

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
        {isDoneLoading && (
          <UserInformation
            handleMultipleSelect={this.handleMultipleSelect}
            {...formProps}
          />
        )}
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
