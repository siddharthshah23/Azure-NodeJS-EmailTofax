module.exports = async function (context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");
  const axios = require("axios");
  const qs = require("qs");
  const token = "KEY017880D69A68B843E7E805E3C1634345_meOtfQUgtxMZdh8X8wc3Vl";

  const name = req.query.name || (req.body && req.body.mediaurl);

  const mediaurl = req.body.mediaurl;
  const faxto = req.body.faxto;

  axios({
    method: "post",
    url: "https://api.telnyx.com/v2/faxes",
    data: qs.stringify({
      media_url: mediaurl,
      connection_id: "1603983059386893943",
      to: faxto,
      from: "+14376007467",
    }),
    headers: {
      "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
  }).then((result) => {
    context.log("Fax sent", result);
    res.status(202).json({ Message: "Fax Sent Succesfully" });
  });

  //   const responseMessage = name
  //     ? "Hello, " + name + ". This HTTP triggered function executed successfully."
  //     : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

  const responseMessage = `API call success. Fax Sent ${faxto}`;

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: responseMessage,
  };
};
