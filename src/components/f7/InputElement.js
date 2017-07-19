import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Icon from "./Icon";
import pick from "lodash/pick";

const InputWrapper = styled.div`margin-left: 15px;`;

const InputElement = props => {
  const { icon } = props;
  const inputAttrs = pick(props, [
    "id",
    "name",
    "type",
    "value",
    "placeholder",
    "onChange"
  ]);
  return (
    <div className="item-content">
      <div className="item-media">
        <Icon material={icon} />
      </div>
      <InputWrapper className="item-input">
        <input {...inputAttrs} />
      </InputWrapper>
    </div>
  );
};

InputElement.propTypes = {
  icon: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default InputElement;
