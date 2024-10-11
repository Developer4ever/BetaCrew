
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

## Usage

1. Start the proxy server:
   ```bash
   node proxy.js
   ```

2. Start the client:
   ```bash
   node index.js
   ```

The client connects to a mock stock exchange server running on `localhost:3000`. The client requests packets and saves them to a file. If any packet is missing, the client will request those packets again and update the file.

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

