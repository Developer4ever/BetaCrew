const express = require('express');
const net = require('net');
const app = express();
const PORT = 4000; // Port for the HTTP proxy server

app.use(express.json());

// Route to forward requests to BetaCrew server
app.post('/send-request', (req, res) => {
  const { callType, resendSeq } = req.body; // Extract call type and sequence from HTTP request

  const client = net.createConnection({ host: '127.0.0.1', port: 3000 }, () => {
    console.log('Connected to BetaCrew server');

    // Create binary payload for TCP request
    let buffer;
    if (callType === 1) {
      buffer = Buffer.alloc(1);
      buffer.writeUInt8(1, 0); // Stream All Packets
    } else if (callType === 2) {
      buffer = Buffer.alloc(5);
      buffer.writeUInt8(2, 0); // Resend Packet
      buffer.writeUInt32BE(resendSeq, 1); // Resend sequence number
    }

    client.write(buffer);
  });

  client.on('data', (data) => {
    console.log('Received data from BetaCrew server');

    // Parse the binary data (This is simplified, refer to packetParser.js for exact implementation)
    const response = {
      symbol: data.toString('ascii', 0, 4),
      buySellIndicator: data.toString('ascii', 4, 5),
      quantity: data.readUInt32BE(5),
      price: data.readUInt32BE(9),
      sequence: data.readUInt32BE(13),
    };

    client.end();
    res.json(response); // Send parsed response back to Postman
  });

  client.on('error', (err) => {
    console.error('Error:', err.message);
    res.status(500).json({ error: err.message });
  });

  client.on('end', () => {
    console.log('Disconnected from BetaCrew server');
  });
});

app.listen(PORT, () => {
  console.log(`Proxy server running at http://localhost:${PORT}`);
});
