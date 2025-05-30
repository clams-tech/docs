---
sidebar_position: 1
---

# Single-Sig Wallet Connection

## Overview
Connect your single-signature Bitcoin wallet to Clams by providing your extended public key (xpub). This allows Clams to fetch and display your on-chain transactions without requiring access to your private keys.

## Prerequisites
- A single-signature Bitcoin wallet (like Sparrow, BlueWallet, etc.)
- Access to your wallet's extended public key (xpub)

## Connection Steps

### 1. Find your Extended Public Key (xpub)
In most wallets, you can find your xpub in the wallet settings:

**Example using Sparrow Wallet:**
1. Open Sparrow Wallet
2. Navigate to the Settings tab
3. Under Script Policy, right-click on the input field 
4. Select "Copy Output Descriptor"

@TODO Insert screenshot: Sparrow wallet settings page showing the Script Policy section with the right-click menu open

### 2. Connect to Clams
1. In Clams, navigate to the Connections section
2. Select "Add Single-Sig Wallet"
3. Paste your xpub into the designated field
4. Give your wallet a descriptive name
5. Click "Save" to initiate the sync

@TODO Insert screenshot: Clams connection modal with fields for name and xpub

## Notes
- This is a one-time setup process
- Clams only receives read-only access to your transaction history
- No private keys are shared during this process
- You can add multiple single-signature wallets to track all your funds

## Video Tutorial
For a visual walkthrough of this process, watch our [Single-Sig Connection Tutorial](https://www.youtube.com/watch?v=7Uh78IrUQks).
