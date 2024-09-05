const admin = require('firebase-admin');
require('dotenv').config();  // Carga las variables del archivo .env
//const serviceAccount = require('../airjourney-eaaf2-firebase-adminsdk-l4g3b-4e28e853e6.json'); // Cambia a la ruta correcta
const serviceAccount = JSON.parse(process.env.SERVICE_ACCOUNT);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  authDomain: "airjourney-eaaf2.firebaseapp.com",
  projectId: "airjourney-eaaf2",
  storageBucket: "airjourney-eaaf2.appspot.com"
});


const db = admin.firestore();  // Inicializamos Firestore

module.exports = db;