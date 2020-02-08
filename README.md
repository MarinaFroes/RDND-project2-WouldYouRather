
![logo](./src/components/icons/mylogo.svg) 
# Would You Rather Project  
## Udacity React Developer Nanodegree Project 2 - Introduction

This app is the second project of the Udacity React Developer Nanodegree and follows the "Would You Rather project specification" listed bellow and all the style guides provided by Udacity:
- CSS Style Guide
- HTML Style Guide
- JavaScript Style Guide
- Git Style Guide

## Overview
<!-- ADD PROJECT OVERVIEW -->
![screenshot]()

## Udacity Specification

- For this project I had to build a web app that lets a user play the “Would You Rather?” game. The game goes like this: A user is asked a question in the form: “Would you rather [option A] or [option B] ?”. Answering "neither" or "both" is against the rules.

- In my app, users will be able to answer questions, see which questions they haven’t answered, see how other people have voted, post questions, and see the ranking of users on the leaderboard.
 
## Udacity Requirements

### Application Setup
- [x] The application requires only `npm install` and `npm start` to install and launch.
- [x] A README is included with the project. The README includes a description and clear instructions for installing and launching the project.

### Login Flow
- [ ] There should be a way for the user to impersonate/ log in as an existing user. 
- [ ] The application works correctly regardless of which user is selected.
- [ ] The application allows the user to log out and log back in. The user should be logged in to submit new polling questions, vote, and view the leaderboard.
- [ ] Once the user logs in, the home page is shown.
- [ ] Whenever the user types something in the address bar, the user is asked to log in before the requested page is shown.

### Application Functionality

#### Home Page
- [x] The answered and unanswered polls are both available at the root.
- [x] The user can alternate between viewing answered and unanswered polls.
- [x] The unanswered questions are shown by default.
- [x] The name of the logged in user is visible on the page.
- [x] The user can navigate to the leaderboard at `/leaderboard`
- [x] The user can navigate to the form that allows the user to create a new poll at `/add`

#### Poll behavior
- [x] Each polling question resides in the correct category (answered and unanswered). 
- [x] A polling question links to details of that poll.
- [ ] The polls in both categories are arranged from the most recently created (top) to the least recently created (bottom).

#### Poll details
- [x] The details of the poll are available at `questions/:question_id`.
- [x] When a poll is clicked on the home page, the following is shown:
  - [x] the text “Would You Rather”;
  - [x] the picture of the user who posted the polling question; 
  - [x] and the two options.
- [x] For answered polls, each of the two options contains the following:
  - [x] the text of the option;
  - [x] the number of people who voted for that option;
  - [x] the percentage of people who voted for that option.
- [x] The option selected by the logged in user should be clearly marked.
- [ ] When the user is logged in, the details of the poll are shown. If the user is logged out, he/she is asked to log in before before being able to access the poll.
- [ ] The application asks the user to sign in and shows a 404 page if that poll does not exist. 

#### Voting mechanism
- [ ] Upon voting in a poll, all of the information of the answered poll is displayed.
- [ ] The user’s response is recorded and is clearly visible on the poll details page.
- [ ] When the user comes back to the home page, the polling question appears in the “Answered” column.
- [ ] The voting mechanism works correctly, and the data on the leaderboard changes appropriately.

#### New polls
- [x] The form is available at `/add`.
- [x] The application shows the text “Would You Rather” and has a form for creating two options.
- [ ] Upon submitting the form, a new poll is created and the user is taken to the home page.
- [ ] The new polling question appears in the correct category on the home page.

#### Leaderboard functionality
- [x] The Leaderboard is available at `/leaderboard`.
- [x] Each entry on the leaderboard contains the following:
  - [x] the user’s name;
  - [x] the user’s picture;
  - [x] the number of questions the user asked; 
  - [x] and the number of questions the user answered.
- [x] Users are ordered in descending order based on the sum of the number of questions they’ve answered and the number of questions they’ve asked.

#### Application navigability
- [x] The app contains a navigation bar that is visible on all of the pages.
- [x] The user can navigate between the page for creating new polls, and the leaderboard page, and the home page without typing the address into the address bar.

