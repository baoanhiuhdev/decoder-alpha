import { JsonRpcProvider } from 'ethers';

export enum CHAIN {
    MAINNET = 'mainnet',
    TESTNET = 'testnet',
}

export class EVMProviderService {
    public readonly provider: JsonRpcProvider;
    public static create(
        provider: JsonRpcProvider | CHAIN
    ): EVMProviderService {
        if (provider === CHAIN.MAINNET) {
            provider = new JsonRpcProvider('https://bsc-dataseed1.binance.org');
        }
        if (provider === CHAIN.TESTNET) {
            provider = new JsonRpcProvider(
                'https://data-seed-prebsc-1-s1.bnbchain.org:8545/'
            );
        }

        return new EVMProviderService(provider);
    }

    private constructor(provider: JsonRpcProvider) {
        this.provider = provider;
    }
}
