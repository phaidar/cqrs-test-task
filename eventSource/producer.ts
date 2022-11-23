import { APIGatewayProxyHandler } from 'aws-lambda';
import { Kinesis } from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

const kinesis = new Kinesis({
  apiVersion: '2013-12-02',
});

const producer: APIGatewayProxyHandler = async (command) => {
  let statusCode: number = 200;
  let message: string;

  const streamName: string = process.env.STREAM || '';

  try {
    await kinesis.putRecord({
      StreamName: streamName,
      PartitionKey: uuidv4(),
      Data: JSON.stringify(command),
    }).promise();

    message = `Message placed in the ${streamName}`;

  } catch (error) {
    message = error;
    statusCode = 500;
  }

  return {
    statusCode,
    body: command.payload.identifier,
  };
};

export default producer;
