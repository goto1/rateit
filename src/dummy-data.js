// prettier-ignore
export const schools = [
  { 
    id: 'bruHy', 
    name: 'New Jersey Institute of Technology, Newark',
    abbreviation: 'NJIT' 
  }, { 
    id: '5y7fh', 
    name: 'Rutgers University, New Brunswick',
    abbreviation: 'RU',
  }, { 
    id: 'B9DB3', 
    name: 'New York University, New York',
    abbreviation: 'NYU' 
  }, { 
    id: 'lOK36', 
    name: 'University of Washington, Seattle',
    abbreviation: 'UW'
  }, { 
    id: 'JZaOC', 
    name: 'University of California, Berkeley',
    abbreviation: 'UC Berkeley'
  }, { 
    id: 'xpUFY', 
    name: 'Princeton University, Princeton',
    abbreviation: 'PU' 
  }
];

// prettier-ignore
export const majors = [
  { 
    id: 'vUmMIDE', 
    name: 'Architecture',
    abbreviation: 'ARCH'
  }, { 
    id: 'hvdMFjM', 
    name: 'Computer Science',
    abbreviation: 'CS',
  }, { 
    id: 'e2LejDg', 
    name: 'Information Systems',
    abbreviation: 'IS'
  }, { 
    id: 'iZhwNHy', 
    name: 'Civil & Environmental Engineering',
    abbreviation: 'CEE' 
  }, { 
    id: 'REbF7ax', 
    name: 'Mechanical & Industrial Engineering',
    abbreviation: 'MIE'
  }
];

// prettier-ignore
export const ratingCategories = {
  student: [
    { id: 'DRFJY9jd', description: 'Attends Group Meetings' },
    { id: 'j84WAR77', description: 'Contributes to Discussions' },
    { id: 'wXe02QBg', description: 'Completes Tasks on Time' },
    { id: 'zoQCOOJO', description: 'Quality of Completed Work' },
    { id: 'Gb1tXreK', description: 'Cooperative & Supportive' },
    { id: 'TrK3zUiV', description: 'Contributes Significantly' }
  ],
  professor: [
    { id: 'T5wKYAmI', description: 'Ability to Communicate Course Content' },
    { id: 'jUtauYzO', description: 'Availability Outside of Class Hours' },
    { id: 'mh4m4LcX', description: 'Fairness & Consistency in Grading' },
    { id: 'yZyycMRm', description: 'Knowledge of Course Material' },
    { id: 'sBuPhZef', description: 'Overall Teaching Effectivness' }
  ]
};

export const userRatings = [
  {
    id: "gXv6EmCRJ",
    user: "UArjrbxWHX",
    date: "1499183677321",
    madeBy: "TxjkPq46BG",
    fakeName: "EagerPig",
    comment:
      "I have no issues with the guy, however, he was sometimes unavailable due to his job.",
    likes: 9,
    dislikes: 0,
    aggregateRating: 4.5,
    individualRatings: [
      { id: "DRFJY9jd", rating: 3 },
      { id: "j84WAR77", rating: 5 },
      { id: "wXe02QBg", rating: 4 },
      { id: "zoQCOOJO", rating: 2 },
      { id: "Gb1tXreK", rating: 3 },
      { id: "TrK3zUiV", rating: 3 }
    ]
  },
  {
    id: "uZYDYqry3",
    user: "UArjrbxWHX",
    date: "1499183677321",
    madeBy: "kyN3z7k8jp",
    fakeName: "EagerPig",
    comment:
      "I have no issues with the guy, however, he was sometimes unavailable due to his job.",
    likes: 0,
    dislikes: 1,
    aggregateRating: 2,
    individualRatings: [
      { id: "DRFJY9jd", rating: 3 },
      { id: "j84WAR77", rating: 4 },
      { id: "wXe02QBg", rating: 4 },
      { id: "zoQCOOJO", rating: 4 },
      { id: "Gb1tXreK", rating: 1 },
      { id: "TrK3zUiV", rating: 3 }
    ]
  },
  {
    id: "KtFNT4cvT",
    user: "UArjrbxWHX",
    date: "1499183677321",
    madeBy: "3nrw9EzdUo",
    fakeName: "EagerPig",
    comment:
      "I have no issues with the guy, however, he was sometimes unavailable due to his job.",
    likes: 4,
    dislikes: 1,
    aggregateRating: 4,
    individualRatings: [
      { id: "DRFJY9jd", rating: 3 },
      { id: "j84WAR77", rating: 5 },
      { id: "wXe02QBg", rating: 2 },
      { id: "zoQCOOJO", rating: 2 },
      { id: "Gb1tXreK", rating: 5 },
      { id: "TrK3zUiV", rating: 1 }
    ]
  }
];

