// Añadir DatabaseLayer a la lambda para usar doSql
// const doSql = require("./opt/nodejs/connection");
// let response = doSql("SELECT * from `jos_users`");

let responseSuccess = {
  statusCode: 200,
  headers: {
    "Access-Control-Allow-Headers":
      "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
    "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
    "Access-Control-Allow-Origin": "*",
  },
  body: {
    responseType: "Success",
    message: "ok",
  },
};

let responseError = {
  statusCode: 400,
  headers: {
    "Access-Control-Allow-Headers":
      "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
    "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
    "Access-Control-Allow-Origin": "*",
  },
  body: {
    responseType: "Error",
    message: "error",
  },
};

exports.handler = (event, context, callback) => {
  if (error) {
    responseError.body = JSON.stringify(responseError.body);
    callback(responseError);
  } else {
    responseSuccess.body = JSON.stringify(responseSuccess.body);
    callback(undefined, responseSuccess);
  }
};
