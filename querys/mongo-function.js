db.users.find({ "doc_number": { "$exists": true } }).forEach( function (user) {
  user.doc_number = user.doc_number + "";
  console.log(`updated user: ${user.name} ${user.last_name} -- _id: ${user._id}`);
  db.user.save(user);
});