// @flow

export type PersonOverview = {
  id: string,
  name: string,
  type: "Student" | "Professor",
  school: string,
  rating: number,
  numOfRatings: number
};
