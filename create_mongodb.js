var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.createCollection("customers", function(err, res) {
    if (err) throw err;
    console.log("Table created!");
    db.close();
  });
});
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myobj = { name: "Company Inc", address: "Highway 37" };
  db.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 record inserted");
    db.close();
  });
});
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection("customers").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
    console.log(result.address);
    db.close();
  });
});  
