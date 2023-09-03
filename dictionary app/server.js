const express = require('express')
const app = express()
const axios = require('axios');
const port = 3000
const path = require('path');





app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,"./","index.html"))
  
})

app.get('/searchword', (req, res) => {
  res.send('Hello World!')
  
// console.log(req.params)
const dictionary=async()=>{


const options = {
  method: 'GET',
  url: 'https://mashape-community-urban-dictionary.p.rapidapi.com/define',
  params: {term: 'tech'},
  headers: {
    'X-RapidAPI-Key': '5993f902b8mshc12c46803594a66p12c663jsncc7d851ba210',
    'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	// console.log(response.data);
} catch (error) {
	console.error(error);
}
  }

  dictionary();
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
