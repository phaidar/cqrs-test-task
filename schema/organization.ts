export default {
    default: {},
    title: 'organization',
    required: [
      'identifier',
      'active',
      'type',
      'name',
      'alias',
      'telecom',
      'address',
      'partOf',
      'contact'
    ],
    properties: {
      identifier: {
        type: 'string',
        default: '',
        title: 'The identifier Schema',
        examples: [
          'organizationID'
        ]
      },
      active: {
        type: 'boolean',
        default: false,
        title: 'The active Schema',
        examples: [
          true
        ]
      },
      type: {
        type: 'string',
        default: '',
        title: 'The type Schema',
        examples: [
          'provider',
          'payor'
        ]
      },
      name: {
        type: 'string',
        default: '',
        title: 'The name Schema',
        examples: [
          'Tower Radiology'
        ]
      },
      alias: {
        type: 'string',
        default: '',
        title: 'The alias Schema',
        examples: [
          'tower'
        ]
      },
      telecom: {
        type: 'string',
        default: '',
        title: 'The telecom Schema',
        examples: [
          '+15852245254'
        ]
      },
      address: {
        type: 'string',
        default: '',
        title: 'The address Schema',
        examples: [
          '234 main st., austin, tx 78759'
        ]
      },
      partOf: {
        type: 'string',
        default: '',
        title: 'The partOf Schema',
        examples: [
          'orgaanization/234243243'
        ]
      },
      contact: {
        type: 'object',
        default: {},
        title: 'The contact Schema',
        required: [
          'name',
          'telecom'
        ],
        properties: {
          name: {
            type: 'string',
            default: '',
            title: 'The name Schema',
            examples: [
              'some person'
            ]
          },
          telecom: {
            type: 'string',
            default: '',
            title: 'The telecom Schema',
            examples: [
              '+11231231234'
            ]
          }
        },
        examples: [{
          name: 'some person',
          telecom: '+11231231234'
        }]
      }
    },
    examples: [{
      identifier: 'organizationID',
      active: true,
      type: 'provider',
      name: 'Tower Radiology',
      alias: 'tower',
      telecom: '+15852245254',
      address: '234 main st., austin, tx 78759',
      partOf: 'orgaanization/234243243',
      contact: {
        name: 'some person',
        telecom: '+11231231234'
      }
    }]
  }