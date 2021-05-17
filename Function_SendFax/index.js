const axios = require("axios");
const qs = require("qs");
const token = "KEY017880D69A68B843E7E805E3C1634345_meOtfQUgtxMZdh8X8wc3Vl";

module.exports = async function (context, req) {
  // Getting Values from HTTP Reqquest

  const content = req.body.content;

  //   const parsedOutput = JSON.parse(content);
  const mediaurl = `Hi`;
  //   const faxto = content.faxto;

  context.log("JavaScript HTTP trigger function processed a request.");

  const responseMessage = `Request Send : MediaUrl = ${mediaurl} , FaXto ${to}`;
  context.res = {
    // status: 200, /* Defaults to 200 */
    body: responseMessage,
  };
};
