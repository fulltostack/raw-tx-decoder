const ethCloneTxdecoder = require('./ethTxDecoder');
const btcCloneTxdecoder = require('./btcTxDecoder');

const txDecoder = {
  'ETH': ethCloneTxdecoder,
  'ETC': ethCloneTxdecoder,
  'BTC': btcCloneTxdecoder,
  'LTC': btcCloneTxdecoder,
  'DASH': btcCloneTxdecoder,
  'DOGE': btcCloneTxdecoder,
  'BCH': btcCloneTxdecoder,
};

module.exports = txDecoder;
