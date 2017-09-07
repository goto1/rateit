import {
  schools,
  majors,
  ratingCategories,
  userRatings,
  users
} from "../dummy-data";

import { filter, isNil, intersection } from "lodash";
import * as DummyData from "../dummy-data";

function createLookupTable(array, key) {
  const lookupTable = {};

  array.forEach(item => {
    lookupTable[item[key]] = item;
  });

  return lookupTable;
}

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

export const fetchUsers = options =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Object.keys(options).length === 0) {
        reject({});
      } else {
        const users = [...DummyData.users]
          .filter(
            user => intersection(user.schools, options.schools).length > 0
          )
          .map(user => getUserDetails(user.id));
        resolve({
          page: 1,
          per_page: users.length,
          total: users.length,
          total_pages: 1,
          data: createLookupTable(users, "id")
        });
      }
    }, 500);
  });

export const loginUser = credentials =>
  new Promise((resolve, reject) => {
    if (credentials.email === undefined) {
      reject({
        error: "Incorrect username and/or password"
      });
    } else {
      const allUsers = [...DummyData.users];
      const authUser = users.find(user => user.username === credentials.email);
      const bookmarks = allUsers
        .filter(user => authUser.bookmarks.includes(user.id))
        .map(user => getUserDetails(user.id));

      resolve({
        ...getUserDetails(authUser.id),
        bookmarks: bookmarks
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

    setTimeout(() => {
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
    }, 1);
  });

export const fetchMajors = () =>
  new Promise((resolve, reject) => {
    const majors = [...DummyData.majors];

    setTimeout(() => {
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
    }, 1);
  });

export const submitGeneralForm = (userId, formData) =>
  new Promise((resolve, reject) => {
    const data = { ...formData };

    setTimeout(() => {
      if (Object.keys(data).length === 0) {
        const res = createPostResponse({
          error: "Missing form information"
        });
        reject(res);
      } else {
        const user = getUserDetails(userId);
        const res = createPostResponse(user);
        resolve(res);
      }
    }, 1000);
  });

export const submitContactForm = (userId, formData) =>
  new Promise((resolve, reject) => {
    const data = { ...formData };

    setTimeout(() => {
      if (Object.keys(data).length === 0) {
        const res = createPostResponse({
          error: "Missing form information"
        });
        reject(res);
      } else {
        const res = createPostResponse({
          ...data,
          id: "2fjf92jls",
          createdAt: Date.now()
        });
        resolve(res);
      }
    }, 1000);
  });

function createPostResponse(res) {
  return {
    ...res
  };
}

function createResponse(res) {
  if (Object.keys(res).length === 0) {
    return {};
  }

  return filter(
    {
      page: res.page || 1,
      per_page: res.per_page || null,
      total: res.data.length,
      total_pages: res.total_pages || 1,
      data: res.data
    },
    isNil
  );
}

/**
 * For Future Reference...
 */

// export const makeCreateUser = connection => user =>
//   connection.table('users').insert({
//     createdAt: Date.now(),
//     updatedAt: Date.now(),
//     first_name: user.first_name,
//     last_name: user.last_name,
//     email: user.email
//   })
