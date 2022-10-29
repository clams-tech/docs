# Running a VPN

If you are currently running a TOR only node, or are about to setup a new node, then you will need to make sure that your node is accessible over clearnet before attempting to connect in the Clams app.

You could just simply expose your home IP, but this is terrible for privacy. A good work around is to run a server in the cloud (VPS) that has a public IP which acts as a public front for your node. The VPS has a secure VPN connection to your home node and will forward all traffic without ever exposing your home IP to the broader network.

If you are running one of the node in a box solutions such as RaspiBlitz, Umbrel, Start9 etc, you could try using a service called [TunnelSats](https://tunnelsats.com/) which provides scripts that will convert your TOR only node in to a hybrid node with clearnet access. They run the infrastructure and you pay in sats for the service for fixed time frames.

If you would like to set a VPS yourself, then we will have an in depth guide on how to do that here soon. For the moment here are some resources that you can use to guide you through that process:

- [https://github.com/wtogami/vpn-nat-service-forwarding-howto](https://github.com/wtogami/vpn-nat-service-forwarding-howto)
- [https://www.digitalocean.com/community/tutorials/how-to-set-up-wireguard-on-ubuntu-20-04](https://www.digitalocean.com/community/tutorials/how-to-set-up-wireguard-on-ubuntu-20-04)
- [https://golb.hplar.ch/2018/10/wireguard-on-amazon-lightsail.html](https://golb.hplar.ch/2018/10/wireguard-on-amazon-lightsail.html)
- [https://upcloud.com/resources/tutorials/get-started-wireguard-vpn](https://upcloud.com/resources/tutorials/get-started-wireguard-vpn)
- [https://golb.hplar.ch/2019/01/expose-server-vpn.html#forward-traffic](https://golb.hplar.ch/2019/01/expose-server-vpn.html#forward-traffic)
- [https://serversideup.net/generating-wireguard-qr-codes-for-fast-mobile-deployments/](https://serversideup.net/generating-wireguard-qr-codes-for-fast-mobile-deployments/)
- [https://kaspars.net/blog/wireguard-routing](https://kaspars.net/blog/wireguard-routing)
