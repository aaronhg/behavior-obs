import loki from 'lokijs'

var entries = db.getCollection("entries");
var messages = db.getCollection("messages");

// Add our main example collection if this is first run.
// This collection will save into a partition named quickstart3.db.0 (collection 0)  
if (entries === null) {
// first time run so add and configure collection with some arbitrary options
entries = db.addCollection("entries");
}

if (messages === null) {
messages = db.addCollection("messages");
messages.insert({ txt: "i will only insert into this collection during databaseInitialize" });
}