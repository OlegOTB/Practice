const mongoose = require("mongoose");
const mapComment = require("./mapComment");

module.exports = function (post) {
  return {
    id: post.id,
    title: post.title,
    imageUrl: post.image,
    content: post.content,
    comments: post.comments.map((comment) =>
      // mongoose.isObjectIdOrHexString(comment) ? comment : mapComment(comment)
      isValidObjectId(comment) ? comment : mapComment(comment)
    ),
    publishedAt: post.createdAt,
  };
};

// Requiring ObjectId from mongoose npm package
const ObjectId = require("mongoose").Types.ObjectId;

// Validator function
function isValidObjectId(id) {
  if (ObjectId.isValid(id)) {
    if (String(new ObjectId(id)) === String(id)) return true;
    return false;
  }
  return false;
}
