---
sidebar_position: 4
---

# Core Lightning (CLN) Node Connection

## Overview
Connect your Core Lightning (CLN) node to Clams using the Commando protocol. This allows you to securely sync your lightning transactions while maintaining strict access controls.

## Prerequisites
- A running Core Lightning node
- Terminal access to your node
- Your node's connection details

## Connection Steps

### 1. Prepare Your Node Information
You'll need two pieces of information:
1. Your node's connection address
2. A restricted rune for secure access

### 2. Enter Node Connection Details
1. In Clams, navigate to the Connections section
2. Select "Add CLN Node"
3. Add a descriptive label (e.g., "My Lightning Node")
4. Enter your node's address in the format: `<pubkey>@<ip>:<port>`
   
   Example: `02415fbac94252d5b103e1eb9b35efc61dffd35cef30da30c8370a5cd6d26d1d90@127.0.0.1:9735`

@TODO Insert screenshot: Clams connection modal showing the label and node address fields

### 3. Create a Restricted Rune
Clams uses `commando` to connect to Core Lightning nodes. For security, create a rune with read-only permissions:

1. Open the terminal for your node
2. Run the following command (replace the ID with your node's pubkey):

```
lightning-cli createrune restrictions='[["id=02415fbac94252d5b103e1eb9b35efc61dffd35cef30da30c8370a5cd6d26d1d90"], ["method^list", "method^get", "method=summary", "method^bkpr-"], ["method/listdatastore"]]'
```

@TODO Insert screenshot: Terminal showing the rune creation command and output

### 4. Complete the Connection
1. Copy the generated rune from your terminal
2. Paste it into the rune field in Clams
3. Click "Save" to initiate the sync

@TODO Insert screenshot: Clams connection modal with the rune field filled in

## Notes
- This is a one-time setup process
- Clams will remember your node and rune
- You can sync your node anytime by clicking the sync button
- The connection will work as long as:
  - Your node is running
  - The rune remains valid

## Security Best Practices
Although Clams only needs read access, it's best practice to use a restricted rune that limits permissions to only what's necessary.

## Video Tutorial
For a visual walkthrough of this process, watch our [CLN Connection Tutorial](https://www.youtube.com/watch?v=bduhordWO7I).
