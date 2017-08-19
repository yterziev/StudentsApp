const express = require('express');

const app = express();
// tell the app to look for static files in these directories
app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));

// start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3000');
});


// const express = require('express')
// const app = express()
// var report = require("./sql/report");
// var customer = require("./sql/customer");

// app.get('/',report.report);
// app.get('/customer',customer.customer)

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!')
// })