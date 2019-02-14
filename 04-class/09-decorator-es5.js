"use strict";

var _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Aniaml =
/*#__PURE__*/
function () {
  function Aniaml(name) {
    _classCallCheck(this, Aniaml);

    this.name = name;
  }

  _createClass(Aniaml, [{
    key: "drink",
    value: function drink() {
      console.log("drink");
    }
  }]);

  return Aniaml;
}();

function log(target) {
  // target 是 class
  console.log(target);
  target.word = "hello world";

  target.say = function () {
    console.log(this.word);
  };
}

var Cat = log(_class =
/*#__PURE__*/
function (_Aniaml) {
  _inherits(Cat, _Aniaml);

  function Cat(name, age) {
    var _this;

    _classCallCheck(this, Cat);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Cat).call(this, name));
    _this.age = age;
    return _this;
  }

  return Cat;
}(Aniaml)) || _class;

var c = new Cat("1", 12);
console.log(Cat);
console.log(Cat.word);
