# Project Goals

Here are some of the initial goals of the project and have influenced the direction so far. These will probably change over time as the project evolves and will be update here as they do.

- Reliably and securely control your node that is running at home from anywhere in the world. This has to feel like the future of payments. It needs to be fast (why we are focussing on a clearnet connection first) and we need to feel confident that we can connect to our node and reliably make payments. We had tried connecting to TOR nodes running at home, but could not reliably connect to the app or rely on payments to succeed. Running your node with a clearnet IP address is not good for privacy, so we spent time working out how to run a VPN on a cloud server. This allows for a public clearnet IP without ever broadcasting your home IP address. A guide on how to do this will be in this documentation soon, and can hopefully be improved over time by people with much greater expertise than us on the topic. Our hope is eventually there will be an easy one click solution for the various node packages (such as Umbrel, RaspiBlitz etc) to run your node as a hybrid tor/clearnet node. [TunnelSats](https://tunnelsats.com/) is one solution that looks to make it easier.
- No reliance on the app store for distribution. Bitcoin apps historically have a tough time dealing with being included in the various app stores, so we want to bypass that completely. Avoiding the app store will also allow for rapid iteration with instant releases. We can implement a new feature, release it and get feedback in a tight loop, which should hopefully lead to the app evolving at a faster rate. This is why we chose to build Clams as a [PWA (Progressive Web App)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps). Anyone who has access to the web can access Clams. You can save the app to your homescreen and it looks and feels like a native app. Building a PWA instead of a native app(s) comes with the tradeoff of not having access to some device features (NFC comes to mind as one that would be amazing to have in the app) that are available to native apps. There is a large push to make PWA’s have feature parity with Native Apps, so we are hoping that this will change over time. If not, Clams will still be useful with just the currently available features.
- Clean and intuitive UX. We want people who aren’t familiar with Bitcoin to be able to use the app and get the benefit of Bitcoin payments. The connection process is currently fairly technical which we want to improve over time, but once connected it should be easy for anyone to use for day to day payments.
- Privacy focused. No logging, no tracking, no Google scripts.
- Device specific functionality. On mobile devices we want the UI to be super clean and easy to use. The mobile app is optimised for payments on the go like paying for your lunch in sats as well as displaying basic information such as balance and payment history. On desktop or large tablet devices we want more powerful features like liquidity, channel and peer management. So the ability to fully manage your node without needing to touch the command line.
- International. Clams has been built with [i18n](https://en.wikipedia.org/wiki/Internationalization_and_localization) from the start. We currently only support english, but our hope is that we will receive contributions to help translate the app to as many languages as possible.