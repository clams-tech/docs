---
sidebar_position: 1
---

# Server Configuration

## Overview
The server configuration allows you to specify which blockchain server Clams uses to query transaction data and balances for your on-chain wallets.

## Server Types
You can choose between two server types:
- **Esplora Server** - Bitcoin block explorer API
- **Electrum Server** - Lightweight Bitcoin client protocol

By default, Clams provides a server for your convenience, but you can configure your own for enhanced privacy.

## Why Use Your Own Server?
If you have privacy concerns, we recommend running your own server to ensure your wallet addresses aren't shared with third parties.

## Configuration Steps

### Adding a Custom Server
1. Navigate to the Settings page
2. Click on the Server icon
3. Enter your server URL and port
4. Click Save to apply changes

@TODO Insert screenshot: Server configuration interface with URL and port fields

### Tor Support
Clams fully supports servers running on Tor, making it compatible with node solutions like:
- Umbrel
- Start9
- RaspiBlitz

This means you can connect to your home server without additional configuration.

## Default vs. Custom Server
- **Default Server**: Convenient, managed by Clams
- **Custom Server**: Enhanced privacy, you control the data flow
