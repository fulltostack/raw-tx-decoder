const txDecoder = require('./decodeTx');
const config = require('../config');
const networks = require('./networks');

const decodeTx = (rawTx, _environment, _blockchain) => {
  const environment = _environment || config.get('blockchain_environment');
  const blockchain = _blockchain || config.get('blockchain');
  const decoder = txDecoder[blockchain];

  if (!decoder) {
    throw Error(`No txDecoder found for blockchain: ${blockchain}`);
  }

  const network = networks[blockchain];
  if (!network) {
    return decoder(rawTx);
  }
  return decoder(rawTx, network[environment]);
};

module.exports = decodeTx;
