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
/* harmony import */ var _components_ValidationError__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/ValidationError */ "./components/ValidationError.js");







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
      validationErrors: {},
      alertMessage: ''
    };
    _this.handleRegistration = _this.handleRegistration.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleInputChange = _this.handleInputChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Registration, [{
    key: "handleInputChange",
    value: function handleInputChange(event) {
      var _this$setState;

      var target = event.target;
      var value = target.value;
      var name = target.name;
      var errors = this.state.validationErrors;
      errors[name] = '';
      this.setState((_this$setState = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$setState, name, value), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$setState, "validationErrors", errors), _this$setState));
    }
  }, {
    key: "handleRegistration",
    value: function handleRegistration() {
      var _this2 = this;

      var apiConfig = __webpack_require__(/*! ../api-config */ "./api-config.js");

      var url = apiConfig.serverUrl + '/user/save';
      var pass = bcrypt.hashSync(this.state.password, salt);
      var validated = this.validate();
      if (!validated) return;
      axios__WEBPACK_IMPORTED_MODULE_12___default.a.post(url, {
        nameSurname: this.state.nameSurname,
        email: this.state.email,
        password: pass
      }).then(function (response) {
        next_router__WEBPACK_IMPORTED_MODULE_13___default.a.push('/login?registered=' + this.state.email);
      })["catch"](function (error) {
        if (error.response) {
          _this2.setState({
            alertMessage: error.response.data.message
          });
        }
      });
    }
  }, {
    key: "validate",
    value: function validate() {
      var validated = true;
      var errors = this.state.validationErrors;

      if (this.state.nameSurname.length < 5) {
        validated = false;
        errors.nameSurname = "Ad soyad alanına daha uzun bir değer girmelisiniz.";
      } else if (this.state.nameSurname.length > 50) {
        validated = false;
        errors.nameSurname = "Ad soyad en fazla 50 karakterdan oluşabilir.";
      }

      if (!validator.isEmail(this.state.email)) {
        validated = false;
        errors.email = "Geçerli bir email adresi girmediniz.";
      }

      if (this.state.password !== this.state.passwordConfirm) {
        validated = false;
        errors.passwordConfirm = "Şifreler eşleşmiyor.";
      }

      if (!validated) this.setState({
        validationErrors: errors,
        password: '',
        passwordConfirm: ''
      });
      return validated;
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_8__["default"], {
        page: "registration",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
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
          lineNumber: 98
        },
        __self: this
      }, __jsx("div", {
        className: "row justify-content-md-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, __jsx("div", {
        className: "col-md-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, this.state.alertMessage.length > 0 ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Alert"], {
        color: "danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, this.state.alertMessage) : '', __jsx("h2", {
        className: "text-light bg-dark text-center rounded p-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, " Kay\u0131t Olun "), __jsx("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Form"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
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
          lineNumber: 111
        },
        __self: this
      }), __jsx(_components_ValidationError__WEBPACK_IMPORTED_MODULE_14__["default"], {
        message: this.state.validationErrors.nameSurname,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Input"], {
        bsSize: "lg",
        type: "email",
        name: "email",
        value: this.state.email,
        onChange: this.handleInputChange,
        id: "email",
        placeholder: "Email adresinizi girin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }), __jsx(_components_ValidationError__WEBPACK_IMPORTED_MODULE_14__["default"], {
        message: this.state.validationErrors.email,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
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
          lineNumber: 131
        },
        __self: this
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
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
          lineNumber: 140
        },
        __self: this
      }), __jsx(_components_ValidationError__WEBPACK_IMPORTED_MODULE_14__["default"], {
        message: this.state.validationErrors.passwordConfirm,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        color: "secondary",
        size: "lg",
        onClick: this.handleRegistration,
        block: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, "Kayd\u0131 Tamamla")), __jsx("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, "Zaten \xFCye misiniz?", __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: '/login',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, __jsx("a", {
        className: "text-dark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
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
//# sourceMappingURL=registration.js.5f441f4c21170baa6c4a.hot-update.js.map