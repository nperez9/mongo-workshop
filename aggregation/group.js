// Group
db.users.aggregate([
  {
    $group: {
       _id: "$position",
       cant: { $sum: 1 },
       tecnolgies: { $push: "$tecs" }
    }
  },
]);

// group with addField and sort
db.users.aggregate([
  {
    $group: {
       _id: "$position",
       cant: { $sum: 1 },
       tecnolgies: { $push: "$tecs" }
    }
  },
  {
    $addFields: {
        "tecnolgies": {
          "$reduce": {
            "input": "$tecnolgies",
            "initialValue": [],
            "in": { "$concatArrays": [ "$$value", "$$this" ] }
         },
      } 
    }
  },
  {
      $sort: {
         "cant": -1
      }
  }
]);

/** 
 * TODO: hacer que el aggregation anterior una los arrays
 * sin sobreponer los valores
 */