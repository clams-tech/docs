# Testing Locally

To try the app out you can create a local regtest lightning network using [Polar](https://lightningpolar.com/) and connect Clams to CoreLn nodes.

1. Download [Polar](https://lightningpolar.com/)
2. Create a test network with a least one CoreLN node running > v0.12.0 and start the network
3. Open up the Docker dashboard and find the running container. Open up the docker compose file in your text editor:

   <img width="986" alt="Screen Shot 2023-01-31 at 7 24 30 am" src="https://user-images.githubusercontent.com/29873495/215587105-595e3b5b-601a-4b21-8d22-1047449051d5.png">

4. Find the name of the CoreLN node and add `--experimental-websocket-port=7272` to the startup command and expose the port:

   <img width="581" alt="Screen Shot 2023-01-31 at 7 26 18 am" src="https://user-images.githubusercontent.com/29873495/215587662-72af2672-0d01-402f-83fa-ef892c4b4a41.png">

5. Save the file and restart the Polar network
6. Run the Clams app locally:
7. `git clone https://github.com/clams-tech/App.git`
8. `cd App`
9. `yarn`
10. `yarn dev-http`
11. Enter the connection address using the public key of the node which is accessible from the "info" tab as well as `localhost:7272`.
12. Click the "Advanced" dropdown -> select direct connection -> select `ws`
13. Click "Connect" and you should successfully connect to the local node.
14. To create an auth rune, click the "Actions" tab -> click "Launch which will launch a terminal window for the lightning CLI.
15. Run `lightning-cli commando-rune` to create a rune and paste it in to the app.
16. You have connected and authenticated your locally running node!
