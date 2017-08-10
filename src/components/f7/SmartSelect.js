import React from "react";
import PropTypes from "prop-types";
import capitalize from "lodash/capitalize";

class SmartSelect extends React.Component {
  renderOptions = () =>
    this.props.options.map(option =>
      <option
        key={option.id}
        value={option.id}
        data-display-as={option.abbreviation}
      >
        {option.name}
      </option>
    );

  render() {
    const {
      multiple,
      name,
      onBlur,
      onChange,
      searchbarPlaceholder,
      value
    } = this.props;
    const options = this.renderOptions();
    const title = capitalize(name);
    return (
      <li>
        <a
          data-searchbar-placeholder={searchbarPlaceholder}
          data-searchbar="true"
          className="item-link smart-select"
        >
          <select
            multiple={multiple}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          >
            {options}
          </select>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">
                {title}
              </div>
              <div className="item-after" />
            </div>
          </div>
        </a>
      </li>
    );
  }
}

SmartSelect.propTypes = {
  multiple: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array,
  searchbarPlaceholder: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.array, PropTypes.string])
};

SmartSelect.defaultProps = {
  multiple: false,
  options: []
};

export default SmartSelect;
