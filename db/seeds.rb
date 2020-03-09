# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Friendship.destroy_all

user = User.create(username: 'user', email: 'user@g.com', password: 'password')
user1 = User.create(username: 'Dawinder', email: 'dawinder@gmail.com', password: 'dawinder')
user2 = User.create(username: 'Steve', email: 'steve@gmail.com', password: 'password')
user3 = User.create(username: 'Kawhi', email: 'theklaw@gmail.com', password: 'password')
user4 = User.create(username: 'Paul', email: 'paul@gmail.com', password: 'password')
