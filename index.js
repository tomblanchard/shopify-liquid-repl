var request = require("request-promise");
var express = require("express");
var body_parser = require("body-parser");
var Shopify = require("shopify-api-node");
var randomstring = require("randomstring");

var shopify_creds = require("./shopify-creds");

var app = express();
var app_port = process.env.PORT || 8080;

var shop_name = shopify_creds.name;
var shop_url = `https://${shop_name}.myshopify.com`;
var shop_theme_id = shopify_creds.theme_id;

var shopify = new Shopify({
  shopName: shop_name,
  apiKey: shopify_creds.key,
  password: shopify_creds.password,
  autoLimit: true
});

app.use("/assets", express.static("assets"));

app.use(body_parser.json());
app.use(body_parser.urlencoded({
  extended: true
}));

app.get("/", (req, res) => {
  return res.sendFile("./index.html", { root: __dirname });
});

app.post("/", (req, res) => {
  var input = `{% layout none %}${req.body.input}`;

  var template_suffix = randomstring.generate({
    length: 12,
    charset: "alphabetic"
  });

  var asset_key = `templates/index.${template_suffix}.liquid`;

  shopify.asset.create(shop_theme_id, {
    "key": asset_key,
    "value": input
  })
    .then(() => {
      return request({
        url: `${shop_url}/?view=${template_suffix}`,
        headers: { "User-Agent": "Mozilla" }
      });
    })
    .then((template_res) => {
      shopify.asset.delete(shop_theme_id, {
        asset: {
          "key": asset_key
        }
      });

      return res.send(template_res);
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
});

app.listen(app_port, () => {
  console.log("Server up!");
});
