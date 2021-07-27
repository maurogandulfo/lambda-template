// const doSql = require("./opt/nodejs/connection");

const responseSuccess = {
  statusCode: 200,
  body: {
    responseType: "Success",
    message: "ok",
  },
};

const responseError = {
  statusCode: 400,
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
