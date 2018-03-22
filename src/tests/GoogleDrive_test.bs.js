// Generated by BUCKLESCRIPT VERSION 2.2.3, PLEASE EDIT WITH CARE

import * as Jest from "@glennsl/bs-jest/src/jest.js";
import * as Curry from "bs-platform/lib\\es6/curry.js";
import * as GoogleDrive$Drive from "../GoogleDrive.bs.js";

var mock_user = /* record */[
  /* id */"id",
  /* name */"name",
  /* imageUrl */"url",
  /* email */"email"
];

var mock_google_user = ( {
  getBasicProfile: () => ({
    id: "id",
    name: "name",
    imageUrl: "url",
    email: "email"
  })
} );

var mock_current_user = ( {
  get: () => mock_user,
  listen: () => {}
} );

var mock_auth_instance = {
  currentUser: mock_current_user
};

describe("GoogleDrive", (function () {
        Jest.testAsync(/* None */0, "should initialize", (function (assertion) {
                return GoogleDrive$Drive.init((function () {
                              return Curry._1(assertion, Jest.pass);
                            }));
              }));
        return Jest.testAsync(/* None */0, "login should change user", (function (assertion) {
                      return GoogleDrive$Drive.init((function (token) {
                                    GoogleDrive$Drive.listen_user_changes(token, (function (user) {
                                            return Curry._1(assertion, Jest.Expect[/* toBe */2](/* Some */[mock_user], Jest.Expect[/* expect */0](user)));
                                          }));
                                    return GoogleDrive$Drive.login(token);
                                  }));
                    }));
      }));

export {
  mock_user ,
  mock_google_user ,
  mock_current_user ,
  mock_auth_instance ,
  
}
/* mock_google_user Not a pure module */