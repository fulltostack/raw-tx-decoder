const convict = require('convict');

const schema = {
  blockchain: {
    doc: 'Blockchain',
    format: ['BTC', 'LTC', 'DASH', 'ETH', 'ETC', 'DOGE', 'BCH'],
    default: 'BTC',
    env: 'BLOCKCHAIN',
    arg: 'blockchain',
  },
  blockchain_environment: {
    doc: 'Blockchain environment configuration',
    format: ['mainnet', 'testnet'],
    default: 'testnet',
    env: 'BLOCKCHAIN_ENVIRONMENT',
    arg: 'blockchain_environment',
  },
};

const config = convict(schema);
config.validate({ allowed: 'strict' });

module.exports = config;
