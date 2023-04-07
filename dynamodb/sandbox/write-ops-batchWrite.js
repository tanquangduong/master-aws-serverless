const AWS = require("aws-sdk");
AWS.config.update({region: "us-east-1"});

const docClient = new AWS.DynamoDB.DocumentClient();

docClient.batchWrite({
    RequestItems: {
        "td_notes_test": [
            {
                PutRequest: {
                    Item: {
                        user_id: "A", 
                        timestamp: 1,
                        cat: "general",
                        title: "Title A1",
                        content: "Content A1", 
                        note_id: 'n1',
                        username: "User A"
                    }
                }
            },
            {
                PutRequest: {
                    Item: {
                        user_id: "A", 
                        timestamp: 4,
                        cat: "test",
                        title: "Title A4",
                        content: "Content A4", 
                        note_id: 'n4',
                        username: "User A"
                    }
                }
            },
            {
                PutRequest: {
                    Item: {
                        user_id: "A", 
                        timestamp: 7,
                        cat: "aws",
                        title: "Title A7",
                        content: "Content A7", 
                        note_id: 'n7',
                        username: "User A"
                    }
                }
            },
            {
                PutRequest: {
                    Item: {
                        user_id: "B", 
                        timestamp: 2,
                        cat: "general",
                        title: "Title B2",
                        content: "Content B2", 
                        note_id: 'n2',
                        username: "User B"
                    }
                }
            },
            {
                PutRequest: {
                    Item: {
                        user_id: "B", 
                        timestamp: 5,
                        cat: "test",
                        title: "Title B5",
                        content: "Content B5", 
                        note_id: 'n5',
                        username: "User B"
                    }
                }
            },
            {
                PutRequest: {
                    Item: {
                        user_id: "B", 
                        timestamp: 8,
                        cat: "aws",
                        title: "Title B8",
                        content: "Content B8", 
                        note_id: 'n8',
                        username: "User B"
                    }
                }
            },
        ]
    }
    
}, (err, data)=>{
    if(err) {
        console.log(err)
    } else {
        console.log(JSON.stringify(data, null, 2))
    }
 })