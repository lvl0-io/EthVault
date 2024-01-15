# EthVault

## Notes

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
