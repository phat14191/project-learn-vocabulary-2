let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let learnSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    descriptions: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

module.exports = mongoose.model("Learn", learnSchema);
