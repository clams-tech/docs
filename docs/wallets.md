# Wallets

This is where you establish connections to multiple wallets to synchronize data and manage funds. Start by clicking the `Add` button and selecting one of the supported options.

## Core Lightning

To connect your Core Lightning node you need to enter two things:

- Your [Lightning Address](/glossary/#lightning-address)
- A [Rune](/authentication/#runes) to permit the app to perform some functions on your node.

Once you have input both, click the connect button to initiate a connection to your node. If connection is successful, you will see the a green `connected` status appear.

### Advanced Options

Clicking "Advanced" will show some options for connecting to a node directly without using a WebSocket proxy, or for setting a custom WebSocket proxy URL to use instead of the Clams proxy.

For detailed instructions for connecting directly to a node, see the [Testing Locally](/testing-locally) section.

### How it Works

Clams uses a library called [Lnmessage](https://github.com/aaronbarnardsound/lnmessage) to spin up what can be conceptually thought of as an ultra light node that knows how to “speak” lightning, but does not implement the other features of the protocol. It will initiate a connection to your node like any other node would and uses the encrypted lightning transport protocol for all messages. In fact, once you have connected Clams to your node, you can run the [listpeers](https://lightning.readthedocs.io/lightning-listpeers.7.html) command and see it listed there in your peers like any other, except the feature bits are all set to zeros:

```json
{
  "id": "02ee5a0edc498173a9765a0225be3e375c2693fa067ad6229c62e29948fb3a9138",
  "connected": true,
  "netaddr": ["[::ffff:192.168.69.1]:50258"],
  "features": "0000000000000000",
  "channels": []
}
```

When connecting from the browser, we need to use a WebSocket for connection that routes lightning messages via a trustless proxy server. The Clams proxy server accepts a connection from the browser, initiates a regular socket connection to your node and then just shuffles encrypted binary packets between the browser and your node. The proxy server is trustless since the server cannot decrypt any of the traffic that it sees. The decryption keys remain client side and never leave your device.

!!! info

    A direct connection could be made to a CoreLn node over WebSockets thanks to the [experimental-websocket-port](https://lightning.readthedocs.io/lightningd-config.5.html?highlight=experimental-websocket-port) config option, but typically most users will not have the required ssl certificate required to satisfy CORS connections within browsers so that option is not currently available.

Below is an architecture diagram demonstrating how the browser app communicates with a Lightning node via a trustless proxy server.

<img alt="Architecture" src="../assets/connect-diagram.png">
<figcaption style='font-size: small; margin: -1em 0 2em 0;'>Web browser to lightning node communication</figcaption>

### Troubleshooting

If you see a connection error after attempting to connect you can try the following steps to diagnose the problem:

1. Use the `Recent errors` dropdown to help diagnose your issue.
2. Ensure your node is running by calling the `getinfo` method via the lightning CLI
3. Ensure that your node is reachable by [pinging the IP address and port](https://blog.christian-schou.dk/how-to-ping-ip-and-port-from-windows-or-linux/)
4. If the above are all working as expected, but you still cannot connect to your node via the Clams app, jump in to the [Discord](https://discord.gg/eWfHuJZVaB) and ask for some help.
