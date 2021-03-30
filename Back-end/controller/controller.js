var MongoClient = require('mongodb').MongoClient;

module.exports = {
    index: async function(req, res){
        res.redirect("http://localhost:3000/");      
    },

    list_users: async function(req, res){
        MongoClient.connect('mongodb://localhost:27017/test', function(err, db) {
            if (err)throw err;
            db.collection('user').find().toArray(function(err, result) {
                if (err)throw err;
                console.log(result);
                return res.send(result);
              });
        });
        //res.redirect("http://localhost:3000/");
        
    }
}