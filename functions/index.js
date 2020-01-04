const functions = require("firebase-functions");

// generate a function indicating a message
exports.firstFunction = functions.https.onRequest((request, response) => {
  response.send("Hello Tandavala");
});
