// Generated by BUCKLESCRIPT VERSION 2.2.3, PLEASE EDIT WITH CARE

import * as React from "react";
import * as ReasonReact from "reason-react/src/ReasonReact.js";
import * as Utils$Drive from "../Utils.bs.js";

var component = ReasonReact.statelessComponent("Markdown");

function make(content, _) {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return React.createElement("div", undefined, Utils$Drive.stringElem(content));
    });
  return newrecord;
}

export {
  component ,
  make ,
  
}
/* component Not a pure module */
