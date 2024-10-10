

const parsePacket = (buffer) => {
    const symbol = buffer.toString('ascii', 0, 4); // First 4 bytes for symbol
    const buySellIndicator = buffer.toString('ascii', 4, 5); // 1 byte for buy/sell indicator
    const quantity = buffer.readUInt32BE(5); // 4 bytes for quantity (Big Endian)
    const price = buffer.readUInt32BE(9); // 4 bytes for price (Big Endian)
    const sequence = buffer.readUInt32BE(13); // 4 bytes for packet sequence (Big Endian)
  
    return { symbol, buySellIndicator, quantity, price, sequence };
  };
  
  module.exports = { parsePacket };
  