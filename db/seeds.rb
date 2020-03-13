# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

user = User.create(username: 'Dawinder', email: 'user@g.com', password: 'password', venmo_credit: 750.00)
user1 = User.create(username: 'Paul', email: 'paul@g.com', password: 'password', venmo_credit: 250.00)
user2 = User.create(username: 'Kawhi', email: 'kawhi@g.com', password: 'password', venmo_credit: 250.00)
user3 = User.create(username: 'Marie', email: 'marie@g.com', password: 'password', venmo_credit: 250.00)
user4 = User.create(username: 'Karl', email: 'karl@g.com', password: 'password', venmo_credit: 250.00)
user5 = User.create(username: 'a/A', email: 'aa@g.com', password: 'password', venmo_credit: 250.00)

Transaction.destroy_all

transaction = Transaction.create(user_id: user1.id, recipient_id: user2.id, amount: 20.50, description: 'for that pizza', complete: false)
transaction1 = Transaction.create(user_id: user2.id, recipient_id: user1.id, amount: 10.00, description: 'dessert!!', complete: false)
transaction2 = Transaction.create(user_id: user1.id, recipient_id: user2.id, amount: 100.00, description: 'courtside tickets!', complete: false)
transaction3 = Transaction.create(user_id: user.id, recipient_id: user2.id, amount: 100.00, description: 'courtside tickets!', complete: false)
transaction4 = Transaction.create(user_id: user.id, recipient_id: user3.id, amount: 100.00, description: 'jersey', complete: false)
transaction5 = Transaction.create(user_id: user.id, recipient_id: user4.id, amount: 100.00, description: 'food and uber', complete: false)


Request.destroy_all

request = Request.create(user_id: user5.id, payer_id: user.id, amount: 28000.00, description: 'iykyk', complete: false)
request1 = Request.create(user_id: user2.id, payer_id: user3.id, amount: 15.00, description: 'movie night', complete: false)
request2 = Request.create(user_id: user1.id, payer_id: user5.id, amount: 5.00, description: 'chips and soda', complete: false)

Friendship.destroy_all

friendship = Friendship.create(user_id: user1.id, friend_id: user2.id)
friendship1 = Friendship.create(user_id: user2.id, friend_id: user3.id)

