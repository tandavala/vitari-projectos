const functions = require("firebase-functions");

// to access firestore with functions
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

// generate a function indicating a message
exports.firstFunction = functions.https.onRequest((request, response) => {
  response.send("Hello Tandavala");
});

// Adds documents to the collection
const createNotification = notification => {
  // we are adding data to the notification
  return admin
    .firestore()
    .collection("notifications")
    .add(notification)
    .then(doc => console.log("adicionado uma notificação ", doc));
};
// functions that controls projects collection
exports.projectCreated = functions.firestore
  .document("projects/{projectId}")
  .onCreate(doc => {
    // Access the added project
    const project = doc.data();
    // Create the notification object
    const notity = {
      content: "Novo Projecto foi criado",
      user: `${project.authorNome} ${project.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    };

    // Add notitication object
    return createNotification(notity);
  });
