import React from "react";
import UserCard, { Button } from "../UserCard";
import renderer from "react-test-renderer";
import { shallow, render, mount } from "enzyme";

const props = {
  id: "UArjrbxWHX",
  name: "Randall Rivera",
  type: "student",
  schools: [
    {
      id: "bruHy",
      name: "New Jersey Institute of Technology, Newark",
      abbreviation: "NJIT"
    },
    {
      id: "5y7fh",
      name: "Rutgers University, New Brunswick",
      abbreviation: "RU"
    }
  ],
  overallRating: 4.5,
  aggregateRatings: [
    { description: "Attends Group Meetings", rating: 3 },
    { description: "Contributes to Discussions", rating: 5 }
  ],
  userRatings: [
    {
      id: "gXv6EmCRJ",
      userId: "UArjrbxWHX",
      authorId: "TxjkPq46BG",
      authorName: "EagerPig",
      date: "1499183677321",
      comment:
        "I have no issues with the guy, however, he was sometimes unavailable due to his job.",
      likes: 9,
      dislikes: 0,
      aggregateRating: 4.5,
      recommendUser: true,
      individualRatings: [
        { id: "DRFJY9jd", rating: 3 },
        { id: "j84WAR77", rating: 5 }
      ]
    }
  ]
};

describe("UserCard component", () => {
  it("should render correctly", () => {
    const tree = renderer.create(<UserCard {...props} />);
    expect(tree).toMatchSnapshot();
  });

  it("should render the user name", () => {
    const wrapper = render(<UserCard {...props} />);
    const actual = wrapper.html().includes("Randall Rivera");
    const expected = true;
    expect(actual).toBe(expected);
  });

  it("should render the correct amount of user ratings", () => {
    const wrapper = render(<UserCard {...props} />);
    const actual = wrapper.html().includes("<span>1</span> ratings");
    const expected = true;
    expect(actual).toBe(expected);
  });
});
