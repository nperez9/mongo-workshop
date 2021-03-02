// simple index in array
// sparce avoid to index undefined - null fields
db.getCollection("users").createIndex({ "tecs": 1}, { sparse: true });

// unique index
db.getCollection("users").createIndex({ "doc_number": 1 }, {
  "unique": true
});
// compose index  
db.getCollection("users").createIndex({ "doc_type": 1, "doc_number": 1 });

// unique index
db.getCollection("users").createIndex({ "doc_number": 1 }, {
  "unique": true
});