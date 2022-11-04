import type { PrivateKey, AccountId, PublicKey } from "@hashgraph/sdk";
import { BigNumber } from "bignumber.js";
import { configureStore } from '@reduxjs/toolkit'

import { Wallet } from "./domain/wallet/abstract";
import { AccountBalance, MirrorAccountInfo, NetworkNodeStakingInfo, SimpleHederaClient } from "./services/hedera";
import i18n from "./i18n";
import { PrivateKeySoftwareWallet } from "./domain/wallet/software-private-key";

declare const __TEST__: boolean;

interface State {
    network: "mainnet" | "testnet" | "previewnet";
    // the wallet that has been unlocked
    wallet: Wallet | null;
    // the specific instantiation of a client
    // from the unlocked wallet that is being used
    client: SimpleHederaClient | null;
    // the balance of the account associated with the client
    balance: AccountBalance | null;
    // the current price of HBARS in USD
    hbarPriceUsd: BigNumber.Instance | null;
    // a place to stuff extra information needed to process a transaction
    extraTxInfo: Record<string, string | number> | null;
    // is there an open prompt for the user on their hardware wallet
    prompt: boolean;
    // are you sure you want to logout? open state
    logoutConfirm: boolean;
    //contact customer support. open state
    contactSupport: boolean;
    //Hedera network status
    networkStatus: boolean;
    // Hedera Node Staking Info
    nodeStakingInfo: NetworkNodeStakingInfo[] | null;
    // Staking Info for the current account
    accountStakingInfo: MirrorAccountInfo | null;
}


// @ledgerhq/hw-transport's TransportStatusError's doesn't expose status* properties
interface TransportStatusError extends Error {
    statusCode: number;
    statusText: string;
}


const useStore = configureStore({
    reducer: {

    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof useStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof useStore.dispatch


