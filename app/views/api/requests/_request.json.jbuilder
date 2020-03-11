json.set! request.id do

  json.id request.id
  json.description request.description

  #if transaction.user.id === current_user.id || transaction.recipient.id === current_user.id
    json.amount request.amount
  #end

  json.user do
    json.id request.user.id
    json.username request.user.username
  end

  json.payer do
    json.id request.payer.id
    json.username request.payer.username
  end

  json.created_at request.created_at

end