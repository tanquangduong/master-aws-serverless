const AWS = require('aws-sdk');
AWS.config.update({region: "us-east-1"});

const dynamodb = new AWS.DynamoDB();

// ********* List the Table ********** //
 dynamodb.listTables({}, (err, data)=>{
    if(err) {
        console.log(err)
    } else {
        console.log(JSON.stringify(data, null, 2))
    }
 });