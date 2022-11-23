import { getClient } from '../database';
import { Organization } from '../types/organization';

export async function organizationUpdatedEventHandler(payload: Organization, tenantId: string, organizationId: string) {
  const dbClient = await getClient();
  const db = await dbClient.query(`SELECT datname FROM pg_catalog.pg_database WHERE lower(datname) = lower('${tenantId}');`);
  if (!db.length) {
    throw new Error('Wrong tenant');
  }
  await dbClient.query(`USE ${tenantId};`);

  return dbClient.query(`UPDATE organizations SET
    ${Object.entries(payload).map(([key, value]) => `${key} = ${value}`).join(',')}
    WHERE identifier = '${organizationId}';
  `);
}
