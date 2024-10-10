

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/output.json');


const saveDataToFile = (data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

// Function to check for missing sequences
const findMissingSequences = (packets) => {
  const sequences = packets.map((packet) => packet.sequence);
  const maxSequence = Math.max(...sequences);
  const missing = [];

  for (let i = 1; i <= maxSequence; i++) {
    if (!sequences.includes(i)) {
      missing.push(i);
    }
  }

  return missing;
};

module.exports = { saveDataToFile, findMissingSequences };
