import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Icon from "./Icon";
import pick from "lodash/pick";

const InputWrapper = styled.div`
  margin-left: 15px;
  input {
    color: ${props => (props.valid !== true ? "red !important" : "black")};
  }
`;

export const StyledIcon = styled(Icon)`
  position: absolute !important;
  right: 6px;
  opacity: .7;
  color: red;
  font-size: 20px;
`;

const Container = styled.div.attrs({
  className: "item-content"
})`
  position: relative;
`;

const InputElement = props => {
  const { icon, valid } = props;
  const inputAttrs = pick(props, [
    "id",
    "name",
    "onBlur",
    "onChange",
    "placeholder",
    "type",
    "value"
  ]);
  return (
    <Container>
      {!valid && <StyledIcon material="warning" />}
      <div className="item-media">
        <Icon material={icon} />
      </div>
      <InputWrapper valid={valid} className="item-input">
        <input {...inputAttrs} />
      </InputWrapper>
    </Container>
  );
};

InputElement.propTypes = {
  icon: PropTypes.string.isRequired,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  valid: PropTypes.bool,
  value: PropTypes.string
};

InputElement.defaultProps = {
  valid: true
};

export default InputElement;
