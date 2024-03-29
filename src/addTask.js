const { v4: uuidv4 } = require('uuid');

const AWS = require('aws-sdk');

const addTask = async (event) => {

    const dynamoDb = new AWS.DynamoDB.DocumentClient();

    const { title, description } = JSON.parse(event.body);

    const createdAt = new Date();
    const id = uuidv4();

    const newTask = {
        id,
        title,
        description,
        createdAt,
        done: false
    };

    await dynamoDb.put({
        // TableName: process.env.TASKS_TABLE,
        TableName: 'tasksTable',
        Item:newTask
    }).promise();

    return {
        status: 200,
        body:{newTask}
    }
}

module.exports = {
    addTask
};