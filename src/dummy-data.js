// prettier-ignore
export const schools = [
  { 
    id: 'bruHy', 
    name: 'New Jersey Institute of Technology, Newark',
    abbreviation: 'NJIT' 
  }, { 
    id: '5y7fh', 
    name: 'Rutgers University, New Brunswick',
    abbreviation: 'RU'
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
      { id: "j84WAR77", rating: 5 },
      { id: "wXe02QBg", rating: 4 },
      { id: "zoQCOOJO", rating: 2 },
      { id: "Gb1tXreK", rating: 3 },
      { id: "TrK3zUiV", rating: 3 }
    ]
  },
  {
    id: "uZYDYqry3",
    userId: "UArjrbxWHX",
    authorId: "TxjkPq46BG",
    authorName: "EagerPig",
    date: "1499183677321",
    comment:
      "I have no issues with the guy, however, he was sometimes unavailable due to his job.",
    likes: 0,
    dislikes: 1,
    aggregateRating: 2,
    recommendUser: false,
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
    userId: "UArjrbxWHX",
    authorId: "TxjkPq46BG",
    authorName: "EagerPig",
    date: "1499183677321",
    comment:
      "I have no issues with the guy, however, he was sometimes unavailable due to his job.",
    likes: 4,
    dislikes: 1,
    aggregateRating: 4,
    recommendUser: true,
    individualRatings: [
      { id: "DRFJY9jd", rating: 3 },
      { id: "j84WAR77", rating: 5 },
      { id: "wXe02QBg", rating: 2 },
      { id: "zoQCOOJO", rating: 2 },
      { id: "Gb1tXreK", rating: 5 },
      { id: "TrK3zUiV", rating: 1 }
    ]
  },
  {
    id: "gXv6EmCRJ",
    userId: "sxlmp3a3BP",
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
      { id: "T5wKYAmI", rating: 3 },
      { id: "jUtauYzO", rating: 4 },
      { id: "mh4m4LcX", rating: 4 },
      { id: "yZyycMRm", rating: 4 },
      { id: "sBuPhZef", rating: 1 }
    ]
  },
  {
    id: "uZYDYqry3",
    userId: "sxlmp3a3BP",
    authorId: "TxjkPq46BG",
    authorName: "EagerPig",
    date: "1499183677321",
    comment:
      "I have no issues with the guy, however, he was sometimes unavailable due to his job.",
    likes: 0,
    dislikes: 1,
    aggregateRating: 2,
    recommendUser: false,
    individualRatings: [
      { id: "T5wKYAmI", rating: 3 },
      { id: "jUtauYzO", rating: 4 },
      { id: "mh4m4LcX", rating: 4 },
      { id: "yZyycMRm", rating: 4 },
      { id: "sBuPhZef", rating: 1 }
    ]
  },
  {
    id: "uZYDYqry3",
    userId: "uIyQLPNkmn",
    authorId: "TxjkPq46BG",
    authorName: "EagerPig",
    date: "1499183677321",
    comment:
      "I have no issues with the guy, however, he was sometimes unavailable due to his job.",
    likes: 0,
    dislikes: 1,
    aggregateRating: 2,
    recommendUser: false,
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
    userId: "uIyQLPNkmn",
    authorId: "TxjkPq46BG",
    authorName: "EagerPig",
    date: "1499183677321",
    comment:
      "I have no issues with the guy, however, he was sometimes unavailable due to his job.",
    likes: 4,
    dislikes: 1,
    aggregateRating: 4,
    recommendUser: true,
    individualRatings: [
      { id: "DRFJY9jd", rating: 3 },
      { id: "j84WAR77", rating: 5 },
      { id: "wXe02QBg", rating: 2 },
      { id: "zoQCOOJO", rating: 2 },
      { id: "Gb1tXreK", rating: 5 },
      { id: "TrK3zUiV", rating: 1 }
    ]
  },
  {
    id: "gXv6EmCRJ",
    userId: "RpHYttsfy3",
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
      { id: "T5wKYAmI", rating: 3 },
      { id: "jUtauYzO", rating: 4 },
      { id: "mh4m4LcX", rating: 4 },
      { id: "yZyycMRm", rating: 4 },
      { id: "sBuPhZef", rating: 1 }
    ]
  },
  {
    id: "uZYDYqry3",
    userId: "RpHYttsfy3",
    authorId: "TxjkPq46BG",
    authorName: "EagerPig",
    date: "1499183677321",
    comment:
      "I have no issues with the guy, however, he was sometimes unavailable due to his job.",
    likes: 0,
    dislikes: 1,
    aggregateRating: 2,
    recommendUser: false,
    individualRatings: [
      { id: "T5wKYAmI", rating: 3 },
      { id: "jUtauYzO", rating: 4 },
      { id: "mh4m4LcX", rating: 4 },
      { id: "yZyycMRm", rating: 4 },
      { id: "sBuPhZef", rating: 1 }
    ]
  },
  {
    id: "uZYDYqry3",
    userId: "0fQkCblQRG",
    authorId: "TxjkPq46BG",
    authorName: "EagerPig",
    date: "1499183677321",
    comment:
      "I have no issues with the guy, however, he was sometimes unavailable due to his job.",
    likes: 0,
    dislikes: 1,
    aggregateRating: 2,
    recommendUser: false,
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
    userId: "0fQkCblQRG",
    authorId: "TxjkPq46BG",
    authorName: "EagerPig",
    date: "1499183677321",
    comment:
      "I have no issues with the guy, however, he was sometimes unavailable due to his job.",
    likes: 4,
    dislikes: 1,
    aggregateRating: 4,
    recommendUser: true,
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
    username: 'rarn1141@njit.edu',
    bookmarks: ['sxlmp3a3BP', 'uIyQLPNkmn', '0fQkCblQRG']
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
    userRatings: ['gXv6EmCRJ', 'uZYDYqry3', 'KtFNT4cvT'],
  }, {
    id: 'uIyQLPNkmn',
    name: 'Lionel Ford',
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

  }, {
    id: 'RpHYttsfy3',
    name: 'Jonathon Sims',
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
  }, {
    id: '0fQkCblQRG',
    name: 'Joyce Salazar',
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
    username: 'js3189@njit.edu',
    bookmarks: ['sxlmp3a3BP', 'uIyQLPNkmn', '0fQkCblQRG']
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
