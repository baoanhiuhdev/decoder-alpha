import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import { ERC20__factory } from '../typechains';
import { CHAIN, EVMProviderService } from '../services/evmProviderService';

export const useERC20Balance = (
    tokenAddress?: string,
    walletAddress?: string
) => {
    const [balance, setBalance] = useState(ethers.toBigInt(0));
    const [isFetched, setIsFetched] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleFetchBalance = async (
        tokenAddress: string,
        walletAddress: string
    ) => {
        try {
            setLoading(true);
            const providerService = EVMProviderService.create(CHAIN.MAINNET);
            const factory = ERC20__factory.connect(
                tokenAddress,
                providerService.provider
            );
            const tokenBalance = await factory.balanceOf(walletAddress);

            setBalance(tokenBalance);
        } catch (error) {
            console.log('[handleFetchBalance]: ', error);
            setBalance(ethers.toBigInt(0));
        } finally {
            setLoading(false);
            setIsFetched(true);
        }
    };

    useEffect(() => {
        if (tokenAddress && walletAddress)
            handleFetchBalance(tokenAddress, walletAddress);
    }, [tokenAddress, walletAddress]);

    return { balance, loading, isFetched };
};
