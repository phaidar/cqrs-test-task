import {
  KinesisStreamHandler,
  KinesisStreamRecordPayload,
} from 'aws-lambda';
import { organizationCreatedEventHandler } from '../events/organizationCreated';
import { organizationDeletedEventHandler } from '../events/organizationDeleted';
import { organizationUpdatedEventHandler } from '../events/organizationUpdated';
import { EventTypes } from '../types/eventTypes';

const consumer: KinesisStreamHandler = async (event) => {
  try {
    for (const record of event.Records) {
      const payload: KinesisStreamRecordPayload = record.kinesis;
      const event = JSON.parse(Buffer.from(payload.data, 'base64').toString());

      console.log(
        `Kinesis Message:
          partition key: ${payload.partitionKey}
          sequence number: ${payload.sequenceNumber}
          kinesis schema version: ${payload.kinesisSchemaVersion}
          data: ${event.toString()}
        `);

      switch(event.type) {
        case EventTypes.createOrganization:
          return organizationCreatedEventHandler(event.payload, event.tenantId);
        case EventTypes.updateOrganization:
          return organizationUpdatedEventHandler(event.payload, event.tenantId, event.organizationId);
        case EventTypes.deleteOrganization:
          return organizationDeletedEventHandler(event.tenantId, event.organizationId);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export default consumer;
