# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Bid.destroy_all
Auction.destroy_all
User.destroy_all

NUM_BID = 10
NUM_USERS = 5
NUM_AUCTION = 20
PASSWORD = "123"

super_user = User.create(
  email: "anrenyil@gmail.com",
  password: "123"
)

NUM_USERS.times do
  User.create(
    email: "#{Faker::Name.first_name}@example.com",
    password: PASSWORD
  )
end

users = User.all

NUM_AUCTION.times do
  created_at = Faker::Date.backward(days: 365 * 5)
  p = Auction.create(
    title: Faker::Cannabis.strain,
    description: Faker::Cannabis.health_benefit,
    reserve_price: rand(1000),
    end_at:created_at,
    created_at: created_at,
    updated_at: created_at,
    user: users.sample
  )
  if p.valid?
    rand(0..5).times.map do
      r = Bid.create(
        price: rand(1000),
        user: users.sample,
        auction: p
      )
    end
  end
end

auctions = Auction.all
bids = Bid.all

puts Cowsay.say("Generated #{auctions.count} auctions", :frogs)
puts Cowsay.say("Generated #{bids.count} bids", :stegosaurus)
puts Cowsay.say("Generated #{users.count} users", :tux)
puts "Login with #{super_user.email} and password: 123"
