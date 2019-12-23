const Tx = require('ethereumjs-tx');
const BigNumber = require('bignumber.js');

const ethTxDecoder = rawTx => {
  let tx
  try {
    tx = new Tx(rawTx);
  } catch (error) {
    throw new Error('Invalid raw transaction');
  }
  const decodedTx = {
    data: tx.data.toString('hex'),
    from: `0x${tx.from.toString('hex')}`,
    gasLimit: new BigNumber(parseInt(tx.gasLimit.toString('hex'), 16)),
    gasPrice: new BigNumber(parseInt(tx.gasPrice.toString('hex'), 16)),
    nonce: parseInt(tx.nonce.toString('hex'), 16),
    to: `0x${tx.to.toString('hex')}`,
    value: new BigNumber(parseInt(tx.value.toString('hex'), 16)),
  };
  return decodedTx;
};

module.exports = ethTxDecoder;
