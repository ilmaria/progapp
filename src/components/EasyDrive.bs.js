// Generated by BUCKLESCRIPT VERSION 2.2.3, PLEASE EDIT WITH CARE

import * as Block from "bs-platform/lib/es6/block.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as ReasonReact from "reason-react/src/ReasonReact.js";
import * as App$ReactTemplate from "./App.bs.js";
import * as GoogleData$ReactTemplate from "./GoogleData.bs.js";

var component = ReasonReact.reducerComponent("EasyDrive");

function make() {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function (self) {
      return ReasonReact.element(/* None */0, /* None */0, GoogleData$ReactTemplate.make((function (user, login, get_files_in_folder, get_recent_files) {
                        return ReasonReact.element(/* None */0, /* None */0, App$ReactTemplate.make(user, self[/* state */2][/* current_file */1], "root", (function (file) {
                                          return Curry._1(self[/* send */4], /* SelectFile */Block.__(1, [file]));
                                        }), get_files_in_folder, get_recent_files, login, (function () {
                                          return /* () */0;
                                        }), (function () {
                                          return /* () */0;
                                        }), /* array */[]));
                      })));
    });
  newrecord[/* initialState */10] = (function () {
      return /* record */[
              /* view : Main */0,
              /* current_file : None */0
            ];
    });
  newrecord[/* reducer */12] = (function (action, state) {
      if (action.tag) {
        return /* Update */Block.__(0, [/* record */[
                    /* view */state[/* view */0],
                    /* current_file : Some */[action[0]]
                  ]]);
      } else {
        return /* Update */Block.__(0, [/* record */[
                    /* view */action[0],
                    /* current_file */state[/* current_file */1]
                  ]]);
      }
    });
  newrecord[/* subscriptions */13] = (function (self) {
      return /* :: */[
              /* Sub */[
                (function () {
                    return ReasonReact.Router[/* watchUrl */1]((function (url) {
                                  var match = url[/* path */0];
                                  if (match) {
                                    if (match[1]) {
                                      return Curry._1(self[/* send */4], /* ShowView */Block.__(0, [/* Main */0]));
                                    } else {
                                      return Curry._1(self[/* send */4], /* ShowView */Block.__(0, [/* Folder */[match[0]]]));
                                    }
                                  } else {
                                    return Curry._1(self[/* send */4], /* ShowView */Block.__(0, [/* Main */0]));
                                  }
                                }));
                  }),
                ReasonReact.Router[/* unwatchUrl */2]
              ],
              /* [] */0
            ];
    });
  return newrecord;
}

export {
  component ,
  make ,
  
}
/* component Not a pure module */
