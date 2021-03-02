// in array
db.users.distinct("aliases");

//object adn filter
db.users.distinct("role", { age: { $gte: 30 } });
