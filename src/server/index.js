const dotenv = require('dotenv');
dotenv.config();

var path = require('path'); // check if needed
// const mockAPIResponse = require('./mockAPI.js');
// const fetch = require('node-fetch');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'));

// Designates what port the app will listen to for incoming requests
const port = 8080;
app.listen(port, () => {
  // Callback to debug
  console.log(`The server is running on localhost:${port}`)
});

// console.log(__dirname);

app.get('/', (req, res) => {
  // res.sendFile('dist/index.html')
  res.sendFile(path.resolve('dist/index.html'))
});

// app.get('/test', function (req, res) {
//   res.send(mockAPIResponse)
// })

// Declare an API key variable
const api_key = process.env.API_KEY;

// POST route
app.post('/data', async (req, res) => {
  // Define user's URL from the request parameters
  const article = req.body.url;
  // Return an article analysis data from MeaningCloud.com
  const semanticAnalysis = await (fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${api_key}&url=${article}&lang=en`, {
    method: 'POST',
  }))

  try {
    const newData = await semanticAnalysis.json();
    console.log(newData);
    res.send(newData);
  } catch(error) {
    // Appropriately handle the error
    console.log("Error", error);
  }  
})

/*
  app.post('/addData', (req, res) => {
    res.send(req.body);
  });
*/

/* Udacity Knowledge info:
fetch("https://api.meaningcloud.com/sentiment-2.1?key=<API_KEY>&of=json&url=<URL_INPUT>&lang=en", {
  method: "POST"
})
*/