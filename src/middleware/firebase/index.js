const { cloudFirestore } = require("./client");

const saveUserProfile = async ({ profile, status }) => {
  await cloudFirestore.collection("users").doc(profile.userId).set({
    profile,
    status,
  });
};

async function getUserData({ userId }) {
  const data = await cloudFirestore.collection("users").doc(userId).get();

  if (!data.exists) {
    throw Error("No Such Document!");
  } else {
    return data.data();
  }
}

const saveSensorData = async ({ message }) => {
  const obj = JSON.parse(message.toString());
  await cloudFirestore.collection("sensor").doc().set(obj);
};

module.exports = {
  saveUserProfile,
  getUserData,
  saveSensorData,
};
