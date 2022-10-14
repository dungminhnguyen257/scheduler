# Interview Scheduler

Interview Scheduler is a single-page application (SPA) that allows users to book technical interviews between students and mentors. Appointments can be between the hours of 12 PM and 5 PM, Monday to Friday. Each appointment has one student and one interviewer. When creating a new appointment, the user can enter any student name while the interviewer is chosen from a predefined list. The user can save the appointment and view the entire schedule of appointments on any day of the week. Appointments can also be edited or deleted. The front end of this project is built with React and makes requests to an API to fetch and store appointment data from a database.

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

Scheduler server will start at port 8000: http://http://localhost:8000/

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

Storybook will start at port 9009: http://localhost:9009/

## Technologies Information/Stack

- React
- PostgresSQL
- Storybook
- Jest
- Cypress

## Dependencies

- Axios 0.27.2
- Classnames 2.2.6
- Normalize.css 8.0.1
- React 16.9.0
- React-dom 16.9.0
- React-scripts 3.4.4

## Screenshot

#### This is the home page of the Scheduler Web App

![Home page](https://github.com/dungminhnguyen257/scheduler/blob/master/docs/Home%20page.png?raw=true)

#### The pop up window displays a warning message when the user want to delete an appointment

![Warning message](https://github.com/dungminhnguyen257/scheduler/blob/master/docs/Warning%20message.png?raw=true)

#### Empty input from the user triggers an error message

![Error message](https://github.com/dungminhnguyen257/scheduler/blob/master/docs/Error%20message.png?raw=true)