// prettier-ignore
export const users = [
  {
    id: 'UArjrbxWHX',
    name: 'Randall Rivera',
    type: 'student',
    schools: ['bruHy', '5y7fh'],
    majors: ['hvdMFjM', 'e2LejDg'],
    emails: ['ranr1141@njit.edu', 'rr3n@rutgers.edu'],
    overallRating: 4.5,
    aggregateRatings: [
      { id: 'DRFJY9jd', rating: 3 },
      { id: 'j84WAR77', rating: 5 },
      { id: 'wXe02QBg', rating: 4 },
      { id: 'zoQCOOJO', rating: 2 },
      { id: 'Gb1tXreK', rating: 3 },
      { id: 'TrK3zUiV', rating: 3 },
    ],
    userRatings: ['gXv6EmCRJ', 'uZYDYqry3', 'KtFNT4cvT'],
    registered: true,
    password: '5f4dcc3b5aa765d61d8327deb882cf99',
    username: 'rarn1141@njit.edu'
  }, {
    id: 'sxlmp3a3BP',
    name: 'Renee Porter',
    type: 'professor',
    schools: ['bruHy'],
    majors: ['hvdMFjM', 'e2LejDg'],
    emails: ['reneeporter@njit.edu'],
    overallRating: 3,
    aggregateRatings: [
      { id: 'T5wKYAmI', rating: 3 },
      { id: 'jUtauYzO', rating: 5 },
      { id: 'mh4m4LcX', rating: 4 },
      { id: 'yZyycMRm', rating: 2 },
      { id: 'sBuPhZef', rating: 3 },
    ],
    userRatings: [],
    registered: false
  }
];

export const currentUser = {
  info: {
    email: "jeff@njit.edu"
  },
  schools: [
    {
      id: "1jf1of1",
      name: "NJIT"
    },
    {
      id: "2jf21of1",
      name: "Rutgers University"
    }
  ],
  majors: [
    {
      id: "1jf01jf010",
      name: "Computer Science"
    }
  ]
};

