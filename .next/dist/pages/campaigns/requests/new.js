'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

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

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/faris/Development/ethereum/udemy-ethereum-class/campaign/pages/campaigns/requests/new.js?entry';


var RequestIndex = function (_React$Component) {
    (0, _inherits3.default)(RequestIndex, _React$Component);

    function RequestIndex() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RequestIndex);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestIndex.__proto__ || (0, _getPrototypeOf2.default)(RequestIndex)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            value: '',
            description: '',
            recipient: '',
            errorMessage: '',
            loading: false
        }, _this.handleSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var _this$state, value, description, recipient, campaignAddress, campaign, accounts;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();
                                _this$state = _this.state, value = _this$state.value, description = _this$state.description, recipient = _this$state.recipient;
                                campaignAddress = _this.props.campaignAddress;

                                _this.setState({
                                    loading: true,
                                    errorMessage: ''
                                });
                                campaign = (0, _campaign2.default)(campaignAddress);
                                _context.prev = 5;
                                _context.next = 8;
                                return _web2.default.eth.getAccounts();

                            case 8:
                                accounts = _context.sent;
                                _context.next = 11;
                                return campaign.methods.createRequest(description, _web2.default.utils.toWei(value, 'ether'), recipient).send({
                                    from: accounts[0]
                                });

                            case 11:
                                _routes.Router.pushRoute('/campaigns/' + campaignAddress + '/requests');
                                _context.next = 17;
                                break;

                            case 14:
                                _context.prev = 14;
                                _context.t0 = _context['catch'](5);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 17:
                                _this.setState({
                                    value: '',
                                    loading: false
                                });

                            case 18:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[5, 14]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(RequestIndex, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.campaignAddress + '/requests', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, 'Back')), _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }, 'Create a Request'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.handleSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }, 'Description'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.description,
                onChange: function onChange(event) {
                    return _this3.setState({ description: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }, 'Value in Ether'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.value,
                onChange: function onChange(event) {
                    return _this3.setState({ value: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                }
            }, 'Recipients'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.recipient,
                onChange: function onChange(event) {
                    return _this3.setState({ recipient: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 87
                }
            })), _react2.default.createElement(_semanticUiReact.Message, {
                error: true,
                header: 'Oops!',
                content: this.state.errorMessage,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 92
                }
            }), _react2.default.createElement(_semanticUiReact.Button, {
                primary: true,
                loading: this.state.loading,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97
                }
            }, 'Create!')));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
                var campaignAddress;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                campaignAddress = props.query.campaignAddress;
                                return _context2.abrupt('return', { campaignAddress: campaignAddress });

                            case 2:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getInitialProps(_x2) {
                return _ref3.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return RequestIndex;
}(_react2.default.Component);

