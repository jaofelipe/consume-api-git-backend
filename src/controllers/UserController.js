const axios = require('axios');
const parse = require('parse-link-header');
require('dotenv/config');

module.exports = {
  
  async index(req, res) {
    const { since, per_page } = req.query;
    
    const request = `https://api.github.com/users?since=${since}&per_page=${per_page}`;
    const response = await axios.get(request, 
    {
        headers: {
          // Include the token in the Authorization header
          Authorization: 'token ' + process.env.TOKEN,
          accept: 'application/json'
        }
      
    });
    
    const link = parse(response.headers.link);
    console.log(link);

    var users = response.data.map((item) =>{
        return{
          id: item.id,
          login: item.login,
          html_url: item.html_url,
          
        }
    });   

    return res.json({users, link});
  },

  async details(req, res) {
    const { username } = req.params;

    const response = await axios.get(`https://api.github.com/users/${username}`,
    {
        headers: {
          // Include the token in the Authorization header
          Authorization: 'token ' + process.env.TOKEN,
          accept: 'application/json'
        }
      
    });
    

    const { id, login, html_url, created_at} = response.data;
    
    return res.json({ id, login, html_url, created_at});
  }
};