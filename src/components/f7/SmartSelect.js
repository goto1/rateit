import React from "react";
import PropTypes from "prop-types";
import capitalize from "lodash/capitalize";
import head from "lodash/head";

const SmartSelect = ({
  name,
  options,
  selected = [],
  multiple = false,
  searchbarPlaceholder,
  onChange
}) => {
  const selectedOptions = multiple === false ? head(selected) : selected;
  return (
    <li>
      <a
        className="item-link smart-select"
        data-searchbar="true"
        data-searchbar-placeholder={searchbarPlaceholder}
      >
        <select
          value={selectedOptions}
          name={name}
          onChange={onChange}
          multiple={multiple}
        >
          {options.map(option =>
            <option
              key={option.id}
              value={option.id}
              data-display-as={option.abbreviation}
            >
              {option.name}
            </option>
          )}
        </select>
        <div className="item-content">
          <div className="item-inner">
            <div className="item-title">
              {capitalize(name)}
            </div>
            <div className="item-after" />
          </div>
        </div>
      </a>
    </li>
  );
};

// const SmartSelect = ({
//   name,
//   options,
//   selected = [],
//   multiple = false,
//   searchbarPlaceholder,
//   onChange
// }) =>
//   <li>
//     <a
//       className="item-link smart-select"
//       data-searchbar="true"
//       data-searchbar-placeholder={searchbarPlaceholder}
//     >
//       <select
//         value={selected}
//         name={name}
//         onChange={onChange}
//         multiple={multiple}
//       >
//         {options.map(option =>
//           <option
//             key={option.id}
//             value={option.id}
//             data-display-as={option.abbreviation}
//           >
//             {option.name}
//           </option>
//         )}
//       </select>
//       <div className="item-content">
//         <div className="item-inner">
//           <div className="item-title">
//             {capitalize(name)}
//           </div>
//           <div className="item-after" />
//         </div>
//       </div>
//     </a>
//   </li>;

SmartSelect.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  multiple: PropTypes.bool,
  selected: PropTypes.array,
  searchbarPlaceholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SmartSelect;
