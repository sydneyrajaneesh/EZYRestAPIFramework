$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("01_ValidUserName_ValidPassword.feature");
formatter.feature({
  "line": 2,
  "name": "Post Login API with valid user name and password",
  "description": "",
  "id": "post-login-api-with-valid-user-name-and-password",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@First"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "User calls web service to connect to Login Page",
  "description": "",
  "id": "post-login-api-with-valid-user-name-and-password;user-calls-web-service-to-connect-to-login-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@valid_username_and_password"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Login URL And valid user name And password",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "a user calls the Login URL using post method",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ],
      "line": 7
    },
    {
      "cells": [
        "test-user",
        "abc123"
      ],
      "line": 8
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "status code is 200 and validate the response message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginService.Login_URL_valid_user_name_And_password()"
});
formatter.result({
  "duration": 1209717378,
  "status": "passed"
});
formatter.match({
  "location": "LoginService.user_calls_Login_URL_using_post_method(DataTable)"
});
formatter.result({
  "duration": 3365915224,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 15
    }
  ],
  "location": "LoginService.validate_status_code(int)"
});
formatter.result({
  "duration": 10592264,
  "error_message": "java.lang.AssertionError: expected:\u003c400\u003e but was:\u003c200\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:555)\r\n\tat org.junit.Assert.assertEquals(Assert.java:542)\r\n\tat servicelayer.LoginService.validate_status_code(LoginService.java:37)\r\n\tat ✽.Then status code is 200 and validate the response message(01_ValidUserName_ValidPassword.feature:9)\r\n",
  "status": "failed"
});
});