import styled from "styled-components";

const HorizontalRule = styled.hr`
  border: 0px;
  height: 1px;
  width: ${props => props.width};
  margin: ${props => props.margin};
  background-image: linear-gradient(to left, ${props =>
    props.colorOne}, ${props => props.colorTwo}, ${props => props.colorOne});
`;

export default HorizontalRule;
