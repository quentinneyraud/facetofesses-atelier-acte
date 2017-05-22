webpackHotUpdate(0,{

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _classCallCheck2 = __webpack_require__(5);\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(6);\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _Blob = __webpack_require__(122);\n\nvar _Blob2 = _interopRequireDefault(_Blob);\n\nvar _Selector = __webpack_require__(123);\n\nvar _Selector2 = _interopRequireDefault(_Selector);\n\nvar _TextSelection = __webpack_require__(125);\n\nvar _TextSelection2 = _interopRequireDefault(_TextSelection);\n\nvar _TextPiece = __webpack_require__(124);\n\nvar _TextPiece2 = _interopRequireDefault(_TextPiece);\n\nvar _SocketClient = __webpack_require__(46);\n\nvar _SocketClient2 = _interopRequireDefault(_SocketClient);\n\nvar _SoundHelper = __webpack_require__(47);\n\nvar _SoundHelper2 = _interopRequireDefault(_SoundHelper);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar STATE_INACTIVE = 'STATE_INACTIVE';\nvar STATE_SHOW = 'STATE_SHOW';\nvar STATE_ACTIVE = 'STATE_ACTIVE';\n\nvar startRotation = null;\nvar lastRotation = null;\n\nvar Piece = function () {\n  /**\n   * Represents one piece\n   * @param config\n   */\n  function Piece(config) {\n    (0, _classCallCheck3.default)(this, Piece);\n\n    this.config = config;\n\n    this.state = STATE_INACTIVE;\n    this.x = 0;\n    this.y = 0;\n    this.rotation = 0;\n    this.activePositionIndex = 0;\n    this.onBasket = false;\n\n    this.createElements();\n  }\n\n  (0, _createClass3.default)(Piece, [{\n    key: 'setActivePositionIndex',\n    value: function setActivePositionIndex() {\n      var newIndex = Math.floor(this.rotation * this.config.positions.length / 360);\n\n      if (newIndex < 0 || newIndex > this.config.positions.length - 1) {\n        newIndex = 0;\n      }\n\n      if (newIndex !== this.activePositionIndex) {\n        this.textSelection.updateActive(newIndex);\n        this.selector.updateActive(newIndex);\n        this.activePositionIndex = newIndex;\n\n        this.sendSocketDatas();\n      }\n    }\n  }, {\n    key: 'sendSocketDatas',\n    value: function sendSocketDatas() {\n      _SocketClient2.default.send('data', {\n        key: this.config.id,\n        value: this.activePositionIndex\n      });\n    }\n  }, {\n    key: 'createElements',\n    value: function createElements() {\n      this.blob = new _Blob2.default(this.x, this.y, {\n        color: this.config.color\n      });\n      this.selector = new _Selector2.default(this.x, this.y, {\n        color: this.config.color,\n        positions: this.config.positions\n      });\n\n      this.textSelection = new _TextSelection2.default(this.x, this.y, {\n        positions: this.config.positions\n      });\n\n      this.textPiece = new _TextPiece2.default(this.x, this.y, {\n        name: this.config.name\n      });\n\n      this.elements = [this.blob, this.selector, this.textSelection, this.textPiece];\n    }\n  }, {\n    key: 'setRotation',\n    value: function setRotation(type, rotation) {\n      switch (type) {\n        case 'rotatestart':\n          lastRotation = this.rotation;\n          startRotation = rotation;\n          break;\n        case 'rotateend':\n          lastRotation = this.rotation;\n          break;\n        case 'rotate':\n          var diff = startRotation - rotation;\n          this.rotation = lastRotation - diff;\n          this.setActivePositionIndex();\n          break;\n      }\n    }\n  }, {\n    key: 'onDetect',\n    value: function onDetect(x, y) {\n      var _this = this;\n\n      if (this.state === STATE_SHOW) {\n        TweenMax.to(this, 0.6, {\n          x: x,\n          y: y\n        });\n      } else {\n        _SoundHelper2.default.play('test');\n        this.sendSocketDatas();\n        this.x = x;\n        this.y = y;\n\n        this.blob.show(function () {\n          _this.blob.idle();\n          _this.textSelection.show(_this.activePositionIndex);\n          _this.textPiece.show();\n          _this.selector.show(_this.activePositionIndex);\n        });\n      }\n\n      this.state = STATE_ACTIVE;\n    }\n  }, {\n    key: 'onRelease',\n    value: function onRelease() {\n      console.log('RELEASE', this.onBasket);\n      if (this.onBasket) {\n        this.onThrow();\n      } else {\n        this.state = STATE_SHOW;\n      }\n    }\n  }, {\n    key: 'onThrow',\n    value: function onThrow() {\n      var _this2 = this;\n\n      this.selector.hide();\n      this.textSelection.hide();\n      this.textPiece.hide();\n      this.blob.hide(function () {\n        _this2.state = STATE_INACTIVE;\n      });\n    }\n  }, {\n    key: 'isActive',\n    value: function isActive() {\n      return this.state === STATE_ACTIVE;\n    }\n  }, {\n    key: 'update',\n    value: function update() {\n      var _this3 = this;\n\n      this.elements.forEach(function (element) {\n        element.update({\n          x: _this3.x,\n          y: _this3.y\n        });\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      if (this.isActive()) {\n        this.elements.forEach(function (element) {\n          element.render();\n        });\n      }\n    }\n  }]);\n  return Piece;\n}();\n\nexports.default = Piece;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTI4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zY3JpcHRzL3BpZWNlcy9QaWVjZS5qcz8zYWYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCbG9iIGZyb20gJy4uL2VsZW1lbnRzL0Jsb2InXG5pbXBvcnQgU2VsZWN0b3IgZnJvbSAnLi4vZWxlbWVudHMvU2VsZWN0b3InXG5pbXBvcnQgVGV4dFNlbGVjdGlvbiBmcm9tICcuLi9lbGVtZW50cy9UZXh0U2VsZWN0aW9uJ1xuaW1wb3J0IFRleHRQaWVjZSBmcm9tICcuLi9lbGVtZW50cy9UZXh0UGllY2UnXG5pbXBvcnQgU29ja2V0Q2xpZW50IGZyb20gJy4uL3V0aWxzL1NvY2tldENsaWVudCdcbmltcG9ydCBTb3VuZEhlbHBlciBmcm9tICcuLi91dGlscy9Tb3VuZEhlbHBlcidcblxuY29uc3QgU1RBVEVfSU5BQ1RJVkUgPSAnU1RBVEVfSU5BQ1RJVkUnXG5jb25zdCBTVEFURV9TSE9XID0gJ1NUQVRFX1NIT1cnXG5jb25zdCBTVEFURV9BQ1RJVkUgPSAnU1RBVEVfQUNUSVZFJ1xuXG5sZXQgc3RhcnRSb3RhdGlvbiA9IG51bGxcbmxldCBsYXN0Um90YXRpb24gPSBudWxsXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpZWNlIHtcbiAgLyoqXG4gICAqIFJlcHJlc2VudHMgb25lIHBpZWNlXG4gICAqIEBwYXJhbSBjb25maWdcbiAgICovXG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZ1xuXG4gICAgdGhpcy5zdGF0ZSA9IFNUQVRFX0lOQUNUSVZFXG4gICAgdGhpcy54ID0gMFxuICAgIHRoaXMueSA9IDBcbiAgICB0aGlzLnJvdGF0aW9uID0gMFxuICAgIHRoaXMuYWN0aXZlUG9zaXRpb25JbmRleCA9IDBcbiAgICB0aGlzLm9uQmFza2V0ID0gZmFsc2VcblxuICAgIHRoaXMuY3JlYXRlRWxlbWVudHMoKVxuICB9XG5cbiAgc2V0QWN0aXZlUG9zaXRpb25JbmRleCAoKSB7XG4gICAgbGV0IG5ld0luZGV4ID0gTWF0aC5mbG9vcih0aGlzLnJvdGF0aW9uICogdGhpcy5jb25maWcucG9zaXRpb25zLmxlbmd0aCAvIDM2MClcblxuICAgIGlmIChuZXdJbmRleCA8IDAgfHwgbmV3SW5kZXggPiB0aGlzLmNvbmZpZy5wb3NpdGlvbnMubGVuZ3RoIC0gMSkge1xuICAgICAgbmV3SW5kZXggPSAwXG4gICAgfVxuXG4gICAgaWYgKG5ld0luZGV4ICE9PSB0aGlzLmFjdGl2ZVBvc2l0aW9uSW5kZXgpIHtcbiAgICAgIHRoaXMudGV4dFNlbGVjdGlvbi51cGRhdGVBY3RpdmUobmV3SW5kZXgpXG4gICAgICB0aGlzLnNlbGVjdG9yLnVwZGF0ZUFjdGl2ZShuZXdJbmRleClcbiAgICAgIHRoaXMuYWN0aXZlUG9zaXRpb25JbmRleCA9IG5ld0luZGV4XG5cbiAgICAgIHRoaXMuc2VuZFNvY2tldERhdGFzKClcbiAgICB9XG4gIH1cblxuICBzZW5kU29ja2V0RGF0YXMgKCkge1xuICAgIFNvY2tldENsaWVudC5zZW5kKCdkYXRhJywge1xuICAgICAga2V5OiB0aGlzLmNvbmZpZy5pZCxcbiAgICAgIHZhbHVlOiB0aGlzLmFjdGl2ZVBvc2l0aW9uSW5kZXhcbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlRWxlbWVudHMgKCkge1xuICAgIHRoaXMuYmxvYiA9IG5ldyBCbG9iKHRoaXMueCwgdGhpcy55LCB7XG4gICAgICBjb2xvcjogdGhpcy5jb25maWcuY29sb3JcbiAgICB9KVxuICAgIHRoaXMuc2VsZWN0b3IgPSBuZXcgU2VsZWN0b3IodGhpcy54LCB0aGlzLnksIHtcbiAgICAgIGNvbG9yOiB0aGlzLmNvbmZpZy5jb2xvcixcbiAgICAgIHBvc2l0aW9uczogdGhpcy5jb25maWcucG9zaXRpb25zXG4gICAgfSlcblxuICAgIHRoaXMudGV4dFNlbGVjdGlvbiA9IG5ldyBUZXh0U2VsZWN0aW9uKHRoaXMueCwgdGhpcy55LCB7XG4gICAgICBwb3NpdGlvbnM6IHRoaXMuY29uZmlnLnBvc2l0aW9uc1xuICAgIH0pXG5cbiAgICB0aGlzLnRleHRQaWVjZSA9IG5ldyBUZXh0UGllY2UodGhpcy54LCB0aGlzLnksIHtcbiAgICAgIG5hbWU6IHRoaXMuY29uZmlnLm5hbWVcbiAgICB9KVxuXG4gICAgdGhpcy5lbGVtZW50cyA9IFt0aGlzLmJsb2IsIHRoaXMuc2VsZWN0b3IsIHRoaXMudGV4dFNlbGVjdGlvbiwgdGhpcy50ZXh0UGllY2VdXG4gIH1cblxuICBzZXRSb3RhdGlvbiAodHlwZSwgcm90YXRpb24pIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ3JvdGF0ZXN0YXJ0JzpcbiAgICAgICAgbGFzdFJvdGF0aW9uID0gdGhpcy5yb3RhdGlvblxuICAgICAgICBzdGFydFJvdGF0aW9uID0gcm90YXRpb25cbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ3JvdGF0ZWVuZCc6XG4gICAgICAgIGxhc3RSb3RhdGlvbiA9IHRoaXMucm90YXRpb25cbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ3JvdGF0ZSc6XG4gICAgICAgIGxldCBkaWZmID0gc3RhcnRSb3RhdGlvbiAtIHJvdGF0aW9uXG4gICAgICAgIHRoaXMucm90YXRpb24gPSBsYXN0Um90YXRpb24gLSBkaWZmXG4gICAgICAgIHRoaXMuc2V0QWN0aXZlUG9zaXRpb25JbmRleCgpXG4gICAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgb25EZXRlY3QgKHgsIHkpIHtcbiAgICBpZiAodGhpcy5zdGF0ZSA9PT0gU1RBVEVfU0hPVykge1xuICAgICAgVHdlZW5NYXgudG8odGhpcywgMC42LCB7XG4gICAgICAgIHgsXG4gICAgICAgIHlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIFNvdW5kSGVscGVyLnBsYXkoJ3Rlc3QnKVxuICAgICAgdGhpcy5zZW5kU29ja2V0RGF0YXMoKVxuICAgICAgdGhpcy54ID0geFxuICAgICAgdGhpcy55ID0geVxuXG4gICAgICB0aGlzLmJsb2Iuc2hvdygoKSA9PiB7XG4gICAgICAgIHRoaXMuYmxvYi5pZGxlKClcbiAgICAgICAgdGhpcy50ZXh0U2VsZWN0aW9uLnNob3codGhpcy5hY3RpdmVQb3NpdGlvbkluZGV4KVxuICAgICAgICB0aGlzLnRleHRQaWVjZS5zaG93KClcbiAgICAgICAgdGhpcy5zZWxlY3Rvci5zaG93KHRoaXMuYWN0aXZlUG9zaXRpb25JbmRleClcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZSA9IFNUQVRFX0FDVElWRVxuICB9XG5cbiAgb25SZWxlYXNlICgpIHtcbiAgICBjb25zb2xlLmxvZygnUkVMRUFTRScsIHRoaXMub25CYXNrZXQpXG4gICAgaWYgKHRoaXMub25CYXNrZXQpIHtcbiAgICAgIHRoaXMub25UaHJvdygpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RhdGUgPSBTVEFURV9TSE9XXG4gICAgfVxuICB9XG5cbiAgb25UaHJvdyAoKSB7XG4gICAgdGhpcy5zZWxlY3Rvci5oaWRlKClcbiAgICB0aGlzLnRleHRTZWxlY3Rpb24uaGlkZSgpXG4gICAgdGhpcy50ZXh0UGllY2UuaGlkZSgpXG4gICAgdGhpcy5ibG9iLmhpZGUoKCkgPT4ge1xuICAgICAgdGhpcy5zdGF0ZSA9IFNUQVRFX0lOQUNUSVZFXG4gICAgfSlcbiAgfVxuXG4gIGlzQWN0aXZlICgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZSA9PT0gU1RBVEVfQUNUSVZFXG4gIH1cblxuICB1cGRhdGUgKCkge1xuICAgIHRoaXMuZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgZWxlbWVudC51cGRhdGUoe1xuICAgICAgICB4OiB0aGlzLngsXG4gICAgICAgIHk6IHRoaXMueVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBpZiAodGhpcy5pc0FjdGl2ZSgpKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgZWxlbWVudC5yZW5kZXIoKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjbGllbnQvc2NyaXB0cy9waWVjZXMvUGllY2UuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBY0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQTFJQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})