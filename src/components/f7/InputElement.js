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
    "type",
    "value",
    "placeholder",
    "onChange"
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
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  valid: PropTypes.bool,
  onChange: PropTypes.func
};

InputElement.defaultProps = {
  valid: true
};

export default InputElement;
