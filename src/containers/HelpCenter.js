import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Yup from "yup";
import { connect } from "react-redux";
import FormFieldLabel from "../components/FormFieldLabel";
import FormikForm from "../utils/FormikForm";
import { submitContactForm as submitForm } from "../utils/API";
import { isInputFieldValid, shouldDisableSubmission } from "../utils/FormUtils";
import {
  Button,
  ContentBlock,
  InputElement,
  List,
  NavCenter,
  NavLeft,
  Navbar,
  Textarea
} from "../components/f7";
import { Page } from "framework7-react";

const StyledList = styled(List)`margin-top: 15px !important;`;

class ContactForm extends React.Component {
  getFormikProps = () => ({
    ...this.props,
    mapPropsToValues: props => ({
      title: "",
      message: ""
    }),
    validationSchema: Yup.object().shape({
      title: Yup.string().required(),
      message: Yup.string().required()
    }),
    submitForm: (values, { props }) => {
      const userId = props.auth.info.id;

      return submitForm(userId, values);
    }
  });

  render() {
    return (
      <FormikForm {...this.getFormikProps()}>
        {formik => (
          <div>
            <FormFieldLabel
              description="Contact form"
              error="Both fields need to be filled"
              valid={
                isInputFieldValid("title", formik) &&
                isInputFieldValid("message", formik)
              }
            />
            <form onSubmit={formik.handleSubmit}>
              <StyledList inset>
                <InputElement
                  icon="info"
                  name="title"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  placeholder="Title..."
                  type="text"
                  valid={isInputFieldValid("title", formik)}
                  value={formik.values.title}
                />
                <Textarea
                  icon="comment"
                  name="message"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  placeholder="Your message here..."
                  valid={isInputFieldValid("message", formik)}
                  value={formik.values.message}
                />
              </StyledList>
              <ContentBlock>
                <Button
                  big
                  color="green"
                  disabled={shouldDisableSubmission(formik)}
                  fill
                  type="submit"
                >
                  Submit
                </Button>
              </ContentBlock>
            </form>
          </div>
        )}
      </FormikForm>
    );
  }
}

const Container = styled.div`height: 100% !important;`;

const HelpCenter = props => (
  <Page>
    <Container>
      <Navbar>
        <NavLeft backLink="Back" sliding />
        <NavCenter sliding>Help Center</NavCenter>
      </Navbar>
      <ContactForm {...props} />
    </Container>
  </Page>
);

HelpCenter.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(HelpCenter);

