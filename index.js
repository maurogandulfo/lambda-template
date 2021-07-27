// const doSql = require("./opt/nodejs/connection");

const responseSuccess = {
  statusCode: 200,
  body: JSON.stringify({
    message: "ok",
  }),
};

const responseError = {
  statusCode: 400,
  body: JSON.stringify({
    message: "error",
  }),
};

exports.handler = (event, context, callback) => {
  if (error) {
    callback(responseError);
  } else {
    callback(undefined, responseSuccess);
  }
};
