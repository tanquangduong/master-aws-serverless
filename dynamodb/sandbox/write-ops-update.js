const AWS = require("aws-sdk");
AWS.config.update({region: "us-east-1"});

const docClient = new AWS.DynamoDB.DocumentClient();

docClient.update({
    TableName: 'td_notes_sdk',
    Key: {
        user_id: 'tdg',
        timestamp: 1
    },
    UpdateExpression: 'set #t = :t',
    ExpressionAttributeNames: {
        '#t': 'title'
    },
    ExpressionAttributeValues: {
        ':t': "Updated Hello Serverless"
    }
}, (err, data)=>{
    if(err) {
        console.log(err)
    } else {
        console.log(JSON.stringify(data, null, 2))
    }
 })