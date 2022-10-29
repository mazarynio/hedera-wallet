import { AccountBalance, AccountBalanceQuery } from '@hashgraph/sdk';
import logger from '@hieudoanm/pino';
import getClient from '../../client';

export const queryAccountBalance = async (
  accountId: string,
  tokenId: string
): Promise<AccountBalance> => {
  const client = getClient();

  const accountBalance: AccountBalance = await new AccountBalanceQuery()
    .setAccountId(accountId)
    .execute(client);

  logger.info(
    `${accountId}: ${accountBalance.tokens?._map.get(
      tokenId
    )} units of token ID ${tokenId}`
  );

  return accountBalance;
};

export default queryAccountBalance;