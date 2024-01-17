# EthVault

## Todo

- [x] Build smart contract
- [x] Swap USDC
- [x] Swap WETH
- [x] NodeJS App
- [ ] Token reserve swaps

## Notes

Contract Address: 0x82C6D3ed4cD33d8EC1E51d0B5Cc1d822Eaa0c3dC

Owner: 0xa0Ee7A142d267C1f36714E4a8F75612F20a79720

### CLI

source .env

cast call $USDC \
 "balanceOf(address)(uint256)" \
 $ME

cast call $USDC \
 "balanceOf(address)(uint256)" \
 $LUCKY_USER

cast rpc anvil_impersonateAccount $LUCKY_USER

cast send $USDC \
--unlocked \
--from $LUCKY_USER \
 "transfer(address,uint256)(bool)" \
 $ME \
 1686045000

cast call $USDC \
 "balanceOf(address)(uint256)" \
 $ME

cast call $USDC \
 "balanceOf(address)(uint256)" \
 $LUCKY_USER
