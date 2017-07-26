import React from "react";
import PropTypes from "prop-types";
import { LinkItem } from "./f7";
import UserItemContents from "./UserItemContents";

const UserListItem = props => {
  const userId = props.id;
  return (
    <LinkItem url={`/user/${userId}/`}>
      <UserItemContents margin="0 20px 0 0" {...props} />
    </LinkItem>
  );
};

UserListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["student", "professor"]),
  schools: PropTypes.array.isRequired,
  overallRating: PropTypes.number.isRequired,
  userRatings: PropTypes.array.isRequired
};

export default UserListItem;
