<p>Clarusway<img align="right"
  src="https://secure.meetupstatic.com/photos/event/3/1/b/9/600_488352729.jpeg"  width="15px"></p>

# Project-005 : Github Job Finder (RC-05)

## Description

Project aims to create a Github Job Finder App.

## Problem Statement

- We are adding a new project to our portfolios. So you and your colleagues have started to work on the project.

## Project Skeleton

```
005 - Github Job Finder (folder)
|
|----readme.md         # Given to the students (Definition of the project)
SOLUTION
├── public
│     └── index.html
├── src
│    ├── components
│    │       ├── footer
│    │       │     ├── Footer.css
│    │       │     └── Footer.js
│    │       ├── form
│    │       │     ├── Form.css
│    │       │     └── Form.js
│    │       ├── header
│    │       │     ├── Header.css
│    │       │     └── Header.js
│    │       └── jobcard
│    │             ├── JobCard.css
│    │             └── JobCard.js
│    ├── assets.js
│    │       └── [images]
│    ├── App.js
│    ├── App.css
│    ├── index.js
│    └── index.css
├── package.json
└── yarn.lock
```

## Expected Outcome

![Project 005 Snapshot](github-job-finder.gif)

## Objective

Build a Github Job Finder using ReactJS.

### At the end of the project, following topics are to be covered;

- HTML

- CSS

- JS

- ReactJS

### At the end of the project, students will be able to;

- improve coding skills within HTML & CSS & JS & ReactJS.

- use git commands (push, pull, commit, add etc.) and Github as Version Control System.

## Steps to Solution

- Step 1: Create React App using `npx create-react-app github-job-finder`

- Step 2 : Add `"proxy": "https://jobs.github.com"` script to your `package.json` for CORS policy(Example json in this folder.).

- Step 3: Build Github Job Finder app getting data with `axios` to this url `/positions.json?description=${description}&location=${location}`.

- Step 4: You can use css frameworks like Bootstrap, Semantic UI.

- Step 5: Push your application into your own public repo on Github

- Step 6: Add project gif to your project and README.md file.

## Notes

- You can add additional functionalities to your app.

**<p align="center">&#9786; Happy Coding &#9997;</p>**
