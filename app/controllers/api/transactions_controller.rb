class Api::TransactionsController < ApplicationController

  def create
    @transaction = Transaction.new(transaction_params)
    
    recipient = User.find_by(username: params[:transaction][:recipient])
    @transaction.recipient_id = recipient.id
    
    if @transaction.save
      amt = @transaction.amount
      recipient.update(venmo_credit: recipient.venmo_credit + amt)

      if current_user.venmo_credit < amt
        current_user.update(venmo_credit: 0)
      else
        current_user.update(venmo_credit: current_user.venmo_credit - amt)
      end
      
      render '/api/transactions/show'
    else
      render json: @transaction.errors.full_messages, status: 401
    end
  end

  def index
    @transactions = Transaction.all
    render '/api/transactions/index'
  end

  def show
    @transaction = Transaction.find(params[:id])
    render '/api/transactions/show'
  end

  def destroy
    
  end

  private
  
  def transaction_params
    params.require(:transaction).permit(:user_id, :recipient_id, :amount, :description)
  end

end
