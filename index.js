const express = require('express')
const app = express()
var report = require("./sql/report");
var customer = require("./sql/customer");

app.get('/',report.report);
app.get('/customer',customer.customer)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})