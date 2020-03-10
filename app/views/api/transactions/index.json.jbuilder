@transactions.each do |transaction|
  json.partial! "api/transactions/transaction", transaction: transaction
end