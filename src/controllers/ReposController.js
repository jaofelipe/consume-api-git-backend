const axios = require('axios');
require('dotenv/config');

module.exports = {
  
  async index(req, res) {

    const { username } = req.params;
    const response = await axios.get(`https://api.github.com/users/${username}/repos`,
    {
      headers: {
        // Include the token in the Authorization header
        Authorization: 'token ' + process.env.TOKEN,
        accept: 'application/json'
      }
    
    });
   
    
    const data = response.data.map((item) =>{
      return {
        id: item.id,
        name: item.name,
        html_url: item.html_url
      }
  });

    return res.json(data);
  }
};