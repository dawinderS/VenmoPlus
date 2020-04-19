# Venmo+

[Visit Venmo+ Now](https://venmo-clone.herokuapp.com/)

Venmo+ is a digital wallet service in which you can make and share payments with your friends, as well as view your and your friends' transaction histories.

More features will be added over time

## Technologies Used
Venmo+ was built using:
- Ruby on Rails
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

### User authorization
 - securely salt and hash users' passwords using BCrypt
 - users are able to sign up, login, and logout
 
### Making a payment
- User is able to send payments to other users

### Viewing transactional histories
Using polymorphic tables for transactions, the users' and their friends' transactions are displayed in their feed. User can also see transactions with specfic friends by clicking on their name in their friends list. The transaction list is in order of processed date and time.

## Future Plans
Some features I am currently working on and would like to add in the future are
- searching up a user to make a quick payment
- creating a chart comparing users' payments sent/received
- creating notifications to add friends
