---
sidebar_position: 5
---

# Nostr Wallet Connect (NWC)

## Overview
Connect your Lightning wallet to Clams using Nostr Wallet Connect (NWC). This protocol allows secure connections to various Lightning wallets without exposing your private keys.

## Prerequisites
- A wallet that supports Nostr Wallet Connect
- Access to generate an NWC connection string

## Connection Steps

### 1. Generate an NWC Connection String
We'll demonstrate using the Alby browser extension as an example:

1. Open your Alby extension
2. Navigate to the connections or NWC section
3. Create a new connection for Clams

@TODO Insert screenshot: Alby extension with NWC settings page open

### 2. Configure Permissions
For Clams, you only need to grant read permissions:

1. Enable read access to your wallet information
2. Disable permissions for creating invoices and sending payments
3. Generate your connection string

@TODO Insert screenshot: Alby permissions configuration page with appropriate permissions selected

### 3. Connect to Clams
1. In Clams, navigate to the Connections section
2. Select "Add NWC Wallet"
3. Paste your NWC connection string into the designated field
4. Click "Save" to initiate the sync

@TODO Insert screenshot: Clams connection modal for NWC with the connection string field

## Notes
- This is a one-time setup process
- The connection will remain active unless you revoke it from your wallet
- Different NWC-compatible wallets may have slightly different interfaces, but the concept remains the same

## Additional Resources
For more information on Nostr Wallet Connect and a list of compatible wallets, visit [the official NWC website](https://nwc.dev/).

## Video Tutorial
For a visual walkthrough of this process, watch our [NWC Connection Tutorial](https://www.youtube.com/watch?v=NXsq-qfSL4s).