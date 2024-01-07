# Glossary

## Lightning Address

A lightning node address is a string of text composed of your node’s:

- Public key
- IP or DNS address
- Port

You can find your address by looking up your node on a Lightning explorer such as [Amboss](https://amboss.space/node/02df5ffe895c778e10f7742a6c5b8a0cefbe9465df58b92fadeb883752c8107c8f) or [Mempool](https://mempool.space/lightning/node/02df5ffe895c778e10f7742a6c5b8a0cefbe9465df58b92fadeb883752c8107c8f) and copying the address. Try searching for your nodes [alias](https://docs.corelightning.org/docs/configuration#lightning-node-customization-options) if you don't know your public key.

Here is an example:

```
03864ef025fde8fb587d989186ce6a4a186895ee44a926bfc370e2c366597a3f8f@3.33.236.230:9735
```

Alternatively you can call the [getinfo](https://lightning.readthedocs.io/lightning-getinfo.7.html) method from the lightning cli and derive the address from the `id` and `address` parameters from the returned object.
