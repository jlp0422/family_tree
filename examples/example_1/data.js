var myTree = {
  pedigree: {
    data: {
      name: 'Jeremy Philipson',
      gender: 'male',
      born: 1992,
      birthplace: 'Utica, NY',
    },
    // spouses: [
    //   {
    //     data: {
    //       name: 'S1',
    //       gender: 'female',
    //       born: 'xx.xx.xxxx'
    //     },
    //     children: [
    //       {
    //         data: {
    //           name: 'Child 1',
    //           gender: 'male',
    //           born: 'xx.xx.xxxx'
    //         }
    //       },
    //       {
    //         data: {
    //           name: 'Child 2',
    //           gender: 'male',
    //           born: 'xx.xx.xxxx'
    //         }
    //       }
    //     ]
    //   }
    // ]
  },
  siblings1: [
    {
      data: {
        name: 'Evan Philipson',
        gender: 'male',
        born: 1989,
        birthplace: 'Utica, NY'
      },
    },
  ],
  siblings2: [
    {
      data: {
        name: 'Rachel Philipson',
        gender: 'female',
        born: 1995,
        birthplace: 'Utica, NY'
      },
    },
  ],
  // mother_siblings: [
  //   {
  //     data: {
  //       name: '1 Aunt 1',
  //       gender: 'female',
  //       born: 'xx.xx.xxxx'
  //     },
  //     spouses: [
  //       {
  //         data: {
  //           name: 'S3',
  //           gender: 'male',
  //           born: 'xx.xx.xxxx'
  //         },
  //         children: [
  //           {
  //             data: {
  //               name: '1 Aunt 1s son 1',
  //               gender: 'male',
  //               born: 'xx.xx.xxxx'
  //             }
  //           },
  //           {
  //             data: {
  //               name: '1 Aunt 1s son 2',
  //               gender: 'male',
  //               born: 'xx.xx.xxxx'
  //             }
  //           }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     data: {
  //       name: '1 Aunt 2',
  //       gender: 'female',
  //       born: 'xx.xx.xxxx'
  //     },
  //     spouses: [
  //       {
  //         data: {
  //           name: 'S4',
  //           gender: 'male',
  //           born: 'xx.xx.xxxx'
  //         },
  //         children: [
  //           {
  //             data: {
  //               name: '1 Aunt 2s son 1',
  //               gender: 'male',
  //               born: 'xx.xx.xxxx'
  //             }
  //           },
  //           {
  //             data: {
  //               name: '1 Aunt 2s daughter',
  //               gender: 'female',
  //               born: 'xx.xx.xxxx'
  //             }
  //           },
  //           {
  //             data: {
  //               name: '1 Aunt 2s son 2',
  //               gender: 'male',
  //               born: 'xx.xx.xxxx'
  //             }
  //           },
  //           {
  //             data: {
  //               name: '1 Aunt 2s son 3',
  //               gender: 'male',
  //               born: 'xx.xx.xxxx'
  //             }
  //           },
  //           {
  //             data: {
  //               name: '1 Aunt 2s daughter',
  //               gender: 'female',
  //               born: 'xx.xx.xxxx'
  //             }
  //           },
  //           {
  //             data: {
  //               name: '1 Aunt 2s daughter',
  //               gender: 'female',
  //               born: 'xx.xx.xxxx'
  //             }
  //           }
  //         ]
  //       },
  //       {
  //         data: {
  //           name: 'S4a',
  //           gender: 'male',
  //           born: 'xx.xx.xxxx'
  //         },
  //         children: [
  //           {
  //             data: {
  //               name: 'a1 Aunt 2s son 1',
  //               gender: 'male',
  //               born: 'xx.xx.xxxx'
  //             }
  //           },
  //           {
  //             data: {
  //               name: 'a1 Aunt 2s daughter',
  //               gender: 'female',
  //               born: 'xx.xx.xxxx'
  //             }
  //           },
  //           {
  //             data: {
  //               name: 'a1 Aunt 2s son 2',
  //               gender: 'male',
  //               born: 'xx.xx.xxxx'
  //             }
  //           },
  //           {
  //             data: {
  //               name: 'a1 Aunt 2s son 3',
  //               gender: 'male',
  //               born: 'xx.xx.xxxx'
  //             }
  //           },
  //           {
  //             data: {
  //               name: 'a1 Aunt 2s daughter',
  //               gender: 'female',
  //               born: 'xx.xx.xxxx'
  //             }
  //           },
  //           {
  //             data: {
  //               name: 'a1 Aunt 2s daughter',
  //               gender: 'female',
  //               born: 'xx.xx.xxxx'
  //             }
  //           }
  //         ]
  //       },
  //       {
  //         data: {
  //           name: 'S4b',
  //           gender: 'male',
  //           born: 'xx.xx.xxxx'
  //         },
  //         children: [
  //           {
  //             data: {
  //               name: 'b1 Aunt 2s son 1',
  //               gender: 'male',
  //               born: 'xx.xx.xxxx'
  //             }
  //           }
  //         ]
  //       },
  //       {
  //         data: {
  //           name: 'S4c',
  //           gender: 'male',
  //           born: 'xx.xx.xxxx'
  //         }
  //       }
  //     ]
  //   },
  //   /*{
  //     data: {
  //       name: 'Aunt 1',
  //       gender: 'female',
  //       born: 'xx.xx.xxxx'
  //     },
  //     spouses: [
  //       {
  //         data: {
  //           name: 'S5',
  //           gender: 'male',
  //           born: 'xx.xx.xxxx'
  //         },
  //         children: [
  //           {
  //             data: {
  //               name: 'Aunt 1s son 1',
  //               gender: 'male',
  //               born: 'xx.xx.xxxx'
  //             },
  //             spouses: [
  //               {
  //                 data: {
  //                   name: 'S6',
  //                   gender: 'female',
  //                   born: 'xx.xx.xxxx'
  //                 },
  //                 children: [
  //                   {
  //                     data: {
  //                       name: 'Aunt 1s son 1s son',
  //                       gender: 'male',
  //                       born: 'xx.xx.xxxx'
  //                     },
  //                     spouses: [
  //                       {
  //                         data: {
  //                           name: 'Aunt 1s son 1s sons spouse',
  //                           gender: 'female',
  //                           born: 'xx.xx.xxxx'
  //                         },
  //                         children: [
  //                           {
  //                             data: {
  //                               name: 'Aunt 1s son 1s sons son',
  //                               gender: 'male',
  //                               born: 'xx.xx.xxxx'
  //                             }
  //                           }
  //                         ]
  //                       }
  //                     ]
  //                   }
  //                 ]
  //               }
  //             ]
  //           },
  //           {
  //             data: {
  //               name: 'Aunt 1s son 2',
  //               gender: 'male',
  //               born: 'xx.xx.xxxx'
  //             }
  //           }
  //         ]
  //       }
  //     ]
  //   }*/
  // ],
  // father_siblings: [
  //   {
  //     data: {
  //       name: 'Aunt 0',
  //       gender: 'female',
  //       born: 'xx.xx.xxxx'
  //     }
  //   },
  //   {
  //     data: {
  //       name: 'Aunt 1',
  //       gender: 'female',
  //       born: 'xx.xx.xxxx'
  //     },
  //     spouses: [
  //       {
  //         data: {
  //           name: 'S5',
  //           gender: 'male',
  //           born: 'xx.xx.xxxx'
  //         },
  //         children: [
  //           {
  //             data: {
  //               name: 'Aunt 1s son 1',
  //               gender: 'male',
  //               born: 'xx.xx.xxxx'
  //             },
  //             spouses: [
  //               {
  //                 data: {
  //                   name: 'S6',
  //                   gender: 'female',
  //                   born: 'xx.xx.xxxx'
  //                 },
  //                 children: [
  //                   {
  //                     data: {
  //                       name: 'Aunt 1s son 1s son',
  //                       gender: 'male',
  //                       born: 'xx.xx.xxxx'
  //                     },
  //                     spouses: [
  //                       {
  //                         data: {
  //                           name: 'Aunt 1s son 1s sons spouse',
  //                           gender: 'female',
  //                           born: 'xx.xx.xxxx'
  //                         },
  //                         children: [
  //                           {
  //                             data: {
  //                               name: 'Aunt 1s son 1s sons son',
  //                               gender: 'male',
  //                               born: 'xx.xx.xxxx'
  //                             }
  //                           }
  //                         ]
  //                       }
  //                     ]
  //                   }
  //                 ]
  //               }
  //             ]
  //           },
  //           {
  //             data: {
  //               name: 'Aunt 1s son 2',
  //               gender: 'male',
  //               born: 'xx.xx.xxxx'
  //             }
  //           }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     data: {
  //       name: 'Aunt 2',
  //       gender: 'female',
  //       born: 'xx.xx.xxxx'
  //     },
  //     spouses: [
  //       {
  //         data: {
  //           name: 'S7',
  //           gender: 'male',
  //           born: 'xx.xx.xxxx'
  //         },
  //         children: [
  //           {
  //             data: {
  //               name: 'Aunt 2s son',
  //               gender: 'male',
  //               born: 'xx.xx.xxxx'
  //             }
  //           },
  //           {
  //             data: {
  //               name: 'Aunt 2s daughter',
  //               gender: 'female',
  //               born: 'xx.xx.xxxx'
  //             }
  //           },
  //           {
  //             data: {
  //               name: 'Aunt 2s son',
  //               gender: 'male',
  //               born: 'xx.xx.xxxx'
  //             }
  //           },
  //           {
  //             data: {
  //               name: 'Aunt 2s son',
  //               gender: 'male',
  //               born: 'xx.xx.xxxx'
  //             }
  //           },
  //           {
  //             data: {
  //               name: 'Aunt 2s daughter',
  //               gender: 'female',
  //               born: 'xx.xx.xxxx'
  //             }
  //           },
  //           {
  //             data: {
  //               name: 'Aunt 2s daughter',
  //               gender: 'female',
  //               born: 'xx.xx.xxxx'
  //             }
  //           }
  //         ]
  //       }
  //     ]
  //   }
  // ],
  father: {
    data: {
      name: 'Gary Philipson',
      gender: 'male',
      born: 1957,
      birthplace: 'Utica, NY',
    },
    father: {
      data: {
        name: 'Herb Philipson',
        gender: 'male',
        born: 1922,
        birthplace: 'Utica, NY'
      },
      father: {
        data: {
          name: 'Louis Philipson',
          gender: 'male',
          born: 1896,
          birthplace: 'New York, NY'
        },
        father: {
          data: {
            name: 'Joseph Philipson',
            gender: 'male',
            birthplace: 'Lithuania'
          },
        },
        mother: {
          data: {
            name: 'Katie Stabinsky Philipson',
            gender: 'female',
            birthplace: 'Lithuania'
          },
        },
      },
      mother: {
        data: {
          name: 'Sylvia Golinsky Philipson',
          gender: 'female',
          born: 1901,
          birthplace: 'Russia'
        },
        father: {
          data: {
            name: 'Joseph Golinsky',
            gender: 'male',
            birthplace: 'Bialystok'
          }
        },
        mother: {
          data: {
            name: 'Bailey Serling Golinsky',
            gender: 'femaile',
            birthplace: 'Bialystok'
          },
          father: {
            data: {
              name: 'Peshel Serling',
              gender: 'male'
            }
          },
          mother: {
            data: {
              name: 'Ariel Serling',
              gender: 'female'
            }
          }
        }
      }
    },
    mother: {
      data: {
        name: 'Aviva Zuta Philipson',
        gender: 'female',
        born: 1929,
        birthplace: 'New York, NY'
      },
      father: {
        data: {
          name: 'Eliyahu Zuta',
          gender: 'male',
          birthplace: 'Odessa, Russia'
        },
        father: {
          data: {
            name: 'Aryen Zuta',
            gender: 'male',
            birthplace: 'Russia'
          },
        },
      },
      mother: {
        data: {
          name: 'Hadassah Rabinowitz Zuta',
          gender: 'female',
          born: 1900,
          birthplace: 'Rahavet, Israel'
        },
        father: {
          data: {
            name: 'Meyer Rabinowitz',
            gender: 'male',
            birthplace: 'Russia'
          }
        },
        mother: {
          data: {
            name: 'Nachaa Schecter Rabinowitz',
            gender: 'female',
            birthplace: 'Russia'
          },
        },
      },
    },
  },
  mother: {
    data: {
      name: 'Lisa Philipson',
      gender: 'female',
      born: 1958,
      birthplace: 'Miami, FL'
    },
    father: {
      data: {
        name: 'Richard Behren',
        gender: 'male',
        born: 1932,
        birthplace: 'New York, NY'
      },
      father: {
        data: {
          name: 'Abraham Lester Behren',
          gender: 'male',
          born: 1901,
          birthplace: 'New York, NY'
        },
        father: {
          data: {
            name: 'Louis D. Behren',
            gender: 'male',
            birthplace: 'Russia'
          }
        },
        mother: {
          data: {
            name: 'Pauline',
            gender: 'female',
            birthplace: 'Russia'
          },
        },
      },
      mother: {
        data: {
          name: 'Rose Richmond Behren',
          gender: 'female',
          born: 1902,
          birthplace: 'Austria'
        },
        father: {
          data: {
            name: 'Jacob Richmond',
            gender: 'male'
          },
        },
        mother: {
          data: {
            name: 'Eva Richmond',
            gender: 'female',
            birthplace: 'Austria'
          },
        },
      },
    },
    mother: {
      data: {
        name: 'Leta Goldstrom Behren',
        gender: 'female',
        born: 1936,
        birthplace: 'Miami Beach, FL'
      },
      father: {
        data: {
          name: 'Melvin Goldstrom',
          gender: 'male',
          born: 1901,
          birthplace: 'Nebraska'
        },
        father: {
          data: {
            name: 'Sol Goldstrom',
            gender: 'male',
            birthplace: 'Germany'
          },
        },
        mother: {
          data: {
            name: 'Claire Goldstrom',
            gender: 'female',
            birthplace: 'Nebraska'
          },
        },
      },
      mother: {
        data: {
          name: 'Ruth Williamson Goldstrom',
          gender: 'female',
          born: 1907,
          birthplace: 'Brooklyn, NY'
        },
        father: {
          data: {
            name: 'Morris Williamson',
            gender: 'male',
            birthplace: 'Russia'
          },
        },
        mother: {
          data: {
            name: 'Lena Williamson',
            gender: 'female',
            birthplace: 'Russia'
          },
        },
      },
    },
  },
};

module.exports = myTree;
