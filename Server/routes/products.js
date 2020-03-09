var express = require("express");
var router = express.Router();

const products = [
  {
    category: "Clothes",
    code: "skull_hoodie",
    displayName: "Skull hoodie",
    price: { value: 20, currency: "USD" }
  },
  {
    category: "Clothes",
    code: "red_t-shirt",
    displayName: "Red T-shirt",
    price: { value: 10, currency: "USD" }
  },
  {
    category: "Tools",
    code: "screwdriver",
    displayName: "Screwdriver",
    price: { value: 3, currency: "RON" }
  },
  {
    category: "Tools",
    code: "wrench",
    displayName: "Wrench",
    price: { value: 4, currency: "RON" }
  },
  {
    category: "Pets",
    code: "guinea_pig",
    displayName: "Guinea pig",
    price: { value: 60, currency: "RON" }
  },
  {
    category: "Pet food",
    code: "hay",
    displayName: "Hay",
    price: { value: 5, currency: "EUR" }
  }
];

router.get("/", function(req, res, next) {
  res.send(products);
});

module.exports = router;
