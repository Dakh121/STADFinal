function cov_vpify0p24() {
  var path = "/Users/darinkhan/Documents/Johns Hopkins/STADFinal/Octave-master/src/reducers/currentSessionReducer.js";
  var hash = "7645e9883b8748c7eaeb2e0e6a59f16d7b188c6e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/darinkhan/Documents/Johns Hopkins/STADFinal/Octave-master/src/reducers/currentSessionReducer.js",
    statementMap: {
      "0": {
        start: {
          line: 11,
          column: 21
        },
        end: {
          line: 16,
          column: 1
        }
      },
      "1": {
        start: {
          line: 18,
          column: 16
        },
        end: {
          line: 64,
          column: 1
        }
      },
      "2": {
        start: {
          line: 19,
          column: 2
        },
        end: {
          line: 63,
          column: 3
        }
      },
      "3": {
        start: {
          line: 21,
          column: 6
        },
        end: {
          line: 24,
          column: 8
        }
      },
      "4": {
        start: {
          line: 27,
          column: 6
        },
        end: {
          line: 30,
          column: 8
        }
      },
      "5": {
        start: {
          line: 32,
          column: 6
        },
        end: {
          line: 35,
          column: 8
        }
      },
      "6": {
        start: {
          line: 38,
          column: 6
        },
        end: {
          line: 41,
          column: 8
        }
      },
      "7": {
        start: {
          line: 44,
          column: 6
        },
        end: {
          line: 47,
          column: 8
        }
      },
      "8": {
        start: {
          line: 56,
          column: 6
        },
        end: {
          line: 59,
          column: 8
        }
      },
      "9": {
        start: {
          line: 62,
          column: 6
        },
        end: {
          line: 62,
          column: 19
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 18,
            column: 16
          },
          end: {
            line: 18,
            column: 17
          }
        },
        loc: {
          start: {
            line: 18,
            column: 50
          },
          end: {
            line: 64,
            column: 1
          }
        },
        line: 18
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 18,
            column: 17
          },
          end: {
            line: 18,
            column: 37
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 18,
            column: 25
          },
          end: {
            line: 18,
            column: 37
          }
        }],
        line: 18
      },
      "1": {
        loc: {
          start: {
            line: 19,
            column: 2
          },
          end: {
            line: 63,
            column: 3
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 20,
            column: 4
          },
          end: {
            line: 24,
            column: 8
          }
        }, {
          start: {
            line: 26,
            column: 4
          },
          end: {
            line: 30,
            column: 8
          }
        }, {
          start: {
            line: 31,
            column: 4
          },
          end: {
            line: 35,
            column: 8
          }
        }, {
          start: {
            line: 37,
            column: 4
          },
          end: {
            line: 41,
            column: 8
          }
        }, {
          start: {
            line: 43,
            column: 4
          },
          end: {
            line: 47,
            column: 8
          }
        }, {
          start: {
            line: 55,
            column: 4
          },
          end: {
            line: 59,
            column: 8
          }
        }, {
          start: {
            line: 61,
            column: 4
          },
          end: {
            line: 62,
            column: 19
          }
        }],
        line: 19
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0],
      "1": [0, 0, 0, 0, 0, 0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "7645e9883b8748c7eaeb2e0e6a59f16d7b188c6e"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_vpify0p24 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_vpify0p24();
import { SET_NEW_SONG, SET_PLAYING_SONG, SET_SONG_INDEX, INC_SONG_INDEX, DEC_SONG_INDEX,
// SET_ARTIST,
TOGGLE_IS_SONGLIST_OPEN } from "../constants";
const initialState = (cov_vpify0p24().s[0]++, {
  playingSong: null,
  newSong: null,
  songIndex: -1,
  isSongListOpen: false
});
cov_vpify0p24().s[1]++;
const reducer = (state = (cov_vpify0p24().b[0][0]++, initialState), action) => {
  cov_vpify0p24().f[0]++;
  cov_vpify0p24().s[2]++;
  switch (action.type) {
    case SET_PLAYING_SONG:
      cov_vpify0p24().b[1][0]++;
      cov_vpify0p24().s[3]++;
      return {
        ...state,
        playingSong: action.payload
      };
    case SET_NEW_SONG:
      cov_vpify0p24().b[1][1]++;
      cov_vpify0p24().s[4]++;
      return {
        ...state,
        newSong: action.payload
      };
    case SET_SONG_INDEX:
      cov_vpify0p24().b[1][2]++;
      cov_vpify0p24().s[5]++;
      return {
        ...state,
        songIndex: action.payload
      };
    case INC_SONG_INDEX:
      cov_vpify0p24().b[1][3]++;
      cov_vpify0p24().s[6]++;
      return {
        ...state,
        songIndex: state.songIndex + 1
      };
    case DEC_SONG_INDEX:
      cov_vpify0p24().b[1][4]++;
      cov_vpify0p24().s[7]++;
      return {
        ...state,
        songIndex: state.songIndex - 1
      };

    // case SET_ARTIST:
    //   return {
    //     ...state,
    //     artist: action.payload,
    //   };

    case TOGGLE_IS_SONGLIST_OPEN:
      cov_vpify0p24().b[1][5]++;
      cov_vpify0p24().s[8]++;
      return {
        ...state,
        isSongListOpen: !state.isSongListOpen
      };
    default:
      cov_vpify0p24().b[1][6]++;
      cov_vpify0p24().s[9]++;
      return state;
  }
};
export default reducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJTRVRfTkVXX1NPTkciLCJTRVRfUExBWUlOR19TT05HIiwiU0VUX1NPTkdfSU5ERVgiLCJJTkNfU09OR19JTkRFWCIsIkRFQ19TT05HX0lOREVYIiwiVE9HR0xFX0lTX1NPTkdMSVNUX09QRU4iLCJpbml0aWFsU3RhdGUiLCJwbGF5aW5nU29uZyIsIm5ld1NvbmciLCJzb25nSW5kZXgiLCJpc1NvbmdMaXN0T3BlbiIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIl0sInNvdXJjZXMiOlsiY3VycmVudFNlc3Npb25SZWR1Y2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFNFVF9ORVdfU09ORyxcbiAgU0VUX1BMQVlJTkdfU09ORyxcbiAgU0VUX1NPTkdfSU5ERVgsXG4gIElOQ19TT05HX0lOREVYLFxuICBERUNfU09OR19JTkRFWCxcbiAgLy8gU0VUX0FSVElTVCxcbiAgVE9HR0xFX0lTX1NPTkdMSVNUX09QRU4sXG59IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBwbGF5aW5nU29uZzogbnVsbCxcbiAgbmV3U29uZzogbnVsbCxcbiAgc29uZ0luZGV4OiAtMSxcbiAgaXNTb25nTGlzdE9wZW46IGZhbHNlLFxufTtcblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNFVF9QTEFZSU5HX1NPTkc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcGxheWluZ1Nvbmc6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgfTtcblxuICAgIGNhc2UgU0VUX05FV19TT05HOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG5ld1Nvbmc6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgfTtcbiAgICBjYXNlIFNFVF9TT05HX0lOREVYOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNvbmdJbmRleDogYWN0aW9uLnBheWxvYWQsXG4gICAgICB9O1xuXG4gICAgY2FzZSBJTkNfU09OR19JTkRFWDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzb25nSW5kZXg6IHN0YXRlLnNvbmdJbmRleCArIDEsXG4gICAgICB9O1xuXG4gICAgY2FzZSBERUNfU09OR19JTkRFWDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzb25nSW5kZXg6IHN0YXRlLnNvbmdJbmRleCAtIDEsXG4gICAgICB9O1xuXG4gICAgLy8gY2FzZSBTRVRfQVJUSVNUOlxuICAgIC8vICAgcmV0dXJuIHtcbiAgICAvLyAgICAgLi4uc3RhdGUsXG4gICAgLy8gICAgIGFydGlzdDogYWN0aW9uLnBheWxvYWQsXG4gICAgLy8gICB9O1xuXG4gICAgY2FzZSBUT0dHTEVfSVNfU09OR0xJU1RfT1BFTjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc1NvbmdMaXN0T3BlbjogIXN0YXRlLmlzU29uZ0xpc3RPcGVuLFxuICAgICAgfTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUE7TUFBQTtJQUFBO0VBQUE7RUFBQTtBQUFBO0FBQUE7QUFmWixTQUNFQSxZQUFZLEVBQ1pDLGdCQUFnQixFQUNoQkMsY0FBYyxFQUNkQyxjQUFjLEVBQ2RDLGNBQWM7QUFDZDtBQUNBQyx1QkFBdUIsUUFDbEIsY0FBYztBQUVyQixNQUFNQyxZQUFZLDRCQUFHO0VBQ25CQyxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsT0FBTyxFQUFFLElBQUk7RUFDYkMsU0FBUyxFQUFFLENBQUMsQ0FBQztFQUNiQyxjQUFjLEVBQUU7QUFDbEIsQ0FBQztBQUFDO0FBRUYsTUFBTUMsT0FBTyxHQUFHLENBQUNDLEtBQUssK0JBQUdOLFlBQVksR0FBRU8sTUFBTSxLQUFLO0VBQUE7RUFBQTtFQUNoRCxRQUFRQSxNQUFNLENBQUNDLElBQUk7SUFDakIsS0FBS2IsZ0JBQWdCO01BQUE7TUFBQTtNQUNuQixPQUFPO1FBQ0wsR0FBR1csS0FBSztRQUNSTCxXQUFXLEVBQUVNLE1BQU0sQ0FBQ0U7TUFDdEIsQ0FBQztJQUVILEtBQUtmLFlBQVk7TUFBQTtNQUFBO01BQ2YsT0FBTztRQUNMLEdBQUdZLEtBQUs7UUFDUkosT0FBTyxFQUFFSyxNQUFNLENBQUNFO01BQ2xCLENBQUM7SUFDSCxLQUFLYixjQUFjO01BQUE7TUFBQTtNQUNqQixPQUFPO1FBQ0wsR0FBR1UsS0FBSztRQUNSSCxTQUFTLEVBQUVJLE1BQU0sQ0FBQ0U7TUFDcEIsQ0FBQztJQUVILEtBQUtaLGNBQWM7TUFBQTtNQUFBO01BQ2pCLE9BQU87UUFDTCxHQUFHUyxLQUFLO1FBQ1JILFNBQVMsRUFBRUcsS0FBSyxDQUFDSCxTQUFTLEdBQUc7TUFDL0IsQ0FBQztJQUVILEtBQUtMLGNBQWM7TUFBQTtNQUFBO01BQ2pCLE9BQU87UUFDTCxHQUFHUSxLQUFLO1FBQ1JILFNBQVMsRUFBRUcsS0FBSyxDQUFDSCxTQUFTLEdBQUc7TUFDL0IsQ0FBQzs7SUFFSDtJQUNBO0lBQ0E7SUFDQTtJQUNBOztJQUVBLEtBQUtKLHVCQUF1QjtNQUFBO01BQUE7TUFDMUIsT0FBTztRQUNMLEdBQUdPLEtBQUs7UUFDUkYsY0FBYyxFQUFFLENBQUNFLEtBQUssQ0FBQ0Y7TUFDekIsQ0FBQztJQUVIO01BQUE7TUFBQTtNQUNFLE9BQU9FLEtBQUs7RUFBQztBQUVuQixDQUFDO0FBRUQsZUFBZUQsT0FBTyJ9