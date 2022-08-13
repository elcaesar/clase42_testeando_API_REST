const config = require('./config');
const { initializeApp, applicationDefault } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');


class connectFirebase{ 
  constructor(){
    this.connected = true;
    this.client = initializeApp({
      credential  : applicationDefault(),
      databaseURL : 'https://ejemplo-teco-default-rtdb.firebaseio.com'
    });
    this.db = getFirestore();
    
  }

  

}

module.exports = connectFirebase;