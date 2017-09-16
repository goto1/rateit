import React from "react";
import styled from "styled-components";
import { Formik } from "formik";
import Yup from "yup";
import { get, isUndefined } from "lodash";
import { isFormFieldValid } from "../utils/FormUtils";
import { filterObjectPropertiesByKey } from "../utils/GeneralUtils";

const ErrorMessage = styled.div`
  color: #ff0000;
  padding: 0 15px;
  height: 19px;
  text-transform: uppercase;
  transition: all 0.75s ease-in-out;
  transform: ${props =>
    !props.invalid ? "translateX(100%)" : "translateX(0)"};
  opacity: ${props => (!props.invalid ? "0" : "1")};
`;

const List = ({ children }) => (
  <div className="list-block">
    <ul>{children}</ul>
  </div>
);

const FormLabel = styled.div.attrs({
  className: "item-title label"
})`
  color: ${props => (props.valid ? "#000" : "#FF0000")};
`;

const FormInput = ({
  name,
  type = "text",
  placeholder,
  handleChange,
  handleBlur,
  values
}) => (
  <div className="item-input">
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={handleChange}
      onBlur={handleBlur}
      value={values[name]}
    />
  </div>
);

const ListItem = ({ children }) => (
  <li className="item-content">
    <div className="item-inner">{children}</div>
  </li>
);

const SubmitButton = styled.button.attrs({
  type: "submit",
  className: "item-link list-button"
})`
  background: none !important;
  border: none !important;
  font-size: 17.5px !important;
  position: absolute;
  left: 35.5% !important;
`;

const LoginScreenContainer = styled.div.attrs({
  className: "login-screen"
})`
  display: block !important;
  top: -534px !important;
`;

const StyledListItemElement = styled.li`height: 35px;`;

class LoginScreen extends React.Component {
  render() {
    const props = this.props;
    const { touched, errors } = this.props;

    const submitStatus = get(props, "status.submission", null);

    const inputProps = filterObjectPropertiesByKey(props, [
      "handleBlur",
      "handleChange",
      "values"
    ]);

    const validUsername = isFormFieldValid("username", props);
    const validPassword = isFormFieldValid("password", props);

    const errorMessage = errors.username ? errors.username : errors.password;

    return (
      <LoginScreenContainer>
        <div className="view">
          <div className="page">
            <div className="page-content login-screen-content">
              <div className="login-screen-title">RateIt</div>
              <form onSubmit={props.handleSubmit}>
                <ErrorMessage invalid={!validUsername || !validPassword}>
                  {errorMessage}
                </ErrorMessage>

                <List>
                  <ListItem>
                    <FormLabel valid={validUsername}>Username</FormLabel>
                    <FormInput
                      name="username"
                      placeholder="user@school.edu"
                      {...inputProps}
                    />
                  </ListItem>
                  <ListItem>
                    <FormLabel valid={validPassword}>Password</FormLabel>
                    <FormInput
                      name="password"
                      type="password"
                      placeholder="*********"
                      {...inputProps}
                    />
                  </ListItem>
                </List>

                <div className="list-block">
                  <ul>
                    <StyledListItemElement>
                      <SubmitButton>Sign In</SubmitButton>
                    </StyledListItemElement>
                  </ul>
                  <div className="list-block-label">
                    Don't have an account? <a href="#">Register</a> now!
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </LoginScreenContainer>
    );
  }
}

LoginScreen = Formik({
  mapPropsToValues: props => ({
    username: "",
    password: ""
  }),
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .email("Invalid username")
      .required("Username is required"),
    password: Yup.string().required("Password is required")
  }),
  handleSubmit: (values, { setSubmitting, setStatus }) => {
    console.log(values);
  }
})(LoginScreen);

export default LoginScreen;
