'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _RequestRow = require('../../../components/RequestRow');

var _RequestRow2 = _interopRequireDefault(_RequestRow);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../../../routes');

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/faris/Development/ethereum/udemy-ethereum-class/campaign/pages/campaigns/requests/index.js?entry';


var RequestIndex = function (_React$Component) {
    (0, _inherits3.default)(RequestIndex, _React$Component);

    function RequestIndex() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RequestIndex);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestIndex.__proto__ || (0, _getPrototypeOf2.default)(RequestIndex)).call.apply(_ref, [this].concat(args))), _this), _this.renderRow = function () {
            var _this$props = _this.props,
                requests = _this$props.requests,
                campaignAddress = _this$props.campaignAddress,
                approversCount = _this$props.approversCount;

            return requests.map(function (request, index) {
                return _react2.default.createElement(_RequestRow2.default, {
                    key: index,
                    id: index,
                    request: request,
                    address: campaignAddress,
                    approversCount: approversCount,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 38
                    }
                });
            });
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(RequestIndex, [{
        key: 'render',
        value: function render() {
            var Header = _semanticUiReact.Table.Header,
                Row = _semanticUiReact.Table.Row,
                HeaderCell = _semanticUiReact.Table.HeaderCell,
                Body = _semanticUiReact.Table.Body;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, 'Requests'), _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.campaignAddress + '/requests/new', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, _react2.default.createElement(_semanticUiReact.Button, {
                primary: true,
                floated: 'right',
                style: { marginBottom: '10px' },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, 'Add Request'))), _react2.default.createElement(_semanticUiReact.Table, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, _react2.default.createElement(Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, _react2.default.createElement(Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, 'ID'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, 'Description'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, 'Amount'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, 'Recipient'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }, 'Approval'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, 'Approve'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, 'Finalize'))), _react2.default.createElement(Body, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, this.renderRow())), _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }, 'Fround ', this.props.requestCount, ' requests'));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var campaignAddress, campaign, requestCount, approversCount, requests;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                campaignAddress = props.query.campaignAddress;
                                campaign = (0, _campaign2.default)(campaignAddress);
                                _context.next = 4;
                                return campaign.methods.getRequestCount().call();

                            case 4:
                                requestCount = _context.sent;
                                _context.next = 7;
                                return campaign.methods.approversCount().call();

                            case 7:
                                approversCount = _context.sent;
                                _context.next = 10;
                                return _promise2.default.all(Array(parseInt(requestCount)).fill().map(function (element, index) {
                                    return campaign.methods.requests(index).call();
                                }));

                            case 10:
                                requests = _context.sent;
                                return _context.abrupt('return', {
                                    campaignAddress: campaignAddress,
                                    requests: requests,
                                    requestCount: requestCount,
                                    approversCount: approversCount
                                });

                            case 12:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref2.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return RequestIndex;
}(_react2.default.Component);

