import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

/**
 * new web3.eth.Contract(jsonInterface[, address][, options])
 *
 * Returns [Object]: The contract instance with all its methods and events.
*/
const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x1dc8C9FFD0BbF033d0fd77053989570Ed755254F'
);

export default instance;
