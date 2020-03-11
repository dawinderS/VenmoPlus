# display as a set
json.set! transaction.id do

  json.id transaction.id
  json.description transaction.description

  #if transaction.user.id === current_user.id || transaction.recipient.id === current_user.id
    json.amount transaction.amount
  #end

  json.user do
    json.id transaction.user.id
    json.username transaction.user.username
  end

  json.recipient do
    json.id transaction.recipient.id
    json.username transaction.recipient.username
  end

  json.created_at transaction.created_at

end