exports.default = RequestIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkxheW91dCIsIlJlcXVlc3RSb3ciLCJCdXR0b24iLCJUYWJsZSIsIkxpbmsiLCJDYW1wYWlnbiIsIlJlcXVlc3RJbmRleCIsInJlbmRlclJvdyIsInByb3BzIiwicmVxdWVzdHMiLCJjYW1wYWlnbkFkZHJlc3MiLCJhcHByb3ZlcnNDb3VudCIsIm1hcCIsInJlcXVlc3QiLCJpbmRleCIsIkhlYWRlciIsIlJvdyIsIkhlYWRlckNlbGwiLCJCb2R5IiwibWFyZ2luQm90dG9tIiwicmVxdWVzdENvdW50IiwicXVlcnkiLCJjYW1wYWlnbiIsIm1ldGhvZHMiLCJnZXRSZXF1ZXN0Q291bnQiLCJjYWxsIiwiYWxsIiwiQXJyYXkiLCJwYXJzZUludCIsImZpbGwiLCJlbGVtZW50IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFnQjs7OztBQUN2QixBQUNJLEFBQ0E7O0FBRUosQUFBUyxBQUFZOztBQUNyQixBQUFPLEFBQWM7Ozs7Ozs7OztJQUVBLEE7Ozs7Ozs7Ozs7Ozs7OzROLEFBb0JqQixZQUFZLFlBQU07OEJBS1YsTUFMVSxBQUtMO2dCQUxLLEFBRVYsdUJBRlUsQUFFVjtnQkFGVSxBQUdWLDhCQUhVLEFBR1Y7Z0JBSFUsQUFJViw2QkFKVSxBQUlWLEFBRUo7OzRCQUFPLEFBQVMsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLE9BQVY7dUNBQ2hCLEFBQUM7eUJBQUQsQUFDUyxBQUNMO3dCQUZKLEFBRVEsQUFDSjs2QkFISixBQUdhLEFBQ1Q7NkJBSkosQUFJYSxBQUNUO29DQUxKLEFBS29COztrQ0FMcEI7b0NBRGdCLEFBQ2hCO0FBQUE7QUFDSSxpQkFESjtBQURKLEFBQU8sQUFTVixhQVRVO0E7Ozs7O2lDQVdGO2dCQUFBLEFBQ0csU0FESCxBQUNxQyx1QkFEckMsQUFDRztnQkFESCxBQUNXLE1BRFgsQUFDcUMsdUJBRHJDLEFBQ1c7Z0JBRFgsQUFDZ0IsYUFEaEIsQUFDcUMsdUJBRHJDLEFBQ2dCO2dCQURoQixBQUM0QixPQUQ1QixBQUNxQyx1QkFEckMsQUFDNEIsQUFDakM7O21DQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLDZCQUFBLEFBQUMsOEJBQUssdUJBQXFCLEtBQUEsQUFBSyxNQUExQixBQUFnQyxrQkFBdEM7OEJBQUE7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUM7eUJBQUQsQUFFSTt5QkFGSixBQUVZLEFBQ1I7dUJBQU8sRUFBRSxjQUhiLEFBR1csQUFBZ0I7OzhCQUgzQjtnQ0FBQTtBQUFBO0FBQ0ksZUFMaEIsQUFFSSxBQUNJLEFBQ0ksQUFPUixrQ0FBQSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFEOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsdUJBQUMsY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBRkosQUFFSSxBQUNBLGdDQUFDLGNBQUQ7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUhKLEFBR0ksQUFDQSwyQkFBQyxjQUFEOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFKSixBQUlJLEFBQ0EsOEJBQUMsY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBTEosQUFLSSxBQUNBLDZCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQU5KLEFBTUksQUFDQSw0QkFBQyxjQUFEOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFUWixBQUNJLEFBQ0ksQUFPSSxBQUdSLCtCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQ0s7QUFETDtBQUFBLG9CQXZCUixBQVdJLEFBWUksQUFDSyxBQUFLLEFBR2QsK0JBQUEsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBQWEsZ0JBQUEsQUFBSyxNQUFsQixBQUF3QixjQTVCaEMsQUFDSSxBQTJCSSxBQUdYOzs7OztrSEFyRTRCLEE7Ozs7O2lDQUNqQjtBLGtEQUFvQixNQUFNLEEsTSxBQUExQixBQUNGO0EsMkNBQVcsd0JBQUEsQUFBUyxBOzt1Q0FDQyxTQUFBLEFBQVMsUUFBVCxBQUFpQixrQkFBakIsQSxBQUFtQzs7aUNBQXhEO0E7O3VDQUN1QixTQUFBLEFBQVMsUUFBVCxBQUFpQixpQixBQUFqQixBQUFrQzs7aUNBQXpEO0E7O3lEQUVpQixBQUFRLFVBQ3JCLFNBQU4sQUFBTSxBQUFTLGVBQWYsQUFDQyxPQURELEFBRUMsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLE9BQVY7MkNBQW9CLFNBQUEsQUFBUyxRQUFULEFBQWlCLFNBQWpCLEFBQTBCLE9BQTlDLEFBQW9CLEFBQWlDO0FBSHZDLEFBQ25CLEEsaUNBQUEsQ0FEbUI7O2lDQUFqQjtBOztxREFLQyxBQUVIOzhDQUZHLEFBR0g7a0RBSEcsQUFJSDtvREFKRyxBO0FBQUEsQUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWI4QixnQkFBTSxBOztrQkFBM0IsQSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZmFyaXMvRGV2ZWxvcG1lbnQvZXRoZXJldW0vdWRlbXktZXRoZXJldW0tY2xhc3MvY2FtcGFpZ24ifQ==