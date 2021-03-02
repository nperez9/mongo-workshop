// update with pull
db.users.update(
  { "$where": "this.salary_base != 'CRYPTO'" },
  { 
    $pull: { "personal_info.social_medias": { "name": "instagram"} },
    $set: { "salary_base": "DOLLAR"}
  },
  { multi: true }
);


  