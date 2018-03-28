import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

/**
 * new web3.eth.Contract(jsonInterface[, address][, options])
 *
 * Returns [Object]: The contract instance with all its methods and events.
*/
const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x1171be8f22a227859045d91A0961869f69eb069C'
);

export default instance;
