import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Icon from "./Icon";
import capitalize from "lodash/capitalize";

const LabelTitleWrapper = styled.div.attrs({
  className: "item-title label"
})`
  flex-grow: 1;
`;

const ItemInputWrapper = styled.div.attrs({
  className: "item-input"
})`
  text-align: right;
  width: auto !important;
`;

const RadioInput = ({ icon, name, onChange, className }) => {
  const classNames = `item-content ${className ? className : ""}`.trim();
  return (
    <div className={classNames}>
      <div className="item-media">
        <Icon material={icon} />
      </div>
      <div className="item-inner">
        <LabelTitleWrapper>
          {capitalize(name)}
        </LabelTitleWrapper>
        <ItemInputWrapper>
          <label className="label-switch">
            <input
              type="checkbox"
              name={name.toLowerCase()}
              onChange={onChange}
            />
            <div className="checkbox" />
          </label>
        </ItemInputWrapper>
      </div>
    </div>
  );
};

RadioInput.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default RadioInput;
