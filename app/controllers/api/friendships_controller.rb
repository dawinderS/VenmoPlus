class Api::FriendshipsController < ApplicationController

  def create
    @already_friends = Friendship.find_by(user_id: params[:id], friend_id: current_user.id)
    
    if @already_friends
        Friendship.find_by(user_id: params[:id], friend_id: current_user.id).destroy
        Friendship.create(user_id: params[:id], friend_id: current_user.id, accepted: true)
        @friendship = current_user.friendships.create(friend_id: params[:id], accepted: true)
    else
        @friendship = current_user.friendships.create(friend_id: params[:id])
    end

    if @friendship.save
        render :show
    else
        render json: ["Unable to establish friendship"], status: 422
    end
  end

  def destroy
    @were_friends = Friendship.find_by(user_id: params[:id], friend_id: current_user.id)
    
    if @were_friends
        Friendship.find_by(user_id: params[:id], friend_id: current_user.id).destroy
        Friendship.create(user_id: params[:id], friend_id: current_user.id, accepted: false)
    end

    @friendship = current_user.friendships.find_by(friend_id: params[:id])
    @friendship.destroy
    render :show
  end
  
end
