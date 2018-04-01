webpackHotUpdate(5,{

/***/ 721:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(70);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _Layout = __webpack_require__(722);

var _Layout2 = _interopRequireDefault(_Layout);

var _RequestRow = __webpack_require__(993);

var _RequestRow2 = _interopRequireDefault(_RequestRow);

var _semanticUiReact = __webpack_require__(438);

var _routes = __webpack_require__(660);

var _campaign = __webpack_require__(719);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/faris/Development/ethereum/udemy-ethereum-class/campaign/pages/campaigns/requests/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/faris/Development/ethereum/udemy-ethereum-class/campaign/pages/campaigns/requests/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns/requests")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS44ZDc1MmU2NTU2OGEwMWExNGRiYy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzPzdkYzBlNjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IFJlcXVlc3RSb3cgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9SZXF1ZXN0Um93JztcbmltcG9ydCB7XG4gICAgQnV0dG9uLFxuICAgIFRhYmxlLFxufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vLi4vLi4vcm91dGVzJztcbmltcG9ydCBDYW1wYWlnbiBmcm9tICcuLi8uLi8uLi9ldGhlcmV1bS9jYW1wYWlnbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcXVlc3RJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcykge1xuICAgICAgICBjb25zdCB7IGNhbXBhaWduQWRkcmVzcyB9ID0gcHJvcHMucXVlcnk7XG4gICAgICAgIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24oY2FtcGFpZ25BZGRyZXNzKTtcbiAgICAgICAgY29uc3QgcmVxdWVzdENvdW50ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5nZXRSZXF1ZXN0Q291bnQoKS5jYWxsKCk7XG4gICAgICAgIGNvbnN0IGFwcHJvdmVyc0NvdW50ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5hcHByb3ZlcnNDb3VudCgpLmNhbGwoKTtcblxuICAgICAgICBjb25zdCByZXF1ZXN0cyA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgICAgICAgQXJyYXkocGFyc2VJbnQocmVxdWVzdENvdW50KSlcbiAgICAgICAgICAgIC5maWxsKClcbiAgICAgICAgICAgIC5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiBjYW1wYWlnbi5tZXRob2RzLnJlcXVlc3RzKGluZGV4KS5jYWxsKCkpXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjYW1wYWlnbkFkZHJlc3MsXG4gICAgICAgICAgICByZXF1ZXN0cyxcbiAgICAgICAgICAgIHJlcXVlc3RDb3VudCxcbiAgICAgICAgICAgIGFwcHJvdmVyc0NvdW50LFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJlbmRlclJvdyA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgcmVxdWVzdHMsXG4gICAgICAgICAgICBjYW1wYWlnbkFkZHJlc3MsXG4gICAgICAgICAgICBhcHByb3ZlcnNDb3VudCxcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiByZXF1ZXN0cy5tYXAoKHJlcXVlc3QsIGluZGV4KSA9PlxuICAgICAgICAgICAgPFJlcXVlc3RSb3dcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgIGlkPXtpbmRleH1cbiAgICAgICAgICAgICAgICByZXF1ZXN0PXtyZXF1ZXN0fVxuICAgICAgICAgICAgICAgIGFkZHJlc3M9e2NhbXBhaWduQWRkcmVzc31cbiAgICAgICAgICAgICAgICBhcHByb3ZlcnNDb3VudD17YXBwcm92ZXJzQ291bnR9XG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBIZWFkZXIsIFJvdywgSGVhZGVyQ2VsbCwgQm9keSB9ID0gVGFibGU7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgIDxoMz5SZXF1ZXN0czwvaDM+XG4gICAgICAgICAgICAgICAgPExpbmsgcm91dGU9e2AvY2FtcGFpZ25zLyR7dGhpcy5wcm9wcy5jYW1wYWlnbkFkZHJlc3N9L3JlcXVlc3RzL25ld2B9PlxuICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXRlZD1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcxMHB4JyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPkFkZCBSZXF1ZXN0PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPFRhYmxlPlxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD5JRDwvSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD5EZXNjcmlwdGlvbjwvSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD5BbW91bnQ8L0hlYWRlckNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+UmVjaXBpZW50PC9IZWFkZXJDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJDZWxsPkFwcHJvdmFsPC9IZWFkZXJDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJDZWxsPkFwcHJvdmU8L0hlYWRlckNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+RmluYWxpemU8L0hlYWRlckNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgPC9IZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxCb2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyUm93KCl9XG4gICAgICAgICAgICAgICAgICAgIDwvQm9keT5cbiAgICAgICAgICAgICAgICA8L1RhYmxlPlxuICAgICAgICAgICAgICAgIDxkaXY+RnJvdW5kIHt0aGlzLnByb3BzLnJlcXVlc3RDb3VudH0gcmVxdWVzdHM8L2Rpdj5cbiAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkE7QUFLQTtBQUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBTEE7QUFBQTtBQUFBO0FBQ0E7QUFPQTs7Ozs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQ0E7QUFBQTs7QUFIQTtBQUFBO0FBQUE7QUFDQTs7QUFNQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFHQTtBQUNBO0FBREE7QUFBQTs7QUFJQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQWpFQTtBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7OztBQUVBO0FBR0E7QUFGQTtBQUNBO0FBRkE7OztBQU9BO0FBQ0E7QUFDQTs7QUFIQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFkQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9