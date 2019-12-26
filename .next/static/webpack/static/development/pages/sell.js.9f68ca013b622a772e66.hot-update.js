webpackHotUpdate("static/development/pages/sell.js",{

/***/ "./pages/sell.js":
/*!***********************!*\
  !*** ./pages/sell.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var _components_ValidationError__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/ValidationError */ "./components/ValidationError.js");
/* harmony import */ var _node_modules_bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../node_modules/bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var _node_modules_bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_node_modules_bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../utils/auth */ "./utils/auth.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/dist/react-datepicker.min.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var date_fns_locale_tr__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! date-fns/locale/tr */ "./node_modules/date-fns/esm/locale/tr/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var react_filepond__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-filepond */ "./node_modules/react-filepond/dist/react-filepond.js");
/* harmony import */ var react_filepond__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(react_filepond__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var filepond_dist_filepond_min_css__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! filepond/dist/filepond.min.css */ "./node_modules/filepond/dist/filepond.min.css");
/* harmony import */ var filepond_dist_filepond_min_css__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(filepond_dist_filepond_min_css__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var filepond_plugin_image_exif_orientation__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! filepond-plugin-image-exif-orientation */ "./node_modules/filepond-plugin-image-exif-orientation/dist/filepond-plugin-image-exif-orientation.js");
/* harmony import */ var filepond_plugin_image_exif_orientation__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(filepond_plugin_image_exif_orientation__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var filepond_plugin_image_preview__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! filepond-plugin-image-preview */ "./node_modules/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.js");
/* harmony import */ var filepond_plugin_image_preview__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(filepond_plugin_image_preview__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var filepond_plugin_image_preview_dist_filepond_plugin_image_preview_css__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css */ "./node_modules/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css");
/* harmony import */ var filepond_plugin_image_preview_dist_filepond_plugin_image_preview_css__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(filepond_plugin_image_preview_dist_filepond_plugin_image_preview_css__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var filepond_plugin_file_validate_type__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! filepond-plugin-file-validate-type */ "./node_modules/filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.js");
/* harmony import */ var filepond_plugin_file_validate_type__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(filepond_plugin_file_validate_type__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_29__);










var _jsxFileName = "/Users/mert/Desktop/I\u0307TU\u0308/Fall 2019/Bitirme/Project/pages/sell.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;






















var apiConfig = __webpack_require__(/*! ../api-config */ "./api-config.js");

var socket = socket_io_client__WEBPACK_IMPORTED_MODULE_29___default()(apiConfig.serverUrl);
var minimumSaleDuration = 1000 * 60 * 60 * 12; //12 hours

Object(react_datepicker__WEBPACK_IMPORTED_MODULE_19__["registerLocale"])('tr', date_fns_locale_tr__WEBPACK_IMPORTED_MODULE_21__["default"]);
Object(react_filepond__WEBPACK_IMPORTED_MODULE_23__["registerPlugin"])(filepond_plugin_image_exif_orientation__WEBPACK_IMPORTED_MODULE_25___default.a, filepond_plugin_image_preview__WEBPACK_IMPORTED_MODULE_26___default.a, filepond_plugin_file_validate_type__WEBPACK_IMPORTED_MODULE_28___default.a);

