var express = require("express");
var router = express.Router();

var sql = require("mssql/msnodesqlv8");

var products;

const getProductsAsync = async () => {
  if (products) {
    return products;
  }

  const config = {
    driver: "msnodesqlv8",
    connectionString:
      "Driver={SQL Server Native Client 11.0};Server={(localdb)\\ProjectsV13};Database={MC_Project};Trusted_Connection={yes};"
  };

  await sql.connect(config);

  products = (await sql.query("SELECT * FROM [dbo].[Products]")).recordset;

  return products;
};

router.get("/", function(req, res, next) {
  getProductsAsync().then(products => res.send(products));
});

module.exports = router;
