import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.button`
  background-color: #369947 !important;
  color: #f1f1f5 !important;
  width: 90% !important;
  margin: 10px auto 35px auto !important;
  text-transform: uppercase;
  border: none !important;
  &:focus {
    outline: none !important;
  }
  &:disabled {
    opacity: 0.65 !important;
  }
`;

const SubmitButton = ({ disabled, onClick, children }) =>
  <Wrapper
    className="button button-big"
    disabled={disabled}
    onClick={onClick}
    type="button"
  >
    {children}
  </Wrapper>;

SubmitButton.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired
};

// const SubmitButtonCustomElement = styled.button.attrs({
//   type: "submit"
// })`
//   background-color: #369947 !important;
//   color: #F1F1F5 !important;
//   width: 90% !important;
//   margin: 10px auto 35px auto !important;
//   text-transform: uppercase;
//   border: none !important;
//   &:focus { outline: none !important; }
//   &:disabled { opacity: 0.65 !important; }
// `;

// // <SubmitButtonCustom
// //   text='Submit'
// //   disabled={false}
// //   onClick={() => { /* do something */ }}
// // />
// const SubmitButtonCustom = ({ text, disabled, onClick }) =>
//   <SubmitButtonCustomElement
//     className="button button-big"
//     disabled={disabled}
//     onClick={onClick}
//   >
//     {text}
//   </SubmitButtonCustomElement>;

// SubmitButtonCustom.propTypes = {
//   text: PropTypes.string.isRequired,
//   disabled: PropTypes.bool.isRequired,
//   onClick: PropTypes.func.isRequired
// };

export default SubmitButton;
