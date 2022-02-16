# Udacity_Evaluate-News-Article

## Overview
This project is a part of the [Front End Web Developer](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011) nanodegree program.<br /> <br />
![The Evaluate-News-Article-App screenshot](src/client/images/News-App-Screenshot.jpg?raw=true "The Evaluate-News-Article-App screenshot")<br /><br />
The app allows users to run Sentiment Analysis (also known as opinion mining or emotion AI) on articles or blogs found on other websites. Sentiment Analysis is a sub-field of Natural Language Processing (NLP) that tries to identify and extract opinions within a given text across blogs, reviews, social media, forums, news etc.

## References
- Sentiment Analysis performed by [MeaningCloud.com](https://www.meaningcloud.com/).
- [Open Sance](https://fonts.google.com/specimen/Open+Sans) has been used as this project font, and was sourced from [Goggle Fonts](https://fonts.google.com/).

## Used technologies
- HTML
- Sass
- JavaScript
- Node
- Express
- API
- Webpack
- Jest
- Workbox Service Worker

## Get started
1. Fork the repo and clone or download the forked repo to you local computer.
2. In the command line navigate to the local app directory and run `npm install` command to install all dependencies from `package.json` file (make sure you have node installed).
3. Create `.env` file in the root directory to store your `API_KEY`:
![.env variable sample](src/client/images/API_KEY_sample-screenshot.jpg?raw=true ".env variable sample")<br />
You can find the MeaningCloud API [here](https://www.meaningcloud.com/developer/sentiment-analysis). Once you create an account with MeaningCloud, you will be given a license key to start using the API.
4. For the **development mode** run `npm run build-dev` command – the app will be opened in your default browser tab running on `localhost:8080`.
5. For the **production mode** run `npm run build-prod` and then `npm start`. Then you can open the app in a browser tab with the `localhost:8081` in the IP address bar.

## License
The app is free for the personal use.

## Copyright
Coded by Natalia Petrenko, 2021.