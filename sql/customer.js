var sql = require('mssql');


           var config = {
              user: 'sa',
              password: '123456',
              server: 'Yordan\\Yordan',
              database: 'northwind'
           }
           


           var customer = function ( req, res) {
            // connect to your database
            sql. connect( config, function ( err) {
            if ( err) console. log( err);
            
            // create Request object
            var request = new sql. Request();
            // query to the database and get the records
            request. query( 'select * from [dbo].[Customers]', function ( err, recordset) {
            if ( err) console. log( err)
            
            // send records as a response
            res. send( recordset);
            sql.close()
            });
            });
            } //);
        //    /*--------------------Connection--------------------------------*/

                   //  module.exports.report = report;
            //  module.exports.DB = DB;
            module.exports.customer = customer;

