require("dotenv").config();
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.DATABASE_URL,
});

const cloudFirestore = admin.firestore();
const fireStoreage = admin.storage();

cloudFirestore.settings({ timestampsInSnapshots: true });

module.exports = {
  cloudFirestore,
  fireStoreage,
};
