const express=require("express")
const app = express();
const axios = require('axios');
const API_KEY= 'f7c60082eff916bf6b71057813e68f3c'
const cors = require("cors");

app.use(cors())
const router=express.Router()
router.get('/', async (req, res) => {
  try {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&primary_release_year=2023`;

    const response = await axios.get(url, {
      headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = router 