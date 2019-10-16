class AuctionSerializer < ActiveModel::Serializer
  attributes(:id, :title, :description, :created_at, :updated_at, :reserve_price)
  belongs_to :user, key: :seller
  has_many :bids
  class BidSerializer < ActiveModel::Serializer
    attributes :id, :price
  end 
end
