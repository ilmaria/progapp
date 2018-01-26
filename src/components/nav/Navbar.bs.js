// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

import * as React       from "react";
import * as ReasonReact from "reason-react/src/ReasonReact.js";

(( require('./Navbar.css') ));

var menuIcon = ( require('../../images/icons/menu.svg') );

var searchIcon = ( require('../../images/icons/search.svg') );

var component = ReasonReact.statelessComponent("Navbar");

function make(menu_callback, search_callback, _) {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return React.createElement("nav", {
                  className: "flex items-center justify-between"
                }, React.createElement("button", {
                      className: "no-btn mx2",
                      onClick: menu_callback
                    }, React.createElement("img", {
                          alt: "Menu icon",
                          src: menuIcon
                        })), React.createElement("input", {
                      placeholder: "Search"
                    }), React.createElement("button", {
                      className: "no-btn mx2",
                      onClick: search_callback
                    }, React.createElement("img", {
                          alt: "Menu icon",
                          src: searchIcon
                        })));
    });
  return newrecord;
}

export {
  menuIcon   ,
  searchIcon ,
  component  ,
  make       ,
  
}
/*  Not a pure module */
