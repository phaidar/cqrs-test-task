import { getClient } from '../database';

export const getOrganization = async ({ pathParameters }) => {
  const { tenantId, organizationId } = pathParameters;
  const dbClient = await getClient();
  const db = dbClient.query(`SELECT datname FROM pg_catalog.pg_database WHERE lower(datname) = lower('${tenantId}');`);
  if (!db.length) {
    throw new Error('Wrong tenant');
  }
  dbClient.query(`USE ${tenantId};`);

  return dbClient.query(`SELECT * FROM organizations WHERE identifier = ${organizationId}`);
};
