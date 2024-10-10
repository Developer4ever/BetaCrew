

const net = require('net'); 
const { createStreamRequest, createResendRequest } = require('./requestHelper');
const { parsePacket } = require('./packetParser');
const { saveDataToFile, findMissingSequences } = require('./dataHandler');

let packets = [];

const connectToServer = () => {
  const client = net.createConnection({ port: 3000 }, () => {
    console.log('Connected to BetaCrew server');
    const request = createStreamRequest(); 
    client.write(request);
  });

  client.on('data', (data) => {
    const packet = parsePacket(data);
    packets.push(packet);
  });

  client.on('end', () => {
    console.log('Disconnected from server, checking for missing sequences');
    const missingSequences = findMissingSequences(packets);

    if (missingSequences.length > 0) {
      console.log('Requesting missing sequences:', missingSequences);
      requestMissingPackets(client, missingSequences);
    } else {
      console.log('All sequences received, saving data');
      saveDataToFile(packets);
      client.end();
    }
  });

  client.on('error', (err) => {
    console.error('Error:', err);
    client.end();
  });
};

// Function to request missing packets
const requestMissingPackets = (client, missingSequences) => {
  missingSequences.forEach((sequence) => {
    const request = createResendRequest(sequence);
    client.write(request);
  });

  client.on('data', (data) => {
    const packet = parsePacket(data);
    packets.push(packet);
    saveDataToFile(packets); // Save data after receiving missing packets
  });
};

module.exports = { connectToServer };
