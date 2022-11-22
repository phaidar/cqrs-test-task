import { Client } from 'pg';

export const getClient = async () => {
  const client = new Client({
    connectionString: process.env.DATABASE,
  });
  await client.connect();

  return client;
}
