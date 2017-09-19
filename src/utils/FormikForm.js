import React from "react";
import styled from "styled-components";
import PreloaderScreen from "../components/PreloaderScreen";
import { ContentBlock, Button } from "../components/f7";
import { Formik } from "formik";
import { get } from "lodash";

/**
 * Page
 */
const Page = ({ children }) => (
  <div className="page">
    <div className="page-content">{children}</div>
  </div>
);

/**
 * FormSubmittedScreen
 */

const StyledContentBlock = styled(ContentBlock)`
  margin: 0 !important;
  position: relative;
  height: 97.5%;
`;

const StyledButton = styled(Button)`
  position: absolute !important;
  bottom: 15px;
  width: 90%;
`;

const Message = styled.div`
  position: absolute;
  top: 30%;
  font-size: 20px;
  text-align: center;
  width: 90%;
`;

const FormSubmittedScreen = ({ onClick, children }) => (
  <StyledContentBlock>
    <Message>{children}</Message>
    <StyledButton type="button" onClick={onClick} big fill>
      Back
    </StyledButton>
  </StyledContentBlock>
);

class Form extends React.Component {
  goBack = () => {
    const formik = this.props;
    const submitStatus = get(formik, "status.submission", null);

    if (submitStatus && submitStatus.success) {
      formik.setStatus({});
      formik.resetForm();
    }

    if (submitStatus && !submitStatus.success) {
      formik.setStatus({});
      formik.setSubmitting(false);
    }
  };

  render() {
    const formik = this.props;
    const submitStatus = get(formik, "status.submission", null);

    if (submitStatus && submitStatus.success) {
      return (
        <Page>
          <FormSubmittedScreen onClick={this.goBack}>
            The information was successfully submitted!
          </FormSubmittedScreen>
        </Page>
      );
    }

    if (submitStatus && !submitStatus.success) {
      return (
        <Page>
          <FormSubmittedScreen onClick={this.goBack}>
            Looks like something went wrong! Go back and try again.
          </FormSubmittedScreen>
        </Page>
      );
    }

    return formik.isSubmitting ? (
      <Page>
        <PreloaderScreen size="big" />
      </Page>
    ) : (
      <div>{this.props.children(this.props)}</div>
    );
  }
}

const FormikForm = Formik({
  mapPropsToValues: props => props.mapPropsToValues(props),
  validationSchema: props => props.validationSchema,
  handleSubmit: (values, formikBag) => {
    const { props, setSubmitting, setStatus } = formikBag;
    const submitForm = props.submitForm;

    setSubmitting(true);

    submitForm(values, formikBag)
      .then(response => {
        setStatus({
          submission: { success: true }
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
})(Form);

export default FormikForm;
