const AWS = require('aws-sdk');

const getTask = async (event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const { id } = event.pathParameters;
    
    let task;
    
    try {
        const params = {
        TableName: 'tasksTable',
        Key: { id }
        };
    
        const result = await dynamodb.get(params).promise();
        task = result.Item;

            
    return {
        status: 200,
        body: {task}
    };

    } catch (error) {
        console.error(error);
    }

}

module.exports = { getTask };