// Añadir DatabaseLayer a la lambda para usar doSql
// const doSql = require("/opt/nodejs/connection");
// let response = doSql("SELECT * from `jos_users`");

exports.handler = (event, context, callback) => {
  let headers = {
    "Access-Control-Allow-Headers":
      "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
    "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
    "Access-Control-Allow-Origin": "*",
  }

  let responseSuccess = {
    statusCode: 200,
    headers: headers,
    body: {
      responseType: "Success",
      message: "ok",
    },
  };

  let responseError = {
    statusCode: 400,
      headers: headers,
    body: {
      responseType: "Error",
      message: "error",
    },
  };
  
  if (error) {
    responseError.body = JSON.stringify(responseError.body);
    callback(responseError);
  } else {
    responseSuccess.body = JSON.stringify(responseSuccess.body);
    callback(undefined, responseSuccess);
  }
};
