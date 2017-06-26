import React from "react";
import PropTypes from "prop-types";
import capitalize from "lodash/capitalize";

// <SmartSelectCustom
//   name="name"
//   options={[{}, {}]}
//   selected={['john', 'jeff']}
//   searchbarPlaceholder="Search names"
//   onChange={event => console.log(event)}
// />
const SmartSelectCustom = ({
  name,
  options,
  selected,
  searchbarPlaceholder,
  onChange
}) =>
  <li>
    <a
      href="#"
      className="item-link smart-select"
      data-searchbar="true"
      data-searchbar-placeholder={searchbarPlaceholder}
    >
      <select value={selected} name={name} onChange={onChange} multiple>
        {options.map(option =>
          <option key={option.id} value={option.id}>{option.name}</option>
        )}
      </select>
      <div className="item-content">
        <div className="item-inner">
          <div className="item-title">{capitalize(name)}</div>
          <div className="item-after" />
        </div>
      </div>
    </a>
  </li>;

SmartSelectCustom.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  selected: PropTypes.array.isRequired,
  searchbarPlaceholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SmartSelectCustom;
