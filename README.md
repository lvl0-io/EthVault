# EthVault

## Todo

- [x] Build smart contract
- [x] Swap USDC
- [x] Swap WETH
- [x] NodeJS App
- [X] Token reserve swaps

## Notes

Contract Address: https://arbiscan.io/address/0x93fc321246b81a196ea3bc6be272cdfc46af6fb7

Owner: 0x9Ab84a08b16C1D5AeBE4756679C5eAAe0563F144

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
