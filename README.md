# EthVault

## Notes

Contract Address: 0xeD1DB453C3156Ff3155a97AD217b3087D5Dc5f6E
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
