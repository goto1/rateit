import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import pick from "lodash/pick";
import { Card, CardContent, Icon } from "./f7";

const RadioInputWrapper = styled.input.attrs({
  type: "radio"
})`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  margin: 0;
  cursor: pointer;
`;

export const RadioInput = props => <RadioInputWrapper {...props} />;

RadioInput.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

RadioInput.defaultProps = {
  checked: false
};

const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border: 2px solid ${props => (props.checked ? props.color : "black")};
  border-radius: 50%;
  label {
    font-weigth: 600;
    font-size: 17.5px;
    border-color: ${props => (props.checked ? props.color : "black")};
  }
`;

export const Label = ({ id, value, checked, color }) =>
  <LabelWrapper checked={checked} color={color}>
    <label htmlFor={id}>
      {value}
    </label>
  </LabelWrapper>;

Label.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  checked: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired
};

Label.defaultProps = {
  checked: false
};

const RatingCircleWrapper = styled.div`
  position: relative;
  height: 25px;
  width: 25px;
  margin: 5px;
  transition: transform 300ms ease;
  transform: ${props => (props.checked ? "scale(1.15, 1.15)" : "")};
`;

export const RatingCircle = props => {
  const { checked, color } = props;
  const inputProps = pick(props, [
    "id",
    "value",
    "name",
    "checked",
    "onChange"
  ]);
  return (
    <RatingCircleWrapper color={color} checked={checked}>
      <RadioInput {...inputProps} />
      <Label {...props} />
    </RatingCircleWrapper>
  );
};

RatingCircle.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

const RatingCirclesContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export class RatingCircles extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: "0" };
  }

  setChecked = e => {
    const event = { ...e };
    this.setState((prevState, props) => {
      this.props.onChange(event);
      return { checked: event.target.value };
    });
  };

  render() {
    const colors = ["D91518", "E6665B", "DEB21C", "BCC75E", "A1BA37"];
    const { name } = this.props;
    return (
      <RatingCirclesContainer>
        {colors.map((color, index) => {
          const value = ++index;
          const checked = +this.state.checked === value;
          return (
            <RatingCircle
              key={index}
              id={`${value}_${name}`}
              name={name}
              value={value}
              checked={checked}
              onChange={this.setChecked}
              color={`#${color}`}
            />
          );
        })}
      </RatingCirclesContainer>
    );
  }
}

RatingCircles.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

const StyledCardContent = styled(CardContent)`
  .header {
    text-align: center;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
  .footer {
    display: flex;
    justify-content: space-between;
    margin-top: 7.5px;
    text-transform: uppercase;
    font-size: 11.5px;
    color: #646464;
  }
  .footer > div:nth-of-type(1) > .icon {
    transform: rotate(180deg);
  }
`;

const RatingCategoryInput = ({ id, description, onChange }) =>
  <Card>
    <StyledCardContent>
      <div className="header">
        {description}
      </div>
      <RatingCircles name={id} onChange={onChange} />
      <div className="footer">
        <div>
          <Icon material="trending_flat" /> Awful
        </div>
        <div>
          Great <Icon material="trending_flat" />
        </div>
      </div>
    </StyledCardContent>
  </Card>;

RatingCategoryInput.propTypes = {
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default RatingCategoryInput;
