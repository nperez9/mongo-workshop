// add validation schema for name and last_name
db.runCommand( {
  collMod: "users",
  validator: { $jsonSchema: {
     bsonType: "object",
     required: [ "last_name", "name" ],
     properties: {
        last_name: {
           bsonType: "string",
           description: "must be a string and is required"
        },
        name: {
           bsonType: "string",
           description: "must be a string and is required"
        }
     }
  } },
  validationLevel: "moderate"
});