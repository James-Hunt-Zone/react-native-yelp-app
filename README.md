# react-native-yelp-app

A simple app that uses the [Yelp API](https://www.yelp.com/developers) to list restaurants in your area that match your search criteria. Results are split into 3 groups (Low, Medium and High cost). You can use scroll through the results and tap to see more details.

App developed as part of the "complete react native and redux course" on [Udemy]([https://www.udemy.com/course/the-complete-react-native-and-redux-course/).

## Installation

Install the npm packages with:

    npm install

## Running the application

Run the following command to start the application. This will use [expo.io](https://expo.io/) to build the application ready to be tested on iOS or Android. You can use the Expo app on either the iOS or Google Play store. Alternatively you can run the application using the simulator.

`npm start`

## Yelp API

This app is using the Yelp API. To test you will need to set up an app within yelp. To do this:

1.  Create an account on [Yelp](https://www.yelp.com/developers/documentation/v3)
2.  Within Yelp, 'Create an App' under General > [Manage App](https://www.yelp.com/developers/v3/manage_app)
3.  Use the API Key generated and add it to `src/api/yelp.js` replacing `const API_KEY='';` with `const API_KEY='YOUR_KEY_GOES_HERE';`.

**Note** - _Typically you would have these keys as environment variables. But for demo purposes this hasn't been done._
