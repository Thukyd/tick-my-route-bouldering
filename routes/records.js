const { Router } = require("express");  
const Record = require("../models/Record")

// TODO openApi Swagger für die Doku
// Spec in die YAML und daraus in Webseite generieren
// Besser => Nest.js: aus den Annotationen kann ich angeben was in die Specs wandert

// TODO
// + anschauen: SwaggerUI: Aus YAML die Webseite erzeugen

const router = Router()

/*
    TODO documentation
*/
router.get("/", async(req, res) => {
    try{
        const records = await Record.find();
        if(!records) {
            throw new Error("No records")
        } 
        res.status(200).json(records);  
    } catch (error) {
        res.status(400).json({message: error.message})
    } 
});

/* 
    TODO documentation
*/
router.post("/", async(req, res) => {
    const {difficulty, date} = req.body;
    const newRecord = new Record({difficulty, date})

    try {
        const record = await newRecord.save();
        if (!record) {
            throw new Error("There was an error saving the record")
        }
        res.status(200).json(record)

    } catch (error){
        res.status(500).json({message: error.message})
    }
});


// TODO Careful => you did not follow the tutorial here. Be aware that the id was added as part of the rout originally. You add it as part of the query 

/* 
    TODO documentation
*/
router.delete("/", async(req, res) => {
    // see: https://stackoverflow.com/questions/17007997/how-to-access-the-get-parameters-after-in-express
    req.query.id === ':id'  // adds the id as a param route and expects a variable id with the syntax ":id"
    const {id} = req.query;
    
    try {
        const record = Record.findById(id);
        if(!record) {
            throw new Error("No record was found");
        }
        const removed = await record.remove()
        if (!removed) {
            throw new Error("There was a problem deleting the record")
        }

        res.status(200).json({id})
    } catch (error) {
        res.status(404).json({message: error.message});
    }

})


module.exports = router;

