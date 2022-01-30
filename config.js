/*
    Structure of mongo-credentials.json in credentials folder

        {
            "connection_user" : {
            "name" : "YOUR_USER",
            "pw" : "YOUR_PASSWORD",
            "role_descr" : "read / write any database"

            },
             "uri" : "mongodb+srv://YOUR_USER:YOUR_PASSWORD@MY_CLUSTER.dkwzf.mongodb.net/user_records?retryWrites=true&w=majority"
        }
*/



// TODO==> Mongo String externalisieren
//import MONGO_CREDS from "./credentials/mongo-credentials.json" 


//////////////// TEST
/// "mongodb+srv://application_user:hf7QkiOtyDp3Eyjq@tick-my-route-boulderin.dkwzf.mongodb.net/user_records?retryWrites=true&w=majority"
////////////////

module.exports = {
    port: process.env.PORT || 3000,
    mongoURI : "mongodb+srv://application_user:hf7QkiOtyDp3Eyjq@tick-my-route-boulderin.dkwzf.mongodb.net/user_records?retryWrites=true&w=majority"

}
