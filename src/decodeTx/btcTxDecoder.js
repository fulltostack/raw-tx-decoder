const { Transaction, crypto, script, address } = require('bitcoinjs-lib');

const btcCloneTxdecoder = (rawTx, bitcoinjsLibNetwork) => {
  let tx;
  try {
    tx = Transaction.fromHex(rawTx);
  } catch (error) {
    throw new Error('Invalid raw transaction');
  }
  
  const inputs = (tx.ins || []).map((input, n) => {
    const scriptData = script.toASM(input.script);
    const pubKey = scriptData.split(' ')[1];
    const addr = pubKey
      ? getAddressFromPublicKey(pubKey, bitcoinjsLibNetwork)
      : '';
    return {
      addr,
      txid: input.hash.reverse().toString('hex'),
      n: input.index,
      script: scriptData,
      sequence: input.sequence,
    };
  });

  const outputs = (tx.outs || []).map((out, n) =>
    format(out, n, bitcoinjsLibNetwork),
  );

  const decodedTx = {
    inputs,
    outputs,
    txid: tx.getId(),
    version: tx.version,
    locktime: tx.locktime,
  };

  return decodedTx;
};

const getAddressFromPublicKey = (publicKey, network) => {
  const publicKeyBuff = new Buffer(publicKey, 'hex');
  return address.toBase58Check(
    crypto.hash160(publicKeyBuff),
    network.pubKeyHash,
  );
};

const format = (out, n, network) => {
  const vout = {
    n,
    satoshi: out.value,
    value: (1e-8 * out.value).toFixed(8),
    scriptPubKey: {
      asm: script.toASM(out.script),
      hex: out.script.toString('hex'),
      type: script.classifyOutput(out.script),
      addresses: [],
    },
  };

  switch (vout.scriptPubKey.type) {
    case 'pubkeyhash':
    case 'scripthash':
      vout.scriptPubKey.addresses.push(
        address.fromOutputScript(out.script, network),
      );
      break;
  }
  return vout;
};

module.exports = btcCloneTxdecoder;
