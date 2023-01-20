# Running a VPN

If you are currently running a TOR only node, or are about to setup a new node, then you will need to make sure that your node is accessible over clearnet before attempting to connect in the Clams app.

You could just simply expose your home IP, but this is terrible for privacy. A good work around is to run a server in the cloud (VPS) that has a public IP which acts as a public front for your node. The VPS has a secure VPN connection to your home node and will forward all traffic without ever exposing your home IP to the broader network.

Some options:

## Tailscale

We recommend using [Tailscale](https://tailscale.com/)- and we will have a step-by-step guide added to our docs very soon. For Umbrel node runners, here is a [good guide](https://community.getumbrel.com/t/how-to-use-tailscale-with-umbrel/6782).

## Tunnelsats

If you are running one of the node in a box solutions such as RaspiBlitz, Umbrel, Start9 etc, you could try using a service called [TunnelSats](https://tunnelsats.com/) which provides scripts that will convert your TOR only node in to a hybrid node with clearnet access. They run the infrastructure and you pay in sats for the service for fixed time frames.

## Wireguard

If you would like to setup a VPS yourself, the best guide we have found so far for running your lightning node on clearnet via a Wireguard VPN is [this video by 402 Payment Required](https://www.youtube.com/watch?v=TzKj5garlIE) (awesome name btw!)
