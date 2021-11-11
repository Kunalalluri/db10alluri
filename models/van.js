const mongoose = require("mongoose")
const vanSchema = mongoose.Schema({
names: String,
colour: String,
cost: Number
})
module.exports = mongoose.model("Van",
vanSchema)

