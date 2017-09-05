import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Icon from "./Icon";
import pick from "lodash/pick";

const StyledIcon = styled(Icon)`
  transition: transform .75s ease-in-out;
  transform: ${props => (!props.valid ? "scale(1.15)" : "")};
  color: ${props => (!props.valid ? "#FF0000" : "#000")};
`;

const Container = styled.div.attrs({
  className: "item-content"
})`
  position: relative;
`;

const InputWrapper = styled.div`margin-left: 15px;`;

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
      <div className="item-media">
        <StyledIcon material={icon} valid={valid} />
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
