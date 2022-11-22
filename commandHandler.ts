import {
  createOrganizationCommand,
  deleteOrganizationCommand,
  updateOrganizationCommand,
} from './commands';
import { producer } from './eventSource';

export const createOrganization = async ({ pathParameters, body }) => {
  const command = createOrganizationCommand(body, pathParameters.tenantId);

  return producer(command);
};

export const updateOrganization = async ({ pathParameters, body }) => {
  const command = updateOrganizationCommand(
    body,
    pathParameters.tenantId,
    pathParameters.orgaanizationId,
  );

  return producer(command);
};

export const deleteOrganization = async ({ pathParameters, body }) => {
  const command = deleteOrganizationCommand(body, pathParameters.tenantId);

  return producer(command);
};
