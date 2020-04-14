const axios = require('axios');
const parse = require('parse-link-header');

module.exports = {
  
  async index(req, res) {
    const token = "b7bc514cb2148e7cc1886890d048df1dceb11a7f";
    const { since, per_page } = req.query;
    
    const request = `https://api.github.com/users?since=${since}&per_page=${per_page}`;
    const response = await axios.get(request, 
    {
        headers: {
          // Include the token in the Authorization header
          Authorization: 'token ' + token,
          accept: 'application/json'
        }
      
    });
    
    const link = parse(response.headers.link);

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

    const response = await axios.get(`https://api.github.com/users/${username}`);

    const { id, login, html_url, created_at} = response.data;
    
    return res.json({ id, login, html_url, created_at});
  }
};