exports.default = RequestIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJGb3JtIiwiQnV0dG9uIiwiSW5wdXQiLCJNZXNzYWdlIiwiTGF5b3V0IiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiUm91dGVyIiwiTGluayIsIlJlcXVlc3RJbmRleCIsInN0YXRlIiwidmFsdWUiLCJkZXNjcmlwdGlvbiIsInJlY2lwaWVudCIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY2FtcGFpZ25BZGRyZXNzIiwicHJvcHMiLCJzZXRTdGF0ZSIsImNhbXBhaWduIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjcmVhdGVSZXF1ZXN0IiwidXRpbHMiLCJ0b1dlaSIsInNlbmQiLCJmcm9tIiwicHVzaFJvdXRlIiwibWVzc2FnZSIsInRhcmdldCIsInF1ZXJ5IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQ0ksQUFDQSxBQUNBLEFBQ0E7O0FBRUosQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFRLEFBQVk7Ozs7Ozs7SSxBQUVSOzs7Ozs7Ozs7Ozs7Ozs7NE5BQ2pCLEE7bUJBQVEsQUFDRyxBQUNQO3lCQUZJLEFBRVMsQUFDYjt1QkFISSxBQUdPLEFBQ1g7MEJBSkksQUFJVSxBQUNkO3FCLEFBTEksQUFLSztBQUxMLEFBQ0osaUIsQUFZSjtpR0FBZSxpQkFBQSxBQUFPLE9BQVA7MkZBQUE7OzhFQUFBOzhCQUFBO3lEQUFBO2lDQUNYO3NDQURXLEFBQ1gsQUFBTTs4Q0FLRixNQU5PLEFBTUYsT0FORSxBQUdQLG9CQUhPLEFBR1AsT0FITyxBQUlQLDBCQUpPLEFBSVAsYUFKTyxBQUtQLHdCQUxPLEFBS1AsQUFFSTtBQVBHLGtEQU9pQixNQVBqQixBQU9zQixNQVB0QixBQU9ILEFBRVI7O3NDQUFBLEFBQUs7NkNBQVMsQUFDRCxBQUNUO2tEQUZKLEFBQWMsQUFFSSxBQUVaO0FBSlEsQUFDVjtBQVZPLDJDQWFNLHdCQWJOLEFBYU0sQUFBUztnREFiZjtnREFBQTt1Q0FnQmdCLGNBQUEsQUFBSyxJQWhCckIsQUFnQmdCLEFBQVM7O2lDQUExQjtBQWhCQyxvREFBQTtnREFBQTtnREFpQkQsQUFBUyxRQUFULEFBQWlCLGNBQWpCLEFBQ0YsYUFDQSxjQUFBLEFBQUssTUFBTCxBQUFXLE1BQVgsQUFBaUIsT0FGZixBQUVGLEFBQXdCLFVBRnRCLEFBR0YsV0FIRSxBQUlKOzBDQUNRLFNBdEJILEFBaUJELEFBSUMsQUFDRyxBQUFTO0FBRFosQUFDSCxpQ0FMRTs7aUNBT047K0NBQUEsQUFBTywwQkFBUCxBQUErQixrQkF4QnhCO2dEQUFBO0FBQUE7O2lDQUFBO2dEQUFBO2dFQTBCUDs7c0NBQUEsQUFBSyxTQUFTLEVBQUUsY0FBYyxZQTFCdkIsQUEwQlAsQUFBYyxBQUFzQjs7aUNBRXhDO3NDQUFBLEFBQUs7MkNBQVMsQUFDSCxBQUNQOzZDQTlCTyxBQTRCWCxBQUFjLEFBRUQ7QUFGQyxBQUNWOztpQ0E3Qk87aUNBQUE7Z0RBQUE7O0FBQUE7eUNBQUE7QTs7Ozs7Ozs7OztpQ0FrQ047eUJBQ0w7O21DQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksQUFBQyw4QkFBSyx1QkFBcUIsS0FBQSxBQUFLLE1BQTFCLEFBQWdDLGtCQUF0Qzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBRlIsQUFDSSxBQUNJLEFBSUosMEJBQUEsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBTkosQUFNSSxBQUNBLHFDQUFBLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixjQUFjLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUFqRCxBQUF1RDs4QkFBdkQ7Z0NBQUEsQUFDSTtBQURKOytCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLGdDQUFBLEFBQUM7dUJBQ1UsS0FBQSxBQUFLLE1BRGhCLEFBQ3NCLEFBQ2xCOzBCQUFVLGtCQUFBLEFBQUMsT0FBRDsyQkFBVyxPQUFBLEFBQUssU0FBUyxFQUFFLGFBQWEsTUFBQSxBQUFNLE9BQTlDLEFBQVcsQUFBYyxBQUE0QjtBQUZuRTs7OEJBQUE7Z0NBSFIsQUFDSSxBQUVJLEFBS0o7QUFMSTtBQUNJLGlDQUlQLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLG1DQUFBLEFBQUM7dUJBQ1UsS0FBQSxBQUFLLE1BRGhCLEFBQ3NCLEFBQ2xCOzBCQUFVLGtCQUFBLEFBQUMsT0FBRDsyQkFBVyxPQUFBLEFBQUssU0FBUyxFQUFFLE9BQU8sTUFBQSxBQUFNLE9BQXhDLEFBQVcsQUFBYyxBQUFzQjtBQUY3RDs7OEJBQUE7Z0NBVlIsQUFRSSxBQUVJLEFBS0o7QUFMSTtBQUNJLGlDQUlQLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLCtCQUFBLEFBQUM7dUJBQ1UsS0FBQSxBQUFLLE1BRGhCLEFBQ3NCLEFBQ2xCOzBCQUFVLGtCQUFBLEFBQUMsT0FBRDsyQkFBVyxPQUFBLEFBQUssU0FBUyxFQUFFLFdBQVcsTUFBQSxBQUFNLE9BQTVDLEFBQVcsQUFBYyxBQUEwQjtBQUZqRTs7OEJBQUE7Z0NBakJSLEFBZUksQUFFSSxBQUtKO0FBTEk7QUFDSSxpQ0FJUixBQUFDO3VCQUFELEFBRUk7d0JBRkosQUFFVyxBQUNQO3lCQUFTLEtBQUEsQUFBSyxNQUhsQixBQUd3Qjs7OEJBSHhCO2dDQXRCSixBQXNCSSxBQUtBO0FBTEE7QUFDSSxnQ0FJSixBQUFDO3lCQUFELEFBRUk7eUJBQVMsS0FBQSxBQUFLLE1BRmxCLEFBRXdCOzs4QkFGeEI7Z0NBQUE7QUFBQTtBQUNJLGVBcENoQixBQUNJLEFBT0ksQUEyQkksQUFPZjs7Ozs7bUhBbEY0QixBOzs7OztpQ0FDakI7QSxrREFBb0IsTUFBTSxBLE1BQTFCLEE7a0VBQ0QsRUFBRSxpQkFBRixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBWDJCLGdCQUFNLEE7O2tCQUEzQixBIiwiZmlsZSI6Im5ldy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZmFyaXMvRGV2ZWxvcG1lbnQvZXRoZXJldW0vdWRlbXktZXRoZXJldW0tY2xhc3MvY2FtcGFpZ24ifQ==