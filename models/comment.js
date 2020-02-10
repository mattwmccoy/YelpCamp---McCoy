var mongoose = require("mongoose");

var commentSchema = mongoose.Schema({
    text: String,
	createdAt: { type: Date, default: Date.now },
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    }
	//author is an object, not a string like before
});

module.exports = mongoose.model("Comment", commentSchema);