// NOTE: `ratings` should be called `overall ratings`
const people = [
  {
    id: "009404973009374595",
    name: "Randall Rivera",
    type: "Student",
    school: "NJIT",
    major: "Information Systems",
    email: "ranr1141@njit.edu",
    rating: 4.5,
    numOfRatings: 201,
    ratings: [
      {
        description: "Attends Group Meetings",
        rating: 3
      },
      {
        description: "Contributes to Discussions",
        rating: 5
      },
      {
        description: "Completes Tasks on Time",
        rating: 4
      },
      {
        description: "Quality of Completed Work",
        rating: 2
      },
      {
        description: "Cooperative & Supportive",
        rating: 3
      },
      {
        description: "Contributes Significantly",
        rating: 3
      }
    ],
    usersRatings: [
      {
        username: "Eager Pig",
        date: "11 Nov 2016",
        recommends: true,
        overallRating: 4.5,
        likes: 9,
        dislikes: 0,
        comments:
          "I have no issues with the guy, however, he was sometimes unavailable due to his job. Other than that he's pretty chill",
        individualRatings: [
          {
            description: "Attends Group Meetings",
            rating: 3
          },
          {
            description: "Contributes to Discussions",
            rating: 5
          },
          {
            description: "Completes Tasks on Time",
            rating: 4
          },
          {
            description: "Quality of Completed Work",
            rating: 2
          },
          {
            description: "Cooperative & Supportive",
            rating: 3
          },
          {
            description: "Contributes Significantly",
            rating: 3
          }
        ]
      },
      {
        username: "Eager Pig",
        date: "11 Nov 2016",
        recommends: false,
        overallRating: 4.5,
        likes: 9,
        dislikes: 0,
        comments:
          "I have no issues with the guy, however, he was sometimes unavailable due to his job. Other than that he's pretty chill",
        individualRatings: [
          {
            description: "Attends Group Meetings",
            rating: 3
          },
          {
            description: "Contributes to Discussions",
            rating: 5
          },
          {
            description: "Completes Tasks on Time",
            rating: 4
          },
          {
            description: "Quality of Completed Work",
            rating: 2
          },
          {
            description: "Cooperative & Supportive",
            rating: 3
          },
          {
            description: "Contributes Significantly",
            rating: 3
          }
        ]
      },
      {
        username: "Eager Pig",
        date: "11 Nov 2016",
        recommends: true,
        overallRating: 4.5,
        likes: 9,
        dislikes: 0,
        comments:
          "I have no issues with the guy, however, he was sometimes unavailable due to his job. Other than that he's pretty chill",
        individualRatings: [
          {
            description: "Attends Group Meetings",
            rating: 3
          },
          {
            description: "Contributes to Discussions",
            rating: 5
          },
          {
            description: "Completes Tasks on Time",
            rating: 4
          },
          {
            description: "Quality of Completed Work",
            rating: 2
          },
          {
            description: "Cooperative & Supportive",
            rating: 3
          },
          {
            description: "Contributes Significantly",
            rating: 3
          }
        ]
      }
    ]
  },
  {
    id: "7456062367375738",
    name: "Renee Porter",
    type: "Professor",
    school: "NJIT",
    major: "Information Systems",
    email: "ranr1141@njit.edu",
    rating: 3,
    numOfRatings: 110,
    ratings: [
      {
        description: "Ability to Communicate Course Content",
        rating: 3
      },
      {
        description: "Availability Outside of Class Hours",
        rating: 1
      },
      {
        description: "Fairness & Consistency in Grading",
        rating: 4
      },
      {
        description: "Knowledge of Course Material",
        rating: 3
      },
      {
        description: "Overall Teaching Effectivness",
        rating: 3
      }
    ],
    usersRatings: [
      {
        username: "Eager Pig",
        date: "11 Nov 2016",
        recommends: true,
        overallRating: 4.5,
        likes: 9,
        dislikes: 0,
        comments:
          "I have no issues with the guy, however, he was sometimes unavailable due to his job. Other than that he's pretty chill",
        individualRatings: [
          {
            description: "Attends Group Meetings",
            rating: 3
          },
          {
            description: "Contributes to Discussions",
            rating: 5
          },
          {
            description: "Completes Tasks on Time",
            rating: 4
          },
          {
            description: "Quality of Completed Work",
            rating: 2
          },
          {
            description: "Cooperative & Supportive",
            rating: 3
          },
          {
            description: "Contributes Significantly",
            rating: 3
          }
        ]
      }
    ]
  },
  {
    id: "9766491935583002",
    name: "Lionel Ford",
    type: "Student",
    school: "Rutgers",
    major: "Information Systems",
    email: "ranr1141@njit.edu",
    rating: 2.5,
    numOfRatings: 30,
    ratings: [
      {
        description: "Attends Group Meetings",
        rating: 3
      },
      {
        description: "Contributes to Discussions",
        rating: 5
      },
      {
        description: "Completes Tasks on Time",
        rating: 2
      },
      {
        description: "Quality of Completed Work",
        rating: 3
      },
      {
        description: "Cooperative & Supportive",
        rating: 3
      },
      {
        description: "Contributes Significantly",
        rating: 3
      }
    ],
    usersRatings: [
      {
        username: "Eager Pig",
        date: "11 Nov 2016",
        recommends: true,
        overallRating: 4.5,
        likes: 9,
        dislikes: 0,
        comments:
          "I have no issues with the guy, however, he was sometimes unavailable due to his job. Other than that he's pretty chill",
        individualRatings: [
          {
            description: "Attends Group Meetings",
            rating: 3
          },
          {
            description: "Contributes to Discussions",
            rating: 5
          },
          {
            description: "Completes Tasks on Time",
            rating: 4
          },
          {
            description: "Quality of Completed Work",
            rating: 2
          },
          {
            description: "Cooperative & Supportive",
            rating: 3
          },
          {
            description: "Contributes Significantly",
            rating: 3
          }
        ]
      }
    ]
  },
  {
    id: "6428626191061508",
    name: "Jonathon Sims",
    type: "Professor",
    school: "Rutgers",
    major: "Information Systems",
    email: "ranr1141@njit.edu",
    rating: 5,
    numOfRatings: 63,
    ratings: [
      {
        description: "Attends Group Meetings",
        rating: 3
      },
      {
        description: "Contributes to Discussions",
        rating: 5
      },
      {
        description: "Completes Tasks on Time",
        rating: 4
      },
      {
        description: "Quality of Completed Work",
        rating: 3
      },
      {
        description: "Cooperative & Supportive",
        rating: 3
      },
      {
        description: "Contributes Significantly",
        rating: 3
      }
    ],
    usersRatings: [
      {
        username: "Eager Pig",
        date: "11 Nov 2016",
        recommends: true,
        overallRating: 4.5,
        likes: 9,
        dislikes: 0,
        comments:
          "I have no issues with the guy, however, he was sometimes unavailable due to his job. Other than that he's pretty chill",
        individualRatings: [
          {
            description: "Attends Group Meetings",
            rating: 3
          },
          {
            description: "Contributes to Discussions",
            rating: 5
          },
          {
            description: "Completes Tasks on Time",
            rating: 4
          },
          {
            description: "Quality of Completed Work",
            rating: 2
          },
          {
            description: "Cooperative & Supportive",
            rating: 3
          },
          {
            description: "Contributes Significantly",
            rating: 3
          }
        ]
      }
    ]
  }
];

export default people;
