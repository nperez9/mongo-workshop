// basic unwind
db.users.aggregate([
  {
    $unwind: {
        path: "$tecs",
        preserveNullAndEmptyArrays: false,
    },
  },
]);

// unwind with group
db.users.aggregate([
  {
    $unwind: {
        path: "$tecs",
        preserveNullAndEmptyArrays: false
    },
  },
  {
      $group: {
        _id: "$tecs",
        count: {$sum: 1}
    }
  },
  {
      $sort: {
          count: -1
      }
  }
]);


// 