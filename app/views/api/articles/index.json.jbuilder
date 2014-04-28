json.array! @articles do |article|
  json.title article.title
  json.content article.content
  json.username article.user.name

end
