<h1 align="center">A Money Transffering App build with React, TypeScript and Firebase</h1>

<div align="center">
<h3 >💪 Overly simplified</h3>
<h3 >💪 Insanely unsecured</h3>
<h3 >💪 Shamefully unoptimized</h3>
</div>

<br />

### [Check of the live demo](https://bread-bank.vercel.app/)

<div align="center">
<h4>login credentials:</h4>
<h3>test@user.com / pass1234</h3>
</div>

<br />

## Development Guide 🛠

- `git clone https://github.com/jakubjarek/bread-bank`
- `yarn install`
- `yarn start`  
- App should be running at `localhost:3000`
- Use these credentials to log in:  
  - 👉 `test@user.com / pass1234`  

<br />

## General info 🙋‍♂️

**This project is still in development**. **It is made for educational pourposes**.

👉 It is a simulation of a banking
application, which lets users make money
transfer between them.  
👉 When logged in,
users have access to creating
transactions, insight to transaction's
history and transferring money into a
savings account.  
👉 Unauthenticated users
have access to currency converter and
other bank-related functions.


**Currently, it has some of the features missing that are described below. This is a consequence of using git incorrectly and some cruel overestimation. But at least I've learnt something 🤷‍♀️.**




I wanted to build something that can represent my current knowledge of application building and at the same time try new technologies like `TypeScript` or `styled-components`.

Working on it let me train these particiular skills:

- Working with dates
- Working with API data
- Creating public and protected routes
- Using styled-components
- Using typescirpt with React
- Error handling
- Testing
- Using firebase
- Organising a semi-large project

During earlier stages of development I've had some problem with project structure. At first I've went with atomic design, but something didn't feel right about it.  
Probably the mess I've made using it incorretly. Later I've switched the current architechture, which I really admire for it's simplcity and keeping everything close.
It was inspired by a few open-source repositories on GitHub.

## What's missing and what can be improved?

- Accesability
- Old components refactor
- Better usage of Firebase
- Rethink global state

## Technologies 🎡

- Bootstrapped with Create React App
- TypeScript
- StyledComponents
- ReactRouter
- Firebase

<br />

## Project structure 🏗

| Folder         | Description                                                                                              |
| -------------- | -------------------------------------------------------------------------------------------------------- |
| `src/App`      | Anything that is considered global to the whole application. Routes configuration, styles and providers. |
| `src/Auth`     | Authentication context.                                                                                  |
| `src/Template` | Main Template of the app, where all `views` are mounted.                                                 |
| `src/shared`   | Components, utils and hooks that can be used anywhere in the application.                                |
| `src/views`    | Views that get mounted inside of `Template`.                                                             |
