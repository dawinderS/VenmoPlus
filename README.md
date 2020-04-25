# Venmo+

[Visit Venmo+ Now](https://venmoplus.herokuapp.com/)

Venmo+ is a single-page web application, inspired by Venmo, that serves as a digital wallet where you can make and share payments with your friends, as well as view your and your friends' transaction histories. It is created with Ruby on Rails, React.js/Redux, and PostgreSQL with a focus on a more user-friendly functionality and modern touch in regards to design.

More features will be added over time.

## Table of Contents
- [Technologies](#technologies-used)
- [Features](#features)
  - [User auth](#user-auth)
  - [Making payments](#making-payments)
  - [Adding friends](#adding-friends)
  - [Viewing transaction histories](#viewing-transactional-histories)
  - [Liking payments](#liking-payments)
  - [Dark Mode](#dark-mode)
- [Status/Future Plans](#status-and-future-plans)

## Demo
[Visit Venmo+ Now](https://venmoplus.herokuapp.com/)

## Technologies Used
Venmo+ is built using:
- Rails 5
- React.js/Redux
- PostgreSQL
- ActiveRecord

## Features
- Users can securely sign up, login, and logout
- Users can make a payment to another user (with payment description)
- Users can view their transaction history as well as their friends
- Currently working on:
  - Users can add friends and be added by other users
  - Users can search up a user to make a payment/see transactions with them

### User auth
 - securely salt and hash users' passwords using BCrypt
 - users are able to sign up, login, and logout
 
### Making payments
- User is able to send payments to other users
Incorporated polymorphic model associations allowing the user to create and send multiple payments,
requests, and friendships, reducing the number of database tables by almost 50%

### Adding friends
Implemented an instant search feature utilizing React’s re-rendering on state change and a setTimeout function to
send AJAX requests every quarter second, fetching real-time search results as the user types

### Viewing transactional histories
Using polymorphic tables for transactions, the users' and their friends' transactions are displayed in their feed. User can also see transactions with specfic friends by clicking on their name in their friends list. The transaction list is in order of processed date and time.

Employed JBuilder to declare users’ JSON objects, fetching appropriate data through the Redux cycle in order to
efficiently render transaction histories of the current user and their friends

### Liking payments
Applied ActiveRecord eager-loading on associations to eliminate N+1 queries and optimize backend API requests

### Dark Mode


## Status and Future Plans
Some features I am currently working on and would like to add in the future are
- searching up a user to make a quick payment
- creating a chart comparing users' payments sent/received
- creating notifications to add friends
