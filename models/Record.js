const {Schema, model} = require("mongoose")

// Boulder grades are from 0 till 17 

const now = new Date().getTime()
const RecordSchema = new Schema({
    difficulty: {
        type: Number,
        required: true
    },
    date: {
        type: Number,
        default: now
    }
});

const Record = model("record", RecordSchema);
module.exports = Record;