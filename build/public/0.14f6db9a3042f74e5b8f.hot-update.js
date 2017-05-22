webpackHotUpdate(0,{

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(debug) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _classCallCheck2 = __webpack_require__(5);\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(6);\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _domready = __webpack_require__(193);\n\nvar _domready2 = _interopRequireDefault(_domready);\n\nvar _webfontloader = __webpack_require__(227);\n\nvar _webfontloader2 = _interopRequireDefault(_webfontloader);\n\n__webpack_require__(67);\n\nvar _Socket = __webpack_require__(128);\n\nvar _Socket2 = _interopRequireDefault(_Socket);\n\nvar _index = __webpack_require__(117);\n\nvar _index2 = _interopRequireDefault(_index);\n\nvar _index3 = __webpack_require__(124);\n\nvar _index4 = _interopRequireDefault(_index3);\n\nvar _index5 = __webpack_require__(46);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar DOM_READY_EVENT = 'dom-ready';\nvar FONTS_READY_EVENT = 'fonts-ready';\nvar dbg = debug('app:App');\n\nvar App = function () {\n  function App() {\n    (0, _classCallCheck3.default)(this, App);\n\n    dbg('Init App');\n    this.events = [];\n    this.waitDomReady();\n    this.waitFontsReady();\n  }\n\n  (0, _createClass3.default)(App, [{\n    key: 'start',\n    value: function start() {\n      dbg('start');\n      /* eslint no-new:0 */\n      if ((0, _index5.isMobile)()) {\n        (0, _index5.selectClass)('screen').style.display = 'none';\n        new _index4.default();\n      } else {\n        (0, _index5.selectClass)('tablet').style.display = 'none';\n        new _index2.default();\n      }\n    }\n  }, {\n    key: 'waitDomReady',\n    value: function waitDomReady() {\n      var _this = this;\n\n      dbg('wait for DOM ready');\n      this.events.push(DOM_READY_EVENT);\n      (0, _domready2.default)(function () {\n        dbg('DOM ready');\n        _this.onLoadEventSuccess(DOM_READY_EVENT);\n      });\n    }\n  }, {\n    key: 'waitFontsReady',\n    value: function waitFontsReady() {\n      var _this2 = this;\n\n      dbg('wait for fonts ready');\n      this.events.push(FONTS_READY_EVENT);\n      _webfontloader2.default.load({\n        custom: {\n          families: ['Blogger Sans:400'],\n          urls: ['/static/font.css']\n        },\n        classes: false,\n        active: function active() {\n          dbg('fonts ready');\n          _this2.onLoadEventSuccess(FONTS_READY_EVENT);\n        }\n      });\n    }\n  }, {\n    key: 'onLoadEventSuccess',\n    value: function onLoadEventSuccess(key) {\n      this.events.splice(this.events.indexOf(key), 1);\n      if (this.events.length === 0) {\n        this.start();\n      }\n    }\n  }]);\n  return App;\n}();\n\nexports.default = App;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(191)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zY3JpcHRzL0FwcC5qcz9hNGU4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkb21SZWFkeSBmcm9tICdkb21yZWFkeSdcbmltcG9ydCBXZWJGb250IGZyb20gJ3dlYmZvbnRsb2FkZXInXG5pbXBvcnQgJ2dzYXAnXG5pbXBvcnQgJy4vdXRpbHMvU29ja2V0J1xuaW1wb3J0IFNjcmVlbiBmcm9tICcuL1NjcmVlbi9pbmRleCdcbmltcG9ydCBHcmFwaGljcyBmcm9tICcuL2dyYXBoaWNzL2luZGV4J1xuaW1wb3J0IFNvY2tldCBmcm9tICcuL3V0aWxzL1NvY2tldCdcbmltcG9ydCB7XG4gIGlzTW9iaWxlLFxuICBzZWxlY3RDbGFzc1xufSBmcm9tICcuL3V0aWxzL2luZGV4J1xuXG5jb25zdCBET01fUkVBRFlfRVZFTlQgPSAnZG9tLXJlYWR5J1xuY29uc3QgRk9OVFNfUkVBRFlfRVZFTlQgPSAnZm9udHMtcmVhZHknXG5jb25zdCBkYmcgPSBkZWJ1ZygnYXBwOkFwcCcpXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBkYmcoJ0luaXQgQXBwJylcbiAgICB0aGlzLmV2ZW50cyA9IFtdXG4gICAgdGhpcy53YWl0RG9tUmVhZHkoKVxuICAgIHRoaXMud2FpdEZvbnRzUmVhZHkoKVxuICB9XG5cbiAgc3RhcnQgKCkge1xuICAgIGRiZygnc3RhcnQnKVxuICAgIC8qIGVzbGludCBuby1uZXc6MCAqL1xuICAgIGlmIChpc01vYmlsZSgpKSB7XG4gICAgICBzZWxlY3RDbGFzcygnc2NyZWVuJykuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgbmV3IEdyYXBoaWNzKClcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZWN0Q2xhc3MoJ3RhYmxldCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgIG5ldyBTY3JlZW4oKVxuICAgIH1cbiAgfVxuXG4gIHdhaXREb21SZWFkeSAoKSB7XG4gICAgZGJnKCd3YWl0IGZvciBET00gcmVhZHknKVxuICAgIHRoaXMuZXZlbnRzLnB1c2goRE9NX1JFQURZX0VWRU5UKVxuICAgIGRvbVJlYWR5KCgpID0+IHtcbiAgICAgIGRiZygnRE9NIHJlYWR5JylcbiAgICAgIHRoaXMub25Mb2FkRXZlbnRTdWNjZXNzKERPTV9SRUFEWV9FVkVOVClcbiAgICB9KVxuICB9XG5cbiAgd2FpdEZvbnRzUmVhZHkgKCkge1xuICAgIGRiZygnd2FpdCBmb3IgZm9udHMgcmVhZHknKVxuICAgIHRoaXMuZXZlbnRzLnB1c2goRk9OVFNfUkVBRFlfRVZFTlQpXG4gICAgV2ViRm9udC5sb2FkKHtcbiAgICAgIGN1c3RvbToge1xuICAgICAgICBmYW1pbGllczogWydCbG9nZ2VyIFNhbnM6NDAwJ10sXG4gICAgICAgIHVybHM6IFsnL3N0YXRpYy9mb250LmNzcyddXG4gICAgICB9LFxuICAgICAgY2xhc3NlczogZmFsc2UsXG4gICAgICBhY3RpdmU6ICgpID0+IHtcbiAgICAgICAgZGJnKCdmb250cyByZWFkeScpXG4gICAgICAgIHRoaXMub25Mb2FkRXZlbnRTdWNjZXNzKEZPTlRTX1JFQURZX0VWRU5UKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBvbkxvYWRFdmVudFN1Y2Nlc3MgKGtleSkge1xuICAgIHRoaXMuZXZlbnRzLnNwbGljZSh0aGlzLmV2ZW50cy5pbmRleE9mKGtleSksIDEpXG4gICAgaWYgKHRoaXMuZXZlbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5zdGFydCgpXG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY2xpZW50L3NjcmlwdHMvQXBwLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFXQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQWxEQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})