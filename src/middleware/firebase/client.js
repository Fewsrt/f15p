require("dotenv").config();
const admin = require("firebase-admin");
// const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert({
    project_id: process.env.FIREBASE_PROJECT_ID,
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  }),
  databaseURL: process.env.DATABASE_URL,
});

const cloudFirestore = admin.firestore();
const fireStoreage = admin.storage();

cloudFirestore.settings({ timestampsInSnapshots: true });

module.exports = {
  cloudFirestore,
  fireStoreage,
};
