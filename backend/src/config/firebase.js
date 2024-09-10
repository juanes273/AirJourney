const admin = require('firebase-admin');
require('dotenv').config(); 
const serviceAccount = JSON.parse(process.env.SERVICE_ACCOUNT);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  authDomain: "airjourney-eaaf2.firebaseapp.com",
  projectId: "airjourney-eaaf2",
  storageBucket: "airjourney-eaaf2.appspot.com"
});


const db = admin.firestore(); 

module.exports = {admin, db};