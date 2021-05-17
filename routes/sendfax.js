const axios = require("axios");
const qs = require("qs");
const token = "KEY017880D69A68B843E7E805E3C1634345_meOtfQUgtxMZdh8X8wc3Vl";

exports.sendFax = (req, res) => {
  axios({
    method: "post",
    url: "https://api.telnyx.com/v2/faxes",
    data: qs.stringify({
      media_url:
        "https://faxstorageaccount.blob.core.windows.net/attachemnts-demo/Background%20Declaration%20Form%20IMM%205669.pdf?sv=2018-03-28&sr=b&sig=ch7Vxr%2FS9FFZvGFsTQHEaFRtZgfdbZr8kOZ%2BO3B%2FLbU%3D&spr=https%2Chttp&se=2021-05-18T04%3A23%3A23Z&sp=r",
      connection_id: "1603983059386893943",
      to: "+16478699079",
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
