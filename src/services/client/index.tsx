import { Client } from '@hashgraph/sdk';
import {
  TREASURY_ACCOUNT_ID,
  TREASURY_PRIVATE_KEY,
} from '../../environments';

let client: Client | null = null;

export const getClient = (): Client => {
  if (!TREASURY_ACCOUNT_ID || !TREASURY_PRIVATE_KEY) {
    throw new Error(
      'Environment variables TREASURY_ACCOUNT_ID and TREASURY_PRIVATE_KEY must be present'
    );
  }

  if (client !== null) {
    return client;
  }

  client = Client.forTestnet();
  client.setOperator(TREASURY_ACCOUNT_ID, TREASURY_PRIVATE_KEY);

  return client;
};

export default getClient;