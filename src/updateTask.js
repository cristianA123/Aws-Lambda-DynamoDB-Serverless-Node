const AWS = require('aws-sdk');


const updateTask = async (event) => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const { id } = event.pathParameters;

    const { done, title, description } = JSON.parse(event.body);

    const params = {
        TableName: 'tasksTable',
        Key: { id },
        UpdateExpression: 'set done = :done, title = :title, description = :description',
        ExpressionAttributeValues: {
            ':done': done,
            ':title': title,
            ':description': description
        },
        ReturnValues: 'ALL_NEW'
    };

    await dynamodb.update(params).promise();

    return {
        status: 200,
        body: { msg: 'Task updated successfully'}
    };
}

module.exports = { updateTask };