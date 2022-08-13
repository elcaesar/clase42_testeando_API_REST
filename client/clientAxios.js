const axios = require('axios');

const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  
  getUsers();

axios('http://localhost:8080/', {
    method: 'POST',
    //req.body
    data: {
        email: "cesar@gmail.com",
        username: "elcaesar",
        password: "123456"
    }
}).then(result => console.log(result.data))