---
sidebar_position: 3
---

# LND Node Connection

## Overview
Connect your LND (Lightning Network Daemon) node to Clams using Lightning Node Connect (LNC). This allows you to securely sync your lightning transactions without exposing your node to unnecessary security risks.

## Prerequisites
- An LND node with Lightning Node Connect (LNC) installed
- Terminal access to your node

## Connection Steps

### 1. Generate a Pairing Phrase
1. Open your terminal on the node with LNC installed
2. Run the following command:
   ```
   lit_create_session Clams
   ```
   Note: "Clams" is just a label for your records and can be replaced with any name you prefer.

@TODO Insert screenshot: Terminal showing the command and the response with the pairing phrase

### 2. Find the Pairing Phrase
Locate the pairing phrase in the response under the `pairing_secret_mnemonic` field.

@TODO Insert screenshot: Terminal output highlighting the pairing_secret_mnemonic field

### 3. Connect to Clams
1. In Clams, navigate to the Connections section
2. Select "Add LND Node"
3. Enter the pairing phrase into the designated field
4. Click "Save" to initiate the sync

@TODO Insert screenshot: Clams connection modal for LND with the pairing phrase field

## Notes
- This is a one-time setup process
- Clams will retain the pairing information
- The connection will work until either:
  - Your node goes offline
  - You revoke the pairing phrase using LNC

## Additional Resources
For more information on Lightning Node Connect, visit the [official documentation](https://docs.lightning.engineering/lightning-network-tools/lightning-terminal/lightning-node-connect).

## Video Tutorial
For a visual walkthrough of this process, watch our [LND Connection Tutorial](https://www.youtube.com/watch?v=r8JC4gNlObY).
