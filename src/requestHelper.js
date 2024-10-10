
const { CALL_TYPE } = require('./constants');

const createStreamRequest = () => {
  const buffer = Buffer.alloc(1); // 1 byte for callType
  buffer.writeUInt8(CALL_TYPE.STREAM_ALL_PACKETS, 0);
  return buffer;
};

const createResendRequest = (sequenceNumber) => {
  const buffer = Buffer.alloc(5); // 1 byte for callType + 4 bytes for sequence number
  buffer.writeUInt8(CALL_TYPE.RESEND_PACKET, 0);
  buffer.writeUInt32BE(sequenceNumber, 1); // Big Endian sequence number
  return buffer;
};

module.exports = {
  createStreamRequest, // Ensure correct export
  createResendRequest,
};
