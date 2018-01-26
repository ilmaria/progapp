// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

import * as React           from "react";
import * as ReasonReact     from "reason-react/src/ReasonReact.js";
import * as Utils$EasyDrive from "../../Utils.bs.js";

var component = ReasonReact.statelessComponent("Markdown");

function make(content, _) {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return React.createElement("div", undefined, Utils$EasyDrive.stringElem(content));
    });
  return newrecord;
}

export {
  component ,
  make      ,
  
}
/* component Not a pure module */
