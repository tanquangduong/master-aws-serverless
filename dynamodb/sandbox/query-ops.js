const AWS = require("aws-sdk")
AWS.config.update({region: "us-east-1"})

const docClient = new AWS.DynamoDB.DocumentClient()

// docClient.get({
//     TableName: "td_notes_test",
//     Key: {
//         user_id: 'A',
//         timestamp: 1
//     }
// },(err, data)=>{
//     if(err) {
//         console.log(err)
//     } else {
//         console.log(JSON.stringify(data, null, 2))
//     }
//  })

 docClient.query({
    TableName: "td_notes_test",
    KeyConditionExpression: "user_id = :uid",
    ExpressionAttributeValues: {
        ":uid": "A"
    }
},(err, data)=>{
    if(err) {
        console.log(err)
    } else {
        console.log(JSON.stringify(data, null, 2))
    }
 })