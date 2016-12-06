/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ModalComponent = function (_React$Component) {
	  _inherits(ModalComponent, _React$Component);

	  function ModalComponent(props) {
	    _classCallCheck(this, ModalComponent);

	    var _this = _possibleConstructorReturn(this, (ModalComponent.__proto__ || Object.getPrototypeOf(ModalComponent)).call(this, props));

	    _this.state = { isOpen: _this.props.isOpen };
	    return _this;
	  }

	  _createClass(ModalComponent, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      this.setState({ isOpen: nextProps.isOpen });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (!this.state.isOpen) {
	        return null;
	      }

	      var overlay = this.props.style && this.props.style.overlay ? this.props.style.overlay : ModalComponent.defaultStyles.overlay;
	      var overlayClass = this.props.overlayClass ? {} : overlay;
	      var modal = this.props.style && this.props.style.modal ? this.props.style.modal : ModalComponent.defaultStyles.modal;
	      var modalClass = this.props.modalClass ? {} : modal;

	      return React.createElement(
	        'div',
	        null,
	        React.createElement(
	          'div',
	          { style: overlayClass, onClick: this.props.onCloseRequest, className: this.props.overlayClass },
	          React.createElement(
	            'div',
	            { style: modalClass, className: this.props.modalClass },
	            this.props.children
	          )
	        )
	      );
	    }
	  }]);

	  return ModalComponent;
	}(React.Component);

	ModalComponent.propTypes = {
	  isOpen: React.PropTypes.bool.isRequired,
	  onCloseRequest: React.PropTypes.func,
	  style: React.PropTypes.objectOf(React.PropTypes.object),
	  overlayClassName: React.PropTypes.string,
	  modalClassName: React.PropTypes.string
	};

	ModalComponent.defaultStyles = {
	  overlay: {
	    backgroundColor: 'rgba(0,0,0,0.75)',
	    height: '100%',
	    left: 0,
	    position: 'fixed',
	    top: 0,
	    width: '100%',
	    zIndex: 1
	  },
	  modal: {
	    background: '#fff',
	    borderRadius: '5px',
	    boxShadow: '0 0 10 #000',
	    display: 'table',
	    left: '5%',
	    maxHeight: '80%',
	    maxWidth: '80%',
	    overflowY: 'scroll',
	    padding: '20px 50px',
	    position: 'fixed',
	    top: '10%',
	    width: '80%',
	    zIndex: 2
	  }
	};

	exports.default = window.ModalComponent = ModalComponent;

/***/ }
/******/ ]);