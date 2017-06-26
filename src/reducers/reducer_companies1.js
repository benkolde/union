export default function(state, action){
  return(
    {
      "total" : 2,
      "companies" : {
        "Gainful" : {
          "id" : 100,
          "name" : "Gainful",
          "image" : "images/gainful.png",
          "metrics": {
            "emails" : {
              "weeks" : 0,
              "data" : []
            },
            "traffic" : {
              "weeks" : 0,
              "data" : []
            },
            "customers" : {
              "weeks" : 0,
              "data" : []
            },
            "sales" : {
              "weeks" :0,
              "data" : []
            }
          }
        },
        "Consultmates" : {
          "id" : 101,
          "name" : "Consultmates",
          "image" : "images/consultmates.png",
          "metrics": {
            "emails" : {
              "weeks" : 4,
              "data" : [5, 6, 100, 0]
            },
            "traffic" : {
              "weeks" : 7,
              "data" : [50, 2, 3, 4, 109, 45, 2]
            },
            "customers" : {
              "weeks" : 10,
              "data" : [40, 40, 3, 10, 50, 33, 45, 2, 6, 6]
            },
            "sales" : {
              "weeks" : 0,
              "data" : []
            }
          }
        },
        "Soapy Soap Co." : {
          "id" : 102,
          "name" : "Soapy Soap Co.",
          "image" : "images/soapysoap.png",
          "metrics": {
            "emails" : {
              "weeks" : 2,
              "data" : [4, 7]
            },
            "traffic" : {
              "weeks" : 8,
              "data" : [7, 0, 4, 5, 0, 0, 0, 8]
            },
            "customers" : {
              "weeks" : 4,
              "data" : [1, 3, 6, 7]
            },
            "sales" : {
              "weeks" : 1,
              "data" : [10]
            }
          }
        },
        "Tame The Beast" : {
          "id" : 103,
          "name" : "Tame The Beast",
          "image" : "images/tamethebeast.png",
          "metrics": {
            "emails" : {
              "weeks" : 6,
              "data" : [80, 5, 8, 2, 5, 9]
            },
            "traffic" : {
              "weeks" : 2,
              "data" : [0, 0]
            },
            "customers" : {
              "weeks" : 0,
              "data" : []
            },
            "sales" : {
              "weeks" : 1,
              "data" : [6]
            }
          }
        },
        "Jumper Threads" : {
          "id" : 104,
          "name" : "Jumper Threads",
          "image" : "images/jumperthreads.png",
          "metrics": {
            "emails" : {
              "weeks" : 7,
              "datetime": "6/7/17",
              "data" : [4, 8, 56, 1, 3, 26, 4]
            },
            "traffic" : {
              "weeks" : 4,
              "data" : [20, 4, 6, 8]
            },
            "customers" : {
              "weeks" : 2,
              "data" : [8, 2]
            },
            "sales" : {
              "weeks" : 4,
              "data" : [1, 4, 5, 6]
            }
          }
        },
        "Obe" : {
          "id" : 105,
          "name" : "Obe Pet Products",
          "image" : "images/obe.png",
          "metrics": {
            "emails" : {
              "weeks" : 6,
              "data" : [3, 4, 7, 23, 4, 5]
            },
            "traffic" : {
              "weeks" : 2,
              "data" : [4, 3]
            },
            "customers" : {
              "weeks" : 5,
              "data" : [3, 46, 1, 33, 5]
            },
            "sales" : {
              "weeks" : 1,
              "data" : [3]
            }
          }
        },
        "Retarget Links" : {
          "id" : 106,
          "name" : "Retarget Links",
          "image" : "images/retarget.png",
          "metrics": {
            "emails" : {
              "weeks" : 0,
              "data" : []
            },
            "traffic" : {
              "weeks" : 0,
              "data" : []
            },
            "customers" : {
              "weeks" : 2,
              "data" : [2, 6]
            },
            "sales" : {
              "weeks" : 5,
              "data" : [1, 5, 4, 1000, 500]
            }
          }
        }
      }
    }
  );
}
