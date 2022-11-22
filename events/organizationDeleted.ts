import { getClient } from '../database';

export async function organizationDeletedEventHandler(tenantId: string, organizationId: string) {
  const dbClient = await getClient();
  const db = dbClient.query(`SELECT datname FROM pg_catalog.pg_database WHERE lower(datname) = lower('${tenantId}');`);
  if (!db.length) {
    throw new Error('Wrong tenant');
  }
  dbClient.query(`USE ${tenantId};`);

  return dbClient.query(`DELETE FROM organizations WHERE identifier = '${organizationId}';`);
}
