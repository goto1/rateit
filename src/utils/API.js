import {
  schools,
  majors,
  ratingCategories,
  userRatings,
  users
} from "../dummy-data";

import * as DummyData from "../dummy-data";

function getRatingDetails(ratings, userType) {
  const categories =
    userType === "student"
      ? [...ratingCategories.student]
      : [...ratingCategories.professor];

  return ratings.map(rating => {
    const details = categories.find(category => category.id === rating.id);
    return {
      id: rating.id,
      description: details.description,
      rating: rating.rating
    };
  });
}

const getUserDetails = userId => {
  const user = users.filter(user => user.id === userId).pop();
  let aggregateRatings = [];
  let individualRatings = [];

  if (user.type === "student") {
    aggregateRatings = getRatingDetails(user.aggregateRatings, "student");
    individualRatings = userRatings
      .filter(rating => rating.userId === user.id)
      .map(rating => ({
        ...rating,
        individualRatings: getRatingDetails(rating.individualRatings, "student")
      }));
  } else {
    aggregateRatings = getRatingDetails(user.aggregateRatings, "professor");
    individualRatings = userRatings
      .filter(rating => rating.userId === user.id)
      .map(rating => ({
        ...rating,
        individualRatings: getRatingDetails(
          rating.individualRatings,
          "professor"
        )
      }));
  }

  return {
    ...user,
    schools: getSchoolDetails(user.schools),
    majors: getMajorDetails(user.majors),
    aggregateRatings,
    userRatings: individualRatings
  };
};

const getSchoolDetails = schoolIds =>
  schoolIds.map(schoolId => schools.find(school => school.id === schoolId));

const getMajorDetails = majorIds =>
  majorIds.map(majorId => majors.find(major => major.id === majorId));

export const fetchUser = id =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!id) {
        reject({
          error: {
            code: 404,
            message: "User ID is not found"
          }
        });
      } else {
        const user = getUserDetails(id);
        resolve({
          data: {
            ...user
          }
        });
      }
    }, 1000);
  });

export const loginUser = credentials =>
  new Promise((resolve, reject) => {
    if (!credentials.email) {
      reject({
        error: {
          code: 404,
          message: "Missing credentials"
        }
      });
    }
    const user = users.find(user => user.username === credentials.email);
    const bookmarked = [...user.bookmarks];
    const bookmarks = users
      .filter(user => bookmarked.includes(user.id))
      .map(user => getUserDetails(user.id));

    if (!user) {
      reject({
        error: {
          code: 404,
          message: "User not found"
        }
      });
    } else {
      resolve({
        data: {
          ...getUserDetails(user.id),
          bookmarks
        }
      });
    }
  });

export const bookmarkUser = (currUserId, userId) =>
  new Promise((resolve, reject) => {
    if (!userId) {
      reject({
        error: {
          code: 404,
          message: "Missing credentials"
        }
      });
    } else {
      const bookmarkedUser = users.find(user => user.id === userId);
      resolve({
        data: {
          ...getUserDetails(userId)
        }
      });
    }
  });

export const removeUser = (currUserId, userId) =>
  new Promise((resolve, reject) => {
    if (!userId) {
      reject({
        error: {
          code: 404,
          message: "Missing credentials"
        }
      });
    } else {
      const userToBeRemoved = users.find(user => user.id === userId);
      resolve({
        data: {
          ...userToBeRemoved
        }
      });
    }
  });

export const fetchSchools = () =>
  new Promise((resolve, reject) => {
    const schools = [...DummyData.schools];

    if (schools.length === 0) {
      reject({
        error: {
          code: 404,
          message: "Could not fetch schools at the moment"
        }
      });
    } else {
      resolve({
        data: schools
      });
    }
  });

export const fetchMajors = () =>
  new Promise((resolve, reject) => {
    const majors = [...DummyData.majors];

    if (majors.length === 0) {
      reject({
        error: {
          code: 404,
          message: "Could not fetch majors at the moment"
        }
      });
    } else {
      resolve({
        data: majors
      });
    }
  });
