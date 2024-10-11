
# Betacrew Client

A simple TCP client that connects to a mock stock exchange server, retrieves packets, detects missing sequences, and requests missing packets. This application also saves the received data into a file.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/betacrewclient.git
   cd betacrewclient
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

## Task Requirements

This project is a client application for interacting with the **BetaCrew Mock Exchange Server**, as specified in the [NodeJS Mage Take Home Test](link-to-your-notion-task).

### Features:
1. **Stream All Packets**: The client requests and receives all available packets from the exchange server using Call Type 1.
2. **Resend Packet**: The client detects missing sequences after receiving all packets and requests the server to resend specific packets using Call Type 2.
3. **Data Integrity**: The client ensures that no sequences are missing in the final output by validating the sequence numbers and requesting any missing ones.
4. **Big Endian Byte Order**: The client handles packet parsing according to the server's specification of big endian byte order.
5. **Output**: The received data is saved as a JSON file containing an array of objects, where each object represents a packet of stock data.

### Instructions to Run:
1. Download the BetaCrew exchange server from [this link](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ce81f7a0-f2c3-44ce-976b-966d8df294fe/betacrew_exchange_server.zip) and start the server:
   ```bash
   node main.js
   ```
2. Run the client application to connect and receive data:
   ```bash
   node index.js
   ```

The received data will be saved to `data/output.json`.

Make sure you have Node.js version 16.17.0 or higher installed.

## Project Structure

```plaintext
betacrewclient/
├── data/                    # Directory for saving received data
├── node_modules/            # Installed dependencies
├── proxy.js                 # Proxy server to forward requests
├── client.js                # Client to connect to the stock exchange server
├── packetParser.js          # Parses received packets
├── requestHelper.js         # Helper functions for creating requests
├── dataHandler.js           # Handles saving data and checking for missing sequences
├── constants.js             # Contains constant values
├── index.js                 # Entry point to start the client
├── package.json             # Project metadata and scripts
├── package-lock.json        # Exact versions of installed dependencies
```

## Scripts

- **`npm start`**: Starts the client to connect to the server.
- **`npm run proxy`**: Starts the proxy server on port 4000.

## Dependencies

- `express` - Web framework for building the proxy server.
- `net` - Node.js module for handling TCP connections.

## Contributing

Feel free to open issues or submit pull requests for any improvements.

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.
