import { EventTypes } from '../types/eventTypes';

export function deleteOrganizationCommand(tenantId: string, organizationId: string) {
  return {
    type: EventTypes.deleteOrganization,
    tenantId,
    organizationId,
  };
}
