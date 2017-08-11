import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Icon from "./Icon";
import capitalize from "lodash/capitalize";

export const LabelTitleWrapper = styled.div.attrs({
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

const RadioInput = ({ className, icon, name, onBlur, onChange, value }) => {
  const classNames = `item-content ${className ? className : ""}`.trim();
  const title = capitalize(name);
  return (
    <div className={classNames}>
      <div className="item-media">
        <Icon material={icon} />
      </div>
      <div className="item-inner">
        <LabelTitleWrapper>
          {title}
        </LabelTitleWrapper>
        <ItemInputWrapper>
          <label className="label-switch">
            <input
              name={name.toLowerCase()}
              onBlur={onBlur}
              onChange={onChange}
              type="checkbox"
              value={value}
            />
            <div className="checkbox" />
          </label>
        </ItemInputWrapper>
      </div>
    </div>
  );
};

RadioInput.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.bool
};

export default RadioInput;
