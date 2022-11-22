import { EventTypes } from '../types/eventTypes';
import { Organization } from '../types/organization';

export function createOrganizationCommand(payload: Organization, tenantId: string) {
  return {
    type: EventTypes.createOrganization,
    tenantId,
    payload,
  };
}
