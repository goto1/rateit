// @flow
type NumericRating = 1 | 2 | 3 | 4 | 5;

export type Rating = {
  description: string,
  rating: NumericRating
};

export type Ratings = Array<Rating>;

export type PersonOverview = {
  id: string,
  name: string,
  type: "Student" | "Professor",
  school: string,
  rating: number,
  numOfRatings: number,
  ratings: Ratings
};
