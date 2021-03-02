// Projection and how to select
db.users.find({}, { "_id": 0, "name": 1, "position": 1} )
   .sort({name: 1})
   .limit(100);

// how to see array whit values 
db.users.find({ 
  "$nor": [
      {"tecs": { "$size": 0 }},
      {"tecs": { "$exists": false }}
  ]
}, {} )
 .sort({_id:-1})


// una forma de buscar arrays que contengan valores 
db.reviews.find({ 
  "$nor": [
      {"reports": { "$size": 0 }},
      {"reports": { "$exists": false }}
  ]
}, {} )
 .sort({_id:-1})
