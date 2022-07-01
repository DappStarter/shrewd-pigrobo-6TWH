require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'inflict drum off uphold drift return pitch unusual hunt beach slot gasp'; 
let testAccounts = [
"0xcef4b3525442304e9bdb70e4ed2c1f2045920fb5016d0b2069a42a57168a09fb",
"0x0f50481271345ae301487445ad91ffb83e05f7d4568ec5171e3e113ad08f3a92",
"0x624b0068c4f97ef0982513a5f9884320eadc494eedd2cb13b05d86d403ae365e",
"0x8324508a1bebaab3d13d461b4ac05855cfb9cd70e584f294a46db04078736590",
"0x862b177e031c67a34a3f78a7ffc04746cafcc3c7a7da7e1c9d36361f568149ac",
"0xe73136a080bb1f795aa53a86f3ad0428611f9cadc7d42a640428585832135cb2",
"0x60f6655404708c688c4db7ca08e26f190fd7936b96c90c0e4c4d0d9d4d84e699",
"0x5f03e4e8734976c8b7b93dbf137a35d8cf647c937cbb79bb03ea8c9c67a45f51",
"0xbdd63b83065d9306789d77e25bdfefa626129a743743126d02327e21c5a9298e",
"0xee6552b9666d9f2a48619926189e38e6c82c456dbc4e83ec88e7a0a80c59f869"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


