---
sidebar_position: 2
---

# Multi-Signature Wallet Connection

## Overview
In addition to single-signature wallets, Clams supports multi-signature wallets for enhanced security. Connect your multi-signature wallet to track transactions and balances without compromising your keys.

## Prerequisites
- A configured multi-signature wallet (Unchained, Sparrow, etc.)
- Access to your wallet's output descriptor

## Connection Steps

### 1. Locate Your Output Descriptor
Depending on your wallet provider, you'll find the output descriptor in different locations:

**For Unchained Capital users:**
1. Log in to your Unchained Capital account
2. Navigate to your vault details
3. Locate and copy the output descriptor

@TODO insert screenshot from Unchained showing where to find the output descriptor

**For Sparrow Wallet users:**
1. Open Sparrow Wallet
2. Go to the Settings tab for your multi-signature wallet
3. Find and copy the output descriptor from the wallet settings page

@TODO insert screenshot of Sparrow wallet settings page showing the output descriptor location

### 2. Connect to Clams
1. In Clams, navigate to the Connections section
2. Select "Add Multi-Signature Wallet"
3. Paste the output descriptor into the designated field
4. Give your multi-signature wallet a descriptive name
5. Click "Save" to initiate the sync

@TODO insert screenshot of Clams connection modal for multi-signature wallets

## Notes
- This is a one-time setup process
- Clams only receives read-only access to your transaction history
- No private keys are shared during this process

## Video Tutorial
For a visual walkthrough of this process, watch our [Multi-Signature Connection Tutorial](https://www.youtube.com/watch?v=7JRPx-Nf4Hk).
