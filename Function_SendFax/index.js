module.exports = async function (context, req) {
  // Getting Values from HTTP Reqquest

  const responseMessage = req.body.data.payload.status;

  context.log("JavaScript HTTP trigger function processed a request.");

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: responseMessage,
  };
};
