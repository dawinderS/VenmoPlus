class Api::FriendshipsController < ApplicationController

  def create
    friend = User.find(params[:user_id])
    @user = current_user
    if Friendship.request_friend(@user, friend)
      render 'api/users/show'
    else
      render json: ['Sorry.. something went wrong']
  end

  def update
    friend = User.find(params[:id])
    @user = current_user
    Friendship.accept_both(@user, friend)
    render 'api/users/show'
  end

  def destroy
   friend = User.find(params[:id])
   @user = current_user
   delete_both = @user.friends.delete(friend) && friend.friends.delete(@user)
   if delete_both
    render 'api/users/show'
   else
    render json: @users.errors.full_messages, status: 422
  end
  
end
