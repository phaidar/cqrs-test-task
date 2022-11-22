import { EventTypes } from '../types/eventTypes';
import { Organization } from '../types/organization';

export function updateOrganizationCommand(payload: Partial<Organization>, tenantId: string, organizationId: string) {
  return {
    type: EventTypes.updateOrganization,
    tenantId,
    organizationId,
    payload,
  };
}
