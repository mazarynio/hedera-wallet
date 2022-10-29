import {
    AccountCreateTransaction,
    AccountId,
    Hbar,
    PrivateKey,
    Transaction,
    TransactionReceipt,
    TransactionResponse,
  } from '@hashgraph/sdk';
  import getClient from '../../client';
  import { Account } from '../types';
  
  export const createAccount = async (): Promise<Account> => {
    const client = getClient();
  
    const privateKey = PrivateKey.generateED25519();
    const { publicKey } = privateKey;
  
    const transaction: Transaction = new AccountCreateTransaction()
      .setKey(publicKey)
      .setInitialBalance(Hbar.fromTinybars(0));
  
    const transactionResponse: TransactionResponse = await transaction.execute(
      client
    );
  
    const transactionReceipt: TransactionReceipt =
      await transactionResponse.getReceipt(client);
  
    const accountId: AccountId | string =
      transactionReceipt.accountId?.toString() || '';
  
    return {
      accountId: accountId.toString(),
      privateKey: privateKey.toStringRaw(),
      publicKey: publicKey.toStringRaw(),
    };
  };
  
  export default createAccount;