var Sell =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Sell, _React$Component);

  function Sell(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Sell);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Sell).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleChange", function (date) {
      var validationErrors = _this.state.validationErrors;
      validationErrors.endDate = '';

      _this.setState({
        endDate: date,
        validationErrors: validationErrors
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleSubmit", function (event) {
      var url = apiConfig.serverUrl + '/sale/new';
      event.preventDefault();
      var filenames = [];

      if (event.target.filepond.length) {
        for (var i = 0; i < event.target.filepond.length; i++) {
          filenames.push(event.target.filepond[i].value);
        }
      } else if (event.target.filepond.value) {
        filenames.push(event.target.filepond.value);
      }

      var validated = _this.validate();

      if (!validated) return;
      axios__WEBPACK_IMPORTED_MODULE_16___default.a.post(url, {
        title: _this.state.title,
        description: _this.state.description,
        state: _this.state.state,
        firstPrice: _this.state.firstPrice,
        endDate: _this.state.endDate,
        city: _this.state.city,
        district: _this.state.district,
        images: filenames
      }, {
        headers: {
          authorization: _this.state.user.token
        }
      }).then(function (response) {
        var saleId = response.data.saleId;
        socket.emit('new sale', {
          saleId: saleId,
          endDate: _this.state.endDate
        });
        next_router__WEBPACK_IMPORTED_MODULE_18___default.a.push('/index');
      })["catch"](function (error) {
        console.log(error);
      });
    });

    var token = _this.props.token;

    _this.getUser(token);

    _this.state = {
      loggedIn: token ? true : false,
      user: {},
      title: '',
      description: '',
      state: 'Seçiniz',
      firstPrice: '',
      focuses: {},
      validationErrors: {},
      locations: [apiConfig.defaultCity],
      endDate: new Date(),
      selectedCity: apiConfig.defaultCity,
      district: '',
      city: '',
      files: []
    };
    _this.handleInputChange = _this.handleInputChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.updateSelectedCity = _this.updateSelectedCity.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.handleInputFocus = _this.handleInputFocus.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.handleInputBlur = _this.handleInputBlur.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Sell, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getLocations();
    }
  }, {
    key: "handleInputChange",
    value: function handleInputChange(event) {
      var _this$setState;

      var target = event.target;
      var value = target.value;
      var name = target.name;
      var validationErrors = this.state.validationErrors;
      validationErrors[name] = '';
      this.setState((_this$setState = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_this$setState, name, value), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_this$setState, "validationErrors", validationErrors), _this$setState));

      if (name == "city") {
        var selectedCity = this.state.locations.find(function (location) {
          return location.city === value;
        });
        this.updateSelectedCity(selectedCity);
      }
    }
  }, {
    key: "handleInputFocus",
    value: function handleInputFocus(event) {
      var target = event.target;
      var name = target.name;
      var focuses = this.state.focuses;
      focuses[name] = true;
      this.setState({
        focuses: focuses
      });
    }
  }, {
    key: "handleInputBlur",
    value: function handleInputBlur(event) {
      var target = event.target;
      var name = target.name;
      var focuses = this.state.focuses;
      focuses[name] = false;
      this.setState({
        focuses: focuses
      });
    }
  }, {
    key: "validate",
    value: function validate() {
      var validated = true;
      var validationErrors = {};

      if (this.state.files.length === 0) {
        validationErrors.image = "Lütfen en az bir fotoğraf yükleyin.";
        validated = false;
      }

      if (this.state.title.length === 0) {
        validationErrors.title = "Lütfen ürününüze bir başlık verin.";
        validated = false;
      } else if (this.state.title.length > 40) {
        validationErrors.title = "Başlık en fazla 40 karakter olabilir.";
        validated = false;
      }

      if (this.state.description.length > 400) {
        validationErrors.description = "Açıklama en fazla 400 karakter olabilir.";
        validated = false;
      }

      if (this.state.state == 'Seçiniz') {
        validationErrors.state = "Lütfen ürününüzün durumunu belirtin.";
        validated = false;
      }

      if (this.state.firstPrice.length === 0) {
        validationErrors.title = "Lütfen bir açılış fiyatı belirleyin.";
        validated = false;
      }

      if (this.state.endDate < _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2___default()() + minimumSaleDuration) {
        validationErrors.endDate = "Kapanış tarihi en erken 12 saat sonra olabilir.";
        validated = false;
      }

      if (!this.state.selectedCity.code) {
        validationErrors.city = "Lütfen bir konum seçin.";
        validated = false;
      }

      this.setState({
        validationErrors: validationErrors
      });
      return validated;
    }
  }, {
    key: "getUser",
    value: function getUser(token) {
      var _this2 = this;

      var url = apiConfig.serverUrl + '/user/get';
      axios__WEBPACK_IMPORTED_MODULE_16___default.a.post(url, {}, {
        headers: {
          authorization: token
        }
      }).then(function (response) {
        _this2.setState({
          user: response.data.user
        });
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }, {
    key: "getLocations",
    value: function getLocations() {
      var _this3 = this;

      var apiConfig = __webpack_require__(/*! ../api-config */ "./api-config.js");

      var url = apiConfig.serverUrl + '/locations';
      axios__WEBPACK_IMPORTED_MODULE_16___default.a.get(url).then(function (response) {
        _this3.setState({
          locations: response.data.locations,
          selectedCity: response.data.locations[0]
        });
      })["catch"](function (error) {
        console.log(error);
      }.bind(this));
    }
  }, {
    key: "updateSelectedCity",
    value: function updateSelectedCity(city) {
      this.setState({
        selectedCity: city
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var cities = this.state.locations.map(function (location) {
        return __jsx("option", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 237
          },
          __self: this
        }, location.city);
      });
      var location;

      for (location in this.state.locations) {
        if (location.city === this.state.city) {
          this.setState({
            selectedCity: location
          });
        }
      }

      var districts = this.state.selectedCity.districts.map(function (district) {
        return __jsx("option", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 248
          },
          __self: this
        }, district);
      });
      console.log(this.state.validationErrors.title);
      return __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_11__["default"], {
        page: "sell",
        user: this.state.user,
        loggedIn: this.state.loggedIn,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
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
          lineNumber: 253
        },
        __self: this
      }, __jsx("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }, " Sat\u0131\u015F Ba\u015Flat "), __jsx("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_14__["Form"], {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }, __jsx("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        },
        __self: this
      }, __jsx("div", {
        className: "col-md-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_14__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_14__["Label"], {
        "for": "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        },
        __self: this
      }, "Ba\u015Fl\u0131k"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_14__["Input"], {
        type: "text",
        name: "title",
        id: "title",
        maxLength: "40",
        value: this.state.title,
        onChange: this.handleInputChange,
        onFocus: this.handleInputFocus,
        onBlur: this.handleInputBlur,
        placeholder: "\xDCr\xFCn\xFCn\xFCz\xFC tan\u0131mlayan birka\xE7 kelime...",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: this
      }), __jsx(_components_ValidationError__WEBPACK_IMPORTED_MODULE_12__["default"], {
        message: this.state.validationErrors.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        },
        __self: this
      }), this.state.focuses.title && this.state.title.length !== 0 ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_14__["Progress"], {
        className: "mt-3",
        color: "info",
        value: this.state.title.length * 2.5,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        },
        __self: this
      }) : ""), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_14__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_14__["Label"], {
        "for": "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        __self: this
      }, "A\xE7\u0131klama"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_14__["Input"], {
        type: "textarea",
        id: "description",
        name: "description",
        value: this.state.description,
        rows: "5",
        maxLength: "400",
        onChange: this.handleInputChange,
        onFocus: this.handleInputFocus,
        onBlur: this.handleInputBlur,
        style: {
          outline: 'none'
        },
        placeholder: "\xDCr\xFCn\xFCn\xFCz hakk\u0131nda a\xE7\u0131klamalar ve belirtmek istedi\u011Finiz ekstra bilgiler.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      }), __jsx(_components_ValidationError__WEBPACK_IMPORTED_MODULE_12__["default"], {
        message: this.state.validationErrors.description,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        },
        __self: this
      }), this.state.focuses.description && this.state.description.length !== 0 ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_14__["Progress"], {
        className: "mt-3",
        color: "info",
        value: this.state.description.length / 4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        },
        __self: this
      }) : ""), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_14__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_14__["Label"], {
        "for": "state",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        },
        __self: this
      }, "Durum"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_14__["Input"], {
        type: "select",
        name: "state",
        id: "state",
        value: this.state.state,
        onChange: this.handleInputChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        },
        __self: this
      }, __jsx("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        },
        __self: this
      }, "Se\xE7iniz"), __jsx("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        },
        __self: this
      }, "Kullan\u0131lmam\u0131\u015F"), __jsx("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        },
        __self: this
      }, "Yeni gibi"), __jsx("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        },
        __self: this
      }, "Az kullan\u0131lm\u0131\u015F"), __jsx("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        },
        __self: this
      }, "Eski"), __jsx("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        },
        __self: this
      }, "\xC7ok Eski")), __jsx(_components_ValidationError__WEBPACK_IMPORTED_MODULE_12__["default"], {
        message: this.state.validationErrors.state,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        },
        __self: this
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_14__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_14__["Label"], {
        "for": "firstPrice",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        },
        __self: this
      }, "Ba\u015Flang\u0131\xE7 Fiyat\u0131"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_14__["InputGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_14__["InputGroupAddon"], {
        addonType: "prepend",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_14__["InputGroupText"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_22__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__["faLiraSign"],
        width: "16",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        },
        __self: this
      }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_14__["Input"], {
        type: "number",
        name: "firstPrice",
        value: this.state.firstPrice,
        onChange: this.handleInputChange,
        id: "firstPrice",
        placeholder: "Minimum sat\u0131\u015F fiyat\u0131n\u0131 belirtin...",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        },
        __self: this
      })), __jsx(_components_ValidationError__WEBPACK_IMPORTED_MODULE_12__["default"], {
        message: this.state.validationErrors.firstPrice,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330
        },
        __self: this
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_14__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_14__["Label"], {
        style: {
          display: 'block'
        },
        "for": "endDate",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333
        },
        __self: this
      }, "Kapan\u0131\u015F Tarihi"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_14__["InputGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_14__["InputGroupAddon"], {
        addonType: "prepend",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 335
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_14__["InputGroupText"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 336
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_22__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__["faCalendar"],
        width: "16",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337
        },
        __self: this
      }))), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_19___default.a, {
        id: "endDate",
        className: "form-control",
        selected: this.state.endDate,
        onChange: this.handleChange,
        locale: "tr",
        showTimeSelect: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        },
        __self: this
      })), __jsx(_components_ValidationError__WEBPACK_IMPORTED_MODULE_12__["default"], {
        message: this.state.validationErrors.endDate,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349
        },
        __self: this
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_14__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_14__["Label"], {
        style: {
          textDecoration: 'underline'
        },
        "for": "location",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352
        },
        __self: this
      }, "Konum"), __jsx("div", {
        className: "row",
        id: "location",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353
        },
        __self: this
      }, __jsx("div", {
        className: "col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_14__["Label"], {
        "for": "city",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 355
        },
        __self: this
      }, "\u0130l"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_14__["Input"], {
        type: "select",
        name: "city",
        id: "city",
        value: this.state.city,
        onChange: this.handleInputChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356
        },
        __self: this
      }, cities)), __jsx("div", {
        className: "col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_14__["Label"], {
        "for": "district",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365
        },
        __self: this
      }, "\u0130l\xE7e"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_14__["Input"], {
        type: "select",
        name: "district",
        id: "district",
        value: this.state.district,
        onChange: this.handleInputChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366
        },
        __self: this
      }, districts))), __jsx(_components_ValidationError__WEBPACK_IMPORTED_MODULE_12__["default"], {
        message: this.state.validationErrors.city,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375
        },
        __self: this
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_14__["Button"], {
        color: "danger",
        size: "lg",
        type: "submit",
        block: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377
        },
        __self: this
      }, "Sat\u0131\u015F\u0131 Ba\u015Flat")), __jsx("div", {
        className: "col-md-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 384
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_14__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_14__["Label"], {
        style: {
          display: 'block'
        },
        "for": "filepond",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386
        },
        __self: this
      }, "\xDCr\xFCn foto\u011Fraflar\u0131"), __jsx(react_filepond__WEBPACK_IMPORTED_MODULE_23__["FilePond"], {
        id: "filepond",
        files: this.state.files,
        allowFileTypeValidation: true,
        acceptedFileTypes: ['image/*'],
        labelInvalidField: "Sadece foto\u011Fraf dosyalar\u0131 y\xFCkleyebilirsiniz",
        labelIdle: "S\xFCr\xFCkleyip b\u0131rak\u0131n, veya bilgisayar\u0131n\u0131zdan y\xFCklemek i\xE7in t\u0131klay\u0131n. <br> En fazla 10 foto\u011Fraf y\xFCkleyebilirsiniz.",
        labelTapToRetry: "Yeniden denemek i\xE7in t\u0131klay\u0131n",
        labelFileProcessingError: "Foto\u011Fraf y\xFCklenirken hata olu\u015Ftu",
        labelFileProcessingComplete: "Y\xFCkleme tamamland\u0131",
        labelTapToUndo: "Geri almak i\xE7in t\u0131klay\u0131n",
        labelFileProcessing: "Foto\u011Fraf y\xFCkleniyor",
        labelTapToCancel: "\u0130ptal etmek i\xE7in t\u0131klay\u0131n",
        allowMultiple: true,
        maxFiles: 10,
        server: {
          url: apiConfig.serverUrl,
          process: '/file/product',
          revert: '/file/product'
        },
        onupdatefiles: function onupdatefiles(fileItems) {
          var validationErrors = _this4.state.validationErrors;
          validationErrors.image = ''; // Set currently active file objects to this.state

          _this4.setState({
            files: fileItems.map(function (fileItem) {
              return fileItem.file;
            }),
            validationErrors: validationErrors
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 387
        },
        __self: this
      }), __jsx(_components_ValidationError__WEBPACK_IMPORTED_MODULE_12__["default"], {
        message: this.state.validationErrors.image,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 419
        },
        __self: this
      })))))));
    }
  }]);

  return Sell;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

Sell.getInitialProps =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    var token;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // Check user's session
            token = Object(_utils_auth__WEBPACK_IMPORTED_MODULE_17__["auth"])(ctx);
            return _context.abrupt("return", {
              token: token
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Sell);

/***/ })

})
//# sourceMappingURL=sell.js.9f68ca013b622a772e66.hot-update.js.map