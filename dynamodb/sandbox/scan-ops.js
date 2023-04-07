const AWS = require("aws-sdk")
AWS.config.update({region: "us-east-1"})

const docClient = new AWS.DynamoDB.DocumentClient()

 docClient.scan({
    TableName: "td_notes_test",
    FilterExpression: "cat = :cat",
    ExpressionAttributeValues: {
        ":cat": "general"
    }
},(err, data)=>{
    if(err) {
        console.log(err)
    } else {
        console.log(JSON.stringify(data, null, 2))
    }
 })