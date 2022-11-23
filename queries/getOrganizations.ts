import { getClient } from '../database';

export const getOrganizations = async ({ pathParameters }) => {
  const { tenantId } = pathParameters;
  const dbClient = await getClient();
  const db = await dbClient.query(`SELECT datname FROM pg_catalog.pg_database WHERE lower(datname) = lower('${tenantId}');`);
  if (!db.length) {
    throw new Error('Wrong tenant');
  }
  dbClient.query(`USE ${tenantId};`);

  return dbClient.query('SELECT * FROM organizations');
};
