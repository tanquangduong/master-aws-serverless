const AWS = require('aws-sdk');
AWS.config.update(region = "us-east-1");

const docClient = new AWS.DynamoDB.DocumentClient();

docClient.get({
    TableName: "td_notes"
}, (err, data)=>{
    if(err) {
        console.log(err)
    } else {
        console.log(JSON.stringify(data, null, 2))
    }
 })