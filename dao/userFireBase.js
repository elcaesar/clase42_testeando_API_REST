const UserFire = require('../config/connectFirebase');
const userFire = new UserFire()

class User {
  constructor(){

  }
  getAll = async () => {
    //const result = await userFire.connect('users').get();
    const result = await userFire.db.collection('users').get()
    return result.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
  };

  save = async (user) => {
    const email = user.email;
    const username = user.username;
    const password = user.password;

    return await userFire.connect('users').add({
      email,
      username,
      password
    })

  };
}

module.exports = User;