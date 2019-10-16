class AuctionSerializer < ActiveModel::Serializer
  attributes(:id, :title, :description, :created_at, :updated_at, :end_at, :reserve_price)
  belongs_to :user, key: :seller
  has_many :bids
  class BidSerializer < ActiveModel::Serializer
    attributes :id, :price, :created_at
  end 
end
