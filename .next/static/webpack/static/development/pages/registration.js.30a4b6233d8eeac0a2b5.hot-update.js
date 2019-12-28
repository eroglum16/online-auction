webpackHotUpdate("static/development/pages/registration.js",{

/***/ "./pages/registration.js":
/*!*******************************!*\
  !*** ./pages/registration.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var _node_modules_bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../node_modules/bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var _node_modules_bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_node_modules_bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);







var _jsxFileName = "/Users/mert/Desktop/I\u0307TU\u0308/Fall 2019/Bitirme/Project/pages/registration.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;








var bcrypt = __webpack_require__(/*! bcryptjs */ "./node_modules/bcryptjs/dist/bcrypt.js");

var salt = bcrypt.genSaltSync(10);

var validator = __webpack_require__(/*! ../utils/validations */ "./utils/validations.js");

var Registration =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Registration, _React$Component);

  function Registration(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Registration);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Registration).call(this, props));
    _this.state = {
      nameSurname: '',
      email: '',
      password: '',
      passwordConfirm: '',
      styles: {
        email: {},
        passwordConfirm: {}
      },
      alertMessage: ''
    };
    _this.handleRegistration = _this.handleRegistration.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleInputChange = _this.handleInputChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Registration, [{
    key: "handleInputChange",
    value: function handleInputChange(event) {
      var target = event.target;
      var value = target.value;
      var name = target.name;
      this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, value));
      var styles = this.state.styles;
      var email = this.state.email;

      if (email.length !== 0 && !validator.isEmail(email)) {
        styles.email = {
          border: 'none',
          borderBottom: '2px solid #e33'
        };
      } else {
        styles.email = {};
      }

      this.setState({
        styles: styles
      });
    }
  }, {
    key: "handleRegistration",
    value: function handleRegistration() {
      var apiConfig = __webpack_require__(/*! ../api-config */ "./api-config.js");

      var url = apiConfig.serverUrl + '/user/save';

      if (this.state.password !== this.state.passwordConfirm) {
        document.getElementById('password-confirm').style.border = '1px solid red';
        return;
      }

      var pass = bcrypt.hashSync(this.state.password, salt);
      axios__WEBPACK_IMPORTED_MODULE_12___default.a.post(url, {
        nameSurname: this.state.nameSurname,
        email: this.state.email,
        password: pass
      }).then(function (response) {
        next_router__WEBPACK_IMPORTED_MODULE_13___default.a.push('/login?registered=true');
      })["catch"](function (error) {
        this.setState({
          alertMessage: error.response.data.message
        });
      }.bind(this));
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_8__["default"], {
        page: "registration",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, __jsx("div", {
        className: "container bg-white",
        style: {
          padding: '3%',
          marginTop: '3%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, __jsx("div", {
        className: "row justify-content-md-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, __jsx("div", {
        className: "col-md-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, this.state.alertMessage.length > 0 ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Alert"], {
        color: "danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, this.state.alertMessage) : '', __jsx("h2", {
        className: "text-light bg-dark text-center rounded p-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, " Kay\u0131t Olun "), __jsx("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Form"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Input"], {
        bsSize: "lg",
        type: "text",
        name: "nameSurname",
        value: this.state.nameSurname,
        onChange: this.handleInputChange,
        id: "nameSurname",
        placeholder: "Ad\u0131n\u0131z\u0131 ve soyad\u0131n\u0131z\u0131 girin ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Input"], {
        bsSize: "lg",
        style: this.state.styles.email,
        type: "email",
        name: "email",
        value: this.state.email,
        onChange: this.handleInputChange,
        id: "email",
        placeholder: "Email adresinizi girin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Input"], {
        bsSize: "lg",
        type: "password",
        name: "password",
        value: this.state.password,
        onChange: this.handleInputChange,
        id: "password",
        placeholder: "Parola belirleyin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Input"], {
        bsSize: "lg",
        type: "password",
        name: "passwordConfirm",
        value: this.state.passwordConfirm,
        onChange: this.handleInputChange,
        id: "password-confirm",
        placeholder: "Parolan\u0131z\u0131 teyit edin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        color: "secondary",
        size: "lg",
        onClick: this.handleRegistration,
        block: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, "Kayd\u0131 Tamamla")), __jsx("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, "Zaten \xFCye misiniz?", __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: '/login',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, __jsx("a", {
        className: "text-dark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, " Giri\u015F yap\u0131n")))))));
    }
  }]);

  return Registration;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Registration);

/***/ })

})
//# sourceMappingURL=registration.js.30a4b6233d8eeac0a2b5.hot-update.js.map