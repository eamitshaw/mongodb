const mongoClient = require("mongodb").MongoClient;
const assert= require("assert");

const url= "mongodb://localhost:27017";
const dbname = "conFusion";

mongoClient.connect(url, (err, client)=>{

    assert.equal(err, null);

    console.log("DB connected successfully");
    const db= client.db(dbname);
    const collection= db.collection('dishes');

    collection.insertOne({"name": "AOT", "description": "Engineering College"}, (err, result)=>{
        
        assert.equal(err, null);

        console.log("Data inserted successfully" + result.ops);

        collection.find({}).toArray((err,docs)=>{

            assert.equal(err, null);
            console.log("found");
            console.log(docs);

            collection.drop('dishes', (err, result)=>{

                assert.equal(err, null);
                console.log("Deleted");

                client.close();

            });
  
        });



   });


});



