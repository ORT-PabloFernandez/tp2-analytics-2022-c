/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('sample_analytics');

// Insert a few documents into the sales collection.
const customer = db.getCollection('customers').findOne({email: "david45@yahoo.com"})
const customer2 = db.getCollection('customers').findOne({_id: new ObjectId("5ca4bbcea2dd94ee58162b19")})


console.log(`customer: ${customer}`);
console.log(`customer2: ${customer2}`);

