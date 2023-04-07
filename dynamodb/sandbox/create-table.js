 const AWS = require('aws-sdk');
 AWS.config.update({region: "us-east-1"});

 const dynamodb = new AWS.DynamoDB();

// *********** Create Table from AWS SDK ************* //
dynamodb.createTable({
    TableName: "td_notes_test", 
    AttributeDefinitions: [
        {
            AttributeName: "user_id",
            AttributeType: "S"
        },
        {
            AttributeName: "timestamp",
            AttributeType: "N"
        }
    ],
    KeySchema: [
        {
            AttributeName: "user_id",
            KeyType: "HASH"
        },
        {
            AttributeName: "timestamp",
            KeyType: "RANGE"
        }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1
    }
}, (err, data)=>{
        if(err) {
            console.log(err)
        } else {
            console.log(JSON.stringify(data, null, 2))
        }
})
