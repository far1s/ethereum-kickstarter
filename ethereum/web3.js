import Web3 from 'web3';

/**
 * We import our version of web3, but add the
 * provider from metamask. Here we make the assumption
 * that metamask has already injected web3
*/
let web3;

if (
    // check if we're in the browser
    typeof window !== 'undefined' &&
    // check if metamask has already injected web3
    typeof window.web3 !== 'undefined'
) {
    // we're in the browser and metamask is running
    web3 = new Web3(window.web3.currentProvider);
} else {
    // we're in the server and the user is not running metamask
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/orDImgKRzwNrVCDrAk5Q'
    );
    web3 = new Web3(provider);
}

export default web3;
