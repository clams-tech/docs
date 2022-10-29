# FAQ

## Alternatives to Clams?

There are already some great options to access your CLN node such as [Zeus wallet](https://zeusln.app/) or [Ride The Lightning](https://github.com/Ride-The-Lightning/RTL). You should check those projects out as well to see if they fit your needs.

## Why Core Lightning?

We chose CoreLn as the first (and maybe only) backend for a few reasons:

- The combination of the [Lnmessage](https://github.com/aaronbarnardsound/lnmessage) library (inspired by [JB55’s](https://twitter.com/jb55) work on the [Lnsocket library](https://github.com/jb55/lnsocket)) and the Commando plugin provided a simple way to remotely and securely connect to the node over clearnet in the browser with no additional software installation required (after [v0.12.0](https://github.com/ElementsProject/lightning/releases/tag/v0.12.0)). We might at some point look in to [LNC](https://github.com/lightninglabs/lightning-node-connect) which provides a way to connect to [LND](https://github.com/lightningnetwork/lnd) nodes in a similar manner if there is large demand.
- [Liquidity Ads](https://medium.com/blockstream/setting-up-liquidity-ads-in-c-lightning-54e4c59c091d) is a decentralised way to buy and sell liquidity and we wanted a UI for it
- [Book Keeper](https://lightning.readthedocs.io/lightning-bkpr-dumpincomecsv.7.html) plugin solves one of the major points of spending bitcoin regularly; recording capital gains events and adding them to a csv to upload to accounting software such as Koinly.