#### Backend interaction
- [x] The data that’s initially displayed is populated correctly from the backend.
- [ ] Each user’s answer and each new poll is correctly recorded on the backend.

#### Errors
- [ ] The code runs without errors. There are no warnings that resulted from not following the best practices listed in the documentation, such as using key for list items. All code is functional and formatted properly.

### Architecture
#### Store as single source of truth

- [ ] The store is the application’s source of truth.
- [ ] Components read the necessary state from the store; they do not have their own versions of the same state.
- [ ] There are no direct API calls in the components' lifecycle methods.

#### Redux State Management
- [ ] Most application state is managed by the Redux store. State-based props are mapped from the store rather than stored as component state.
- [ ] Form inputs and controlled components may have some state handled by the component.

#### State update
- [ ] Updates are triggered by dispatching action creators to reducers.
- [ ] Reducers and actions are written properly and correctly return updated state to the store.

#### Architecture logic
- [ ] The code is structured and organized in a logical way.
- [ ] Components are modular and reusable.

## Started code provided by Udacity

- The `_DATA.js` file represents a fake database and has methods that let me access the data.

- Using the provided starter code, I built a React/Redux front end for the application using the [Create React App](https://github.com/facebook/create-react-app) to bootstrap the project.

### Available data

There are two types of objects stored in Udacity's database:

* Users
* Questions

#### Users

- Users include:

| Attribute    | Type             | Description           |
|-----------------|------------------|-------------------         |
| id                 | String           | The user’s unique identifier |
| name          | String           | The user’s first name  and last name     |
| avatarURL  | String           | The path to the image file |
| questions | Array | A list of ids of the polling questions this user created|
| answers      | Object         |  The object's keys are the ids of each question this user answered. The value of each key is the answer the user selected. It can be either `'optionOne'` or `'optionTwo'` since each question has two options.

#### Questions

- Questions include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id                  | String | The question’s unique identifier |
| author        | String | The author’s unique identifier |
| timestamp | String | The time when the question was created|
| optionOne | Object | The first voting option|
| optionTwo | Object | The second voting option|

#### Voting Options

- Voting options are attached to questions. They include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| votes             | Array | A list that contains the id of each user who voted for that option|
| text                | String | The text of the option |

My code talk to the database via 4 methods:

* `_getUsers()`
* `_getQuestions()`
* `_saveQuestion(question)`
* `_saveQuestionAnswer(object)`

1) `_getUsers()` Method

*Description*: Get all of the existing users from the database.  
*Return Value*: Object where the key is the user’s id and the value is the user object.

2) `_getQuestions()` Method

*Description*: Get all of the existing questions from the database.  
*Return Value*: Object where the key is the question’s id and the value is the question object.

3) `_saveQuestion(question)` Method

*Description*: Save the polling question in the database.  
*Parameters*:  Object that includes the following properties: `author`, `optionOneText`, and `optionTwoText`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| author | String | The id of the user who posted the question|
| optionOneText| String | The text of the first option |
| optionTwoText | String | The text of the second option |

*Return Value*:  An object that has the following properties: `id`, `author`, `optionOne`, `optionTwo`, `timestamp`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id | String | The id of the question that was posted|
| author | String | The id of the user who posted the question|
| optionOne | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
| optionTwo | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
|timestamp|String | The time when the question was created|

4) `_saveQuestionAnswer(object)` Method

*Description*: Save the answer to a particular polling question in the database.
*Parameters*: Object that contains the following properties: `authedUser`, `qid`, and `answer`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| authedUser | String | The id of the user who answered the question|
| qid | String | The id of the question that was answered|
| answer | String | The option the user selected. The value should be either `"optionOne"` or `"optionTwo"`|

## How to install and use it?

- Download the files, cd into root directory and run:
```bash
# Install dependencies
$ npm install

# Run the app
$ npm start
```  

## References and Resources

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- Styles: [Styled Components](https://styled-components.com/)
- Icons: [React Icons](https://react-icons.netlify.com/#/icons/fa)
- [React Documentation](https://reactjs.org)
- [Redux Documentation](https://redux.js.org/)
- [MDN Documentation](https://developer.mozilla.org)
