<h1 align="center">A Money Transffering App build with React, TypeScript and Firebase</h1>

<div align="center">
<h3 >💪 Overly simplified</h3>
<h3 >💪 Insanely unsecured</h3>
<h3 >💪 Shamefully unoptimized</h3>
</div>

<br />

## [Check out the live demo](https://bread-bank.vercel.app/)

### login credentials: test@user.com / pass1234

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

**This project is still in development**. **It is made for educational purposes**.

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

<br />

## What's missing and what can be improved?

- Tests
- Better usage of Firebase
- Accesability improvements
- Global state improvements
- Some of the older components need a refactor

<br />

## Technology stack 🤠

- Firebase
- TypeScript
- ReactRouter
- StyledComponents
- Bootstrapped with Create React App

<br />

## Project structure 🏗

| Folder         | Description                                                                                              |
| -------------- | -------------------------------------------------------------------------------------------------------- |
| `src/App`      | Anything that is considered global to the whole application. Routes configuration, styles and providers. |
| `src/Auth`     | Authentication context.                                                                                  |
| `src/Template` | Main Template of the app, where all `views` are mounted.                                                 |
| `src/shared`   | Components, utils and hooks that can be used anywhere in the application.                                |
| `src/views`    | Views that get mounted inside of `Template`.                                                             |
