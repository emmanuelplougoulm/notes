require("dotenv").config();

var config = {
  dev: "development",
  test: "testing",
  prod: "production",
  port: process.env.PORT || 5000,
};
