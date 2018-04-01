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

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/faris/Development/ethereum/udemy-ethereum-class/campaign/components/RequestRow.js';


var RequestRow = function (_React$Component) {
    (0, _inherits3.default)(RequestRow, _React$Component);

    function RequestRow() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RequestRow);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            approveLoading: false,
            finalizeLoading: false
        }, _this.handleApprove = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var _this$props, id, address, campaign, accounts;

            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _this$props = _this.props, id = _this$props.id, address = _this$props.address;

                            _this.setState({ approveLoading: true });
                            campaign = (0, _campaign2.default)(address);
                            _context.next = 5;
                            return _web2.default.eth.getAccounts();

                        case 5:
                            accounts = _context.sent;
                            _context.next = 8;
                            return campaign.methods.approveRequest(id).send({
                                from: accounts[0]
                            });

                        case 8:
                            _this.setState({ approveLoading: false });
                            Router.replaceRoute('/campaigns/' + address + '/requests');

                        case 10:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        })), _this.handleFinalize = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            var _this$props2, id, address, campaign, accounts;

            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _this$props2 = _this.props, id = _this$props2.id, address = _this$props2.address;

                            _this.setState({ finalizeLoading: true });
                            campaign = (0, _campaign2.default)(address);
                            _context2.next = 5;
                            return _web2.default.eth.getAccounts();

                        case 5:
                            accounts = _context2.sent;
                            _context2.next = 8;
                            return campaign.methods.finalizeRequest(id).send({
                                from: accounts[0]
                            });

                        case 8:
                            _this.setState({ finalizeLoading: false });
                            Router.replaceRoute('/campaigns/' + address + '/requests');

                        case 10:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, _this2);
        })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(RequestRow, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                id = _props.id,
                _props$request = _props.request,
                description = _props$request.description,
                value = _props$request.value,
                recipient = _props$request.recipient,
                complete = _props$request.complete,
                approvalCount = _props$request.approvalCount,
                address = _props.address,
                approversCount = _props.approversCount;
            var Row = _semanticUiReact.Table.Row,
                Cell = _semanticUiReact.Table.Cell;

            var readyToFinalize = approvalCount > approversCount / 2 && !complete;
            return _react2.default.createElement(Row, { disabled: complete, positive: readyToFinalize, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, id), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, description), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, _web2.default.utils.fromWei(value, 'ether')), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, recipient), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, approvalCount, '/', approversCount), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, !complete && _react2.default.createElement(_semanticUiReact.Button, {
                color: 'green',
                basic: true,
                onClick: this.handleApprove,
                loading: this.state.approveLoading,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, 'Approve')), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }, !complete && _react2.default.createElement(_semanticUiReact.Button, {
                color: 'teal',
                basic: true,
                onClick: this.handleFinalize,
                loading: this.state.finalizeLoading,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, 'Finlalize')));
        }
    }]);

    return RequestRow;
}(_react2.default.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVxdWVzdFJvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlRhYmxlIiwiQnV0dG9uIiwid2ViMyIsIkNhbXBhaWduIiwiUmVxdWVzdFJvdyIsInN0YXRlIiwiYXBwcm92ZUxvYWRpbmciLCJmaW5hbGl6ZUxvYWRpbmciLCJoYW5kbGVBcHByb3ZlIiwicHJvcHMiLCJpZCIsImFkZHJlc3MiLCJzZXRTdGF0ZSIsImNhbXBhaWduIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJhcHByb3ZlUmVxdWVzdCIsInNlbmQiLCJmcm9tIiwiUm91dGVyIiwicmVwbGFjZVJvdXRlIiwiaGFuZGxlRmluYWxpemUiLCJmaW5hbGl6ZVJlcXVlc3QiLCJyZXF1ZXN0IiwiZGVzY3JpcHRpb24iLCJ2YWx1ZSIsInJlY2lwaWVudCIsImNvbXBsZXRlIiwiYXBwcm92YWxDb3VudCIsImFwcHJvdmVyc0NvdW50IiwiUm93IiwiQ2VsbCIsInJlYWR5VG9GaW5hbGl6ZSIsInV0aWxzIiwiZnJvbVdlaSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUNJLEFBQ0E7O0FBRUosQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBYzs7Ozs7Ozs7O0ksQUFFQTs7Ozs7Ozs7Ozs7Ozs7O3dOQUNqQixBOzRCQUFRLEFBQ1ksQUFDaEI7NkJBRkksQSxBQUVhO0FBRmIsQUFDSixpQkFJSixBLHlGQUFnQixtQkFBQTtvREFBQTs7MEVBQUE7MEJBQUE7cURBQUE7NkJBQUE7MENBQ1ksTUFEWixBQUNpQixPQURqQixBQUNKLGlCQURJLEFBQ0osSUFESSxBQUNBLHNCQURBLEFBQ0EsQUFDWjs7a0NBQUEsQUFBSyxTQUFTLEVBQUUsZ0JBQWhCLEFBQWMsQUFBa0IsQUFDMUI7QUFITSx1Q0FHSyx3QkFITCxBQUdLLEFBQVM7NENBSGQ7bUNBSVcsY0FBQSxBQUFLLElBSmhCLEFBSVcsQUFBUzs7NkJBQTFCO0FBSk0sZ0RBQUE7NENBQUE7NENBS04sQUFBUyxRQUFULEFBQWlCLGVBQWpCLEFBQWdDLElBQWhDLEFBQW9DO3NDQUNoQyxTQU5FLEFBS04sQUFBeUMsQUFDckMsQUFBUztBQUQ0QixBQUMzQyw2QkFERTs7NkJBR047a0NBQUEsQUFBSyxTQUFTLEVBQUUsZ0JBQWhCLEFBQWMsQUFBa0IsQUFDaEM7bUNBQUEsQUFBTyw2QkFBUCxBQUFrQyxVQVR0Qjs7NkJBQUE7NkJBQUE7NENBQUE7O0FBQUE7d0JBQUE7QSxtQixBQVloQiwwRkFBaUIsb0JBQUE7cURBQUE7OzRFQUFBOzBCQUFBO3VEQUFBOzZCQUFBOzJDQUNXLE1BRFgsQUFDZ0IsT0FEaEIsQUFDTCxrQkFESyxBQUNMLElBREssQUFDRCx1QkFEQyxBQUNELEFBQ1o7O2tDQUFBLEFBQUssU0FBUyxFQUFFLGlCQUFoQixBQUFjLEFBQW1CLEFBQzNCO0FBSE8sdUNBR0ksd0JBSEosQUFHSSxBQUFTOzZDQUhiO21DQUlVLGNBQUEsQUFBSyxJQUpmLEFBSVUsQUFBUzs7NkJBQTFCO0FBSk8saURBQUE7NkNBQUE7NENBS1AsQUFBUyxRQUFULEFBQWlCLGdCQUFqQixBQUFpQyxJQUFqQyxBQUFxQztzQ0FDakMsU0FORyxBQUtQLEFBQTBDLEFBQ3RDLEFBQVM7QUFENkIsQUFDNUMsNkJBREU7OzZCQUdOO2tDQUFBLEFBQUssU0FBUyxFQUFFLGlCQUFoQixBQUFjLEFBQW1CLEFBQ2pDO21DQUFBLEFBQU8sNkJBQVAsQUFBa0MsVUFUckI7OzZCQUFBOzZCQUFBOzZDQUFBOztBQUFBO3lCQUFBO0E7Ozs7O2lDQVlSO3lCQVlELEtBWkMsQUFZSTtnQkFaSixBQUVELFlBRkMsQUFFRDt3Q0FGQyxBQUdEO2dCQUhDLEFBSUcsNkJBSkgsQUFJRztnQkFKSCxBQUtHLHVCQUxILEFBS0c7Z0JBTEgsQUFNRywyQkFOSCxBQU1HO2dCQU5ILEFBT0csMEJBUEgsQUFPRztnQkFQSCxBQVFHLCtCQVJILEFBUUc7Z0JBUkgsQUFVRCxpQkFWQyxBQVVEO2dCQVZDLEFBV0Qsd0JBWEMsQUFXRDtnQkFYQyxBQWFHLE1BYkgsQUFhaUIsdUJBYmpCLEFBYUc7Z0JBYkgsQUFhUSxPQWJSLEFBYWlCLHVCQWJqQixBQWFRLEFBQ2I7O2dCQUFNLGtCQUFtQixnQkFBZ0IsaUJBQWpCLEFBQWtDLEtBQU0sQ0FBaEUsQUFBaUUsQUFDakU7bUNBQ0ssY0FBRCxPQUFLLFVBQUwsQUFBZSxVQUFVLFVBQXpCLEFBQW1DOzhCQUFuQztnQ0FBQSxBQUNJO0FBREo7YUFBQSxrQkFDSyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSxlQURKLEFBQ0ksQUFDQSxxQkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSxlQUZKLEFBRUksQUFDQSw4QkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSw2QkFBTyxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLE9BSDlCLEFBR0ksQUFBTyxBQUEwQixBQUNqQywyQkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSxlQUpKLEFBSUksQUFDQSw0QkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSxlQUFBLGVBQXVCLEtBTDNCLEFBS0ksQUFDQSxpQ0FBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUVRO0FBRlI7QUFBQSxnQkFFUSxBQUFDLDRCQUNHLEFBQUM7dUJBQUQsQUFDVSxBQUNOO3VCQUZKLEFBR0k7eUJBQVMsS0FIYixBQUdrQixBQUNkO3lCQUFTLEtBQUEsQUFBSyxNQUpsQixBQUl3Qjs7OEJBSnhCO2dDQUFBO0FBQUE7QUFDSSxhQURKLEVBVGhCLEFBTUksQUFHWSxBQVFaLDZCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBRVE7QUFGUjtBQUFBLGdCQUVRLEFBQUMsNEJBQ0csQUFBQzt1QkFBRCxBQUNVLEFBQ047dUJBRkosQUFHSTt5QkFBUyxLQUhiLEFBR2tCLEFBQ2Q7eUJBQVMsS0FBQSxBQUFLLE1BSmxCLEFBSXdCOzs4QkFKeEI7Z0NBQUE7QUFBQTtBQUNJLGFBREosRUFyQnBCLEFBQ0ksQUFpQkksQUFHWSxBQVV2Qjs7Ozs7RUE1RW1DLGdCQUFNLEE7O2tCQUF6QixBIiwiZmlsZSI6IlJlcXVlc3RSb3cuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2ZhcmlzL0RldmVsb3BtZW50L2V0aGVyZXVtL3VkZW15LWV0aGVyZXVtLWNsYXNzL2NhbXBhaWduIn0=