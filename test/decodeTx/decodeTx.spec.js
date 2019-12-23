const decodeTx = require('../../src/');
const expect = require('chai').expect;

describe('Decode Blockchain Txs', () => {

  const ethRawTX = '0xf901d60387016bcc41e90000830909fb948fd3121013a07c57f0d69646e86e7a4880b467b7895c283d410394100000b901641d4d691d0000000000000000000000000b7bde66ae610c48e576671db31739e3943c2d3800000000000000000000000000000000000000000000000000000003f5476a0000000000000000000000000027054b13b1b798b345b591a4d22e6562d47ea75a000000000000000000000000f51ec864d5fb2f184198e369fe063fc77045a3ad00000000000000000000000000000000000000000000005c283d41039410000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000059de4559000000000000000000000000000000000000000000000000000000015c86e8a5000000000000000000000000000000000000000000000000000000000000001cb6b2be98d891d9a372700ef1cc89b6f24ad72d36e24f8a735544561488215f90663d2060ba63bd1c3594d2dfc7dbd5097c2bd35979b4bf402f2f350db8333dc825a0cf5c68a67695a45baf286f4e2ceb1a8aeb551a54c91d6de5b693b8ab7d82d98ba02f5a1ae53fa8ad46cb32720da445650369a0e4af124070f50e67b5bf49450e69';
  const testBTCRawTx = '0200000001ea8db72478a15a18d734e86e9f6f27e35e251608db38b09fc1bd4c154e079247010000006b4830450221009c43948a4343f861358a73fc0ea719b28610fae62b558d781fc45ce539f1e07802202e34ebfa1489c6d50b842e0a18f0dec1687d384c4d31aed971f90587a8ba5e0d0121037accff75710891bb4020ccfb18cb22d654f5d83237ea7c0b5dee86d86843fccdffffffff026f5c0000000000001976a9140e365d516e82b05d3d43e659a78c4c7d91c59f1d88ace42bea02000000001976a91420ab68c221804e7b29dc817b70248eb7d74a224a88ac00000000';
  const mainBTCRawTx = '01000000018c00f544c42221de9ec1348e19d9b63c3afc85cbf85e79b1df254ef14db9f06d010000006a473044022049d0158dbf6a7530cc1fb6a431030d9ae795a0a907356c69c26f356c554371ce02201e45e6b4bf2fff72af79c5984757645445ff2c9b645736d7ba253533420517650121028f0c89b410a11697e47a9ef764d0693348357aae489901f15144cda68ee9e4ccffffffff02e0930400000000001976a9149aa3e84367a92f07483d930644840c42b6b32a3988ac6b130600000000001976a914e2c977d02c3462d9e05305638beea03d8c3ab8e988ac00000000';
  const testLTCRawTx = '0200000001df49b4ed2ad57526ce4620d6365afe4b00938af01b61a76243c95afd7a1189aa010000006a47304402201ecb240778cff6ad05b5fb9498996323715f9a742b33a5e20f03571e0ce393db0220082a110ad6410368391a0e862d0184f1004d333b80f31398332e1f86fabd3b7f012102c9e2d504f62c18f4e71cfc8b59f36792f06885bc8e13587da02c092aa29b3a61ffffffff0240420f00000000001976a914b2a24d80205acf2e283b418149259affc3f675a288ac3045683b000000001976a914affec444af2d5814f1549a9f9886774461569d0288ac00000000';
  const mainLTCRawTx = '02000000016fdb0966b56235943125709d045162da1f2da8df8a6ee689e8db46999bed2071010000006a4730440220372f756da5aa1ae6590e62ddeb49b06dfda95d5eecf963571debf13597d1825f022012c7c53f7efe7fc5d2f98fb2e5e0f2396845667b7a553a91ced316a9210b55a8012102c9e2d504f62c18f4e71cfc8b59f36792f06885bc8e13587da02c092aa29b3a61ffffffff0240420f00000000001976a9141951b7c96e5e534a6fdbf19ced2c35e9eb9ef4dc88ac94228b3b000000001976a914affec444af2d5814f1549a9f9886774461569d0288ac00000000';
  const etcRawTX = '0xf8680185098bca5a0083024dd894245f5626bec6c00822a25a80f693a61884bc5da3830186a0801ba0a1a43a8fdc4a0ddef6f3c447e14c3542bf0d40ed39ce02f6295a0f1dcd7a0217a05cb7eca0f20defacea1d4ad6c71efe538439d83e0cc6614787781ed83172cb89';

  it('should decode btc mainnet rawTx', () => {
    const decodedTx = decodeTx(mainBTCRawTx, 'mainnet', 'BTC');
    const expectedFromAddress = '1Mg94bdjEpRbhPwjoRKbTF1jEycUKznEbB';
    const expectedToAddress1 = '1F6fR27koEZxGRcTsikAr3fNbLcB4kmYVd';
    const expectedToAddress2 = '1Mg94bdjEpRbhPwjoRKbTF1jEycUKznEbB';

    expect(decodedTx.outputs[0].scriptPubKey.addresses[0]).to.equal(expectedToAddress1);
    expect(decodedTx.outputs[1].scriptPubKey.addresses[0]).to.equal(expectedToAddress2);
    expect(decodedTx.inputs[0].addr).to.equal(expectedFromAddress);
  });

  it('should decode btc testnet rawTx', () => {
    const decodedTx = decodeTx(testBTCRawTx, 'testnet', 'BTC');
    const expectedFromAddress = 'miVhFuw6etaGUELMidQkCt72KsGM5xvb1K';
    const expectedToAddress1 = 'mgp6t42UvoAYYpVzqxnWeENtFD8QVZw3w3';
    const expectedToAddress2 = 'miVhFuw6etaGUELMidQkCt72KsGM5xvb1K';

    expect(decodedTx.outputs[0].scriptPubKey.addresses[0]).to.equal(expectedToAddress1);
    expect(decodedTx.outputs[1].scriptPubKey.addresses[0]).to.equal(expectedToAddress2);
    expect(decodedTx.inputs[0].addr).to.equal(expectedFromAddress);
  });

  it('should decode ltc testnet rawTx', () => {
    const decodedTx = decodeTx(testLTCRawTx, 'testnet', 'LTC');
    const expectedFromAddress = 'mwZXk86QwUbkB3JQUVbGe2C4K7rwTmkWBL';
    const expectedToAddress1 = 'mwoV1C4yU6j3LrjmcXphLego2hkoCLdmFu';
    const expectedToAddress2 = 'mwZXk86QwUbkB3JQUVbGe2C4K7rwTmkWBL';

    expect(decodedTx.outputs[0].scriptPubKey.addresses[0]).to.equal(expectedToAddress1);
    expect(decodedTx.outputs[1].scriptPubKey.addresses[0]).to.equal(expectedToAddress2);
    expect(decodedTx.inputs[0].addr).to.equal(expectedFromAddress);
  });

  it('should decode ltc mainnet rawTx', () => {
    const decodedTx = decodeTx(mainLTCRawTx, 'mainnet', 'LTC');
    const expectedFromAddress = 'LbGXiHKGD7QYejWww4cC683VfLdWhi4tLq';
    const expectedToAddress1 = 'LMXq3sNH2ivA3msKVW7HdeTVxVZVA6S1ND';
    const expectedToAddress2 = 'LbGXiHKGD7QYejWww4cC683VfLdWhi4tLq';

    expect(decodedTx.outputs[0].scriptPubKey.addresses[0]).to.equal(expectedToAddress1);
    expect(decodedTx.outputs[1].scriptPubKey.addresses[0]).to.equal(expectedToAddress2);
    expect(decodedTx.inputs[0].addr).to.equal(expectedFromAddress);
  });

  it('should decode eth mainnet rawTx', () => {
    const decodedTx = decodeTx(ethRawTX, 'mainnet', 'ETH');
    const expectedToAddress = '0x8fd3121013a07c57f0d69646e86e7a4880b467b7';
    const expectedFromAddress = '0xf51ec864d5fb2f184198e369fe063fc77045a3ad';
    const expectedGasPrice = 400000000000000;
    const expectedGasLimit = 592379;
    const expectedNonce = 3;
    const expectedValue = 1.7e+21;
    const expectedData = `1d4d691d0000000000000000000000000b7bde66ae610c48e576671db31739e3943c2d3800000000000000000000000000000000000000000000000000000003f5476a0000000000000000000000000027054b13b1b798b345b591a4d22e6562d47ea75a000000000000000000000000f51ec864d5fb2f184198e369fe063fc77045a3ad00000000000000000000000000000000000000000000005c283d41039410000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000059de4559000000000000000000000000000000000000000000000000000000015c86e8a5000000000000000000000000000000000000000000000000000000000000001cb6b2be98d891d9a372700ef1cc89b6f24ad72d36e24f8a735544561488215f90663d2060ba63bd1c3594d2dfc7dbd5097c2bd35979b4bf402f2f350db8333dc8`;

    expect(decodedTx.to).to.equal(expectedToAddress);
    expect(decodedTx.from).to.equal(expectedFromAddress);
    expect(decodedTx.gasPrice.toNumber()).to.equal(expectedGasPrice);
    expect(decodedTx.gasLimit.toNumber()).to.equal(expectedGasLimit);
    expect(decodedTx.nonce).to.equal(expectedNonce);
    expect(decodedTx.value.toNumber()).to.equal(expectedValue);
    expect(decodedTx.data).to.equal(expectedData);
  });

  it('should decode etc mainnet rawTx', () => {
    const decodedTx = decodeTx(etcRawTX, 'mainnet', 'ETC');
    const expectedToAddress = '0x245f5626bec6c00822a25a80f693a61884bc5da3';
    const expectedFromAddress = '0xb72d76063fbb377dc5c69a9c69ec31102c12dfde';
    const expectedGasPrice = 41000000000;
    const expectedGasLimit = 151000;
    const expectedNonce = 1;
    const expectedValue = 100000;
    const expectedData = ``;

    expect(decodedTx.to).to.equal(expectedToAddress);
    expect(decodedTx.from).to.equal(expectedFromAddress);
    expect(decodedTx.gasPrice.toNumber()).to.equal(expectedGasPrice);
    expect(decodedTx.gasLimit.toNumber()).to.equal(expectedGasLimit);
    expect(decodedTx.nonce).to.equal(expectedNonce);
    expect(decodedTx.value.toNumber()).to.equal(expectedValue);
    expect(decodedTx.data).to.equal(expectedData);
  });

});