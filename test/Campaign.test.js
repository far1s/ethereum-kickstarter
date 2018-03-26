const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('Web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');

let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();

    factory = await new web3.eth.Contrac(JSON.parse(compiledFactory.interface))
        .deploy({ data: compiledFactory.biteCode })
        .send({ from: accounts[0], gas: '1000000' });

    await factory.methods.createCampaign('100').send({
        from: accounts[0],
        gas: '1000000'
    });
    // use `.call()` on view functions
    [campaignAddress] = await factory.methods.getDeployedCampaigns().call();
    // this contract is already deployed by the first
    // we just provide the address of that contract to inform solidity
    campaign = await new web3.eth.Contract(
        JSON.parse(compiledCampaign.interface), // ABI
        campaignAddress
    );
});

