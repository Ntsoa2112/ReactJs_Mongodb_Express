var MongoClient = require('mongodb').MongoClient;

module.exports = {
    connection: function(req, res){
        MongoClient.connect('mongodb://localhost:27017/test', function(err, db) {
            if (err) {
                throw err;
            }
            console.log(db);
            return db;
        });
    }
}