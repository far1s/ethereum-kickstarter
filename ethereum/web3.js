import Web3 from 'web3';

/**
 * We import our version of web3, but add the
 * provider from metamask. Here we make the assumption
 * that metamask has already injected web3
*/
const web3 = new Web3(window.web3.currentProvider);

export default web3;
