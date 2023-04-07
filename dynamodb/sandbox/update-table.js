const AWS = require('aws-sdk');
AWS.config.update({region: "us-east-1"});

const dynamodb = new AWS.DynamoDB();

// ********* Update the Table ********** //
 dynamodb.updateTable({
    TableName: "td_notes_sdk",
    ProvisionedThroughput: {
        ReadCapacityUnits: 2,
        WriteCapacityUnits: 1
    }
 }, (err, data)=>{
    if(err) {
        console.log(err)
    } else {
        console.log(JSON.stringify(data, null, 2))
    }
 });