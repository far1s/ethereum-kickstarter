'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * We import our version of web3, but add the
 * provider from metamask. Here we make the assumption
 * that metamask has already injected web3
*/
var web3 = void 0;

if (
// check if we're in the browser
typeof window !== 'undefined' &&
// check if metamask has already injected web3
typeof window.web3 !== 'undefined') {
    // we're in the browser and metamask is running
    web3 = new _web2.default(window.web3.currentProvider);
} else {
    // we're in the server and the user is not running metamask
    var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/orDImgKRzwNrVCDrAk5Q');
    web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQOzs7Ozs7QUFFQTs7Ozs7QUFLQSxJQUFJLFlBQUo7O0FBRUE7QUFDSTtBQUNBLE9BQU8sQUFBUCxXQUFrQixBQUFsQjtBQUNBO0FBQ0EsT0FBTyxPQUFPLEFBQWQsU0FBdUIsQUFKM0IsYUFLRSxBQUNFO0FBQ0E7V0FBTyxBQUFJLEFBQUosa0JBQVMsT0FBTyxBQUFQLEtBQVksQUFBckIsQUFBUCxBQUNIO0FBUkQsT0FRTyxBQUNIO0FBQ0E7UUFBTSxXQUFXLElBQUksY0FBSyxBQUFMLFVBQWUsQUFBbkIsYUFDYixBQURhLEFBQWpCLEFBR0E7V0FBTyxBQUFJLEFBQUosa0JBQVMsQUFBVCxBQUFQLEFBQ0g7QUFFRDs7a0JBQWUsQUFBZiIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9mYXJpcy9EZXZlbG9wbWVudC9ldGhlcmV1bS91ZGVteS1ldGhlcmV1bS1jbGFzcy9jYW1wYWlnbiJ9