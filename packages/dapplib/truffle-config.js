require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remember huge hope entire off subject'; 
let testAccounts = [
"0x51d07e35dfd82b7cfdb2472140722e25b9c25005aa7ab40b47feb57ab60daf05",
"0xa369348e37a24e7684d5ceebd1ac2aaa93c0925c81ba0ccdf445518c694ac40a",
"0xab91a2c6eeed77b1bcaed45bf05a87401cdc66d26a36828e86ef94e67ac3c26c",
"0xf9076c96c2aec76b803a91517542e5f9f22586b8519dac51ca737571774f6cd1",
"0x9163e5fb371c01acee704900e8f2e6237bdc8d1689a131ea99183f57ba9a4597",
"0x455553759850eb2bcc08421d24b741e502cb9ae09fcfc4c9a9d30cf0ba28e750",
"0xced0d100ae2f7276f30b016487b094ee4b4a337a93245a4107b4d34b769b348d",
"0x21d6549e222a4d46b20ae0c4a2a2934befb007c262ca7fbd60bb5db0ccc66df6",
"0x0317809d4d53aa23c357ed26be573b98cf9d60e2129835f68e16784e4b8498fc",
"0x110afbe62f6649c59dc7158419d22630fd7216841a580c92b1c484bdbc8b48ef"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

