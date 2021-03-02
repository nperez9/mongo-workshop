db.users.aggregate([
  {
    $match: { 
      name: "David",
      last_name: "Cooper",
    }
  },
  {
    $unwind: {
        path: "$tecs",
        preserveNullAndEmptyArrays: false
    },
  },
  {
      $group: {
        _id: "$tecs",
        count: {$sum: 1},
        users: { $push: "$name" }
    }
  },
  {
      $sort: {
          count: -1
      }
  }]);