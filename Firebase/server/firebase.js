const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const serviceAccount = require('./todo-test-c0cd2-firebase-adminsdk-2tdqk-f4dd117746.json');
initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

module.exports = db;