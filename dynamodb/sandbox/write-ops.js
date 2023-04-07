const AWS = require("aws-sdk");
AWS.config.update({region: "us-east-1"});

const docClient = new AWS.DynamoDB.DocumentClient();

docClient.put({
    TableName: 'td_notes_sdk',
    Item: {
        user_id: "tdg",
        timestamp: 2,
        title: "Hello DynamoDB",
        content: "DynamoDB course"
    }
}, (err, data)=>{
    if(err) {
        console.log(err)
    } else {
        console.log(JSON.stringify(data, null, 2))
    }
 })