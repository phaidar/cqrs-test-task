export default {
    title: 'event',
    description: 'A event schema for Gravity Events',
    type: 'object',
    properties: {
      tenant: {
        description: 'A unique UUID representing a tenant',
        type: 'string'
      },
      schemaVersion: {
        description: 'eventData schema version',
        type: 'number'
      },
      eventVersion: {
        description: 'version of the event header',
        type: 'number'
      },
      eventTime: {
        description: 'epoch time of the event',
        type: 'integer'
      },
      eventSource: {
        description: 'The source of the event',
        type: 'string'
      },
      eventType: {
        description: 'The type of the event',
        type: 'string'
      },
      eventName: {
        description: 'The name of the event',
        type: 'string'
      },
      eventId: {
        description: 'The unique id of the event represented in the event data',
        type: 'number'
      },
      eventData: {
        description: 'The event data payload',
        type: 'object'
      }
    },
    required: [
      'tenant',
      'schemaVersion',
      'eventVersion',
      'eventTime',
      'eventSource',
      'eventType',
      'eventName',
      'eventId',
      'eventData'
    ]
  }