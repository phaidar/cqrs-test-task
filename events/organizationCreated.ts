import Ajv from 'ajv'
import { getClient } from '../database';
import schema from '../schema/organization';
import { Organization } from '../types/organization';

const ajv = new Ajv();

export async function organizationCreatedEventHandler(payload: Organization, tenantId: string) {
  const validate = ajv.compile(schema);
  const valid = validate(payload);
  if (!valid) {
    console.error(validate.errors);
    throw new Error(validate.errors?.toString());
  }

  const dbClient = await getClient();
  const db = dbClient.query(`SELECT datname FROM pg_catalog.pg_database WHERE lower(datname) = lower('${tenantId}');`);
  if (!db.length) {
    dbClient.query(`CREATE DATABASE ${tenantId};`);
    dbClient.query(`USE ${tenantId};`);
    dbClient.query(`CREATE TABLE IF NOT EXISTS organizations
      identifier VARCHAR(255),
      active VARCHAR(255),
      type VARCHAR(255),
      name VARCHAR(255),
      alias VARCHAR(255),
      telecom VARCHAR(255),
      address VARCHAR(255),
      part_of VARCHAR(255);`);
  }

  return dbClient.query(`INSERT INTO organizations VALUES (
    '${payload.identifier}',
    '${payload.active}',
    '${payload.type}',
    '${payload.name}',
    '${payload.alias}',
    '${payload.telecom}',
    '${payload.address}',
    '${payload.partOf}',
  )`)
}
