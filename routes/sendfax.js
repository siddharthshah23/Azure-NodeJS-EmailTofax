const axios = require("axios");
const qs = require("qs");
const token = "KEY017880D69A68B843E7E805E3C1634345_meOtfQUgtxMZdh8X8wc3Vl";

exports.sendFax = (req, res) => {
  axios({
    method: "post",
    url: "https://api.telnyx.com/v2/faxes",
    data: qs.stringify({
      media_url:
        "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      connection_id: "1603983059386893943",
      to: "+14162768097",
      from: "+14376007467",
    }),
    headers: {
      "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((result) => {
      console.log("Fax sent", result);
      res.status(200).json({ Message: "Fax Sent Succesfully" });
    })
    .catch((err) => {
      res.json(err);
    });
};
