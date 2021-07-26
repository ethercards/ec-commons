'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactRouterDom = require('react-router-dom');
var Blockies = require('react-blockies');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var Blockies__default = /*#__PURE__*/_interopDefaultLegacy(Blockies);

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbcAAABQCAYAAACaoTtlAAAEsWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjQzOSIKICAgZXhpZjpQaXhlbFlEaW1lbnNpb249IjgwIgogICBleGlmOkNvbG9yU3BhY2U9IjEiCiAgIHRpZmY6SW1hZ2VXaWR0aD0iNDM5IgogICB0aWZmOkltYWdlTGVuZ3RoPSI4MCIKICAgdGlmZjpSZXNvbHV0aW9uVW5pdD0iMiIKICAgdGlmZjpYUmVzb2x1dGlvbj0iOTYuMCIKICAgdGlmZjpZUmVzb2x1dGlvbj0iOTYuMCIKICAgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIKICAgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIgogICB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0w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";

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$3 = ":root {\r\n    --primary-color: #ad33a1;\r\n  }";
styleInject(css_248z$3);

var css_248z$2 = ".navbar {\r\n    padding: 0 !important;\r\n    box-shadow: 0 5px 0 rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.navbar .nav-link {\r\n    height: 80px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    padding-right: 0.5rem;\r\n    padding-left: 0.5rem;\r\n}\r\n\r\n.navbar .nav-item {\r\n    text-align: center;\r\n    align-self: center;\r\n}\r\n\r\nnav ul li a {\r\n    margin: 0 10px;\r\n}\r\n\r\n.navbar-light .navbar-brand img{\r\n    filter:brightness(0.2);\r\n}\r\n\r\n.navbar-dark .navbar-brand img{\r\n    filter:none;\r\n}\r\n\r\n.navbar-light  .navbar-nav .nav-link.active,\r\n.navbar-dark  .navbar-nav .nav-link.active {\r\n    font-weight: 500;\r\n    border-bottom: 3px solid var(--primary-color);\r\n}\r\n\r\n.navbar-dark{\r\n    background-color: #000208;\r\n}\r\n\r\n.navbar-nav .dropdown-menu .nav-link.active {\r\n    color: var(--primary-color);\r\n}\r\n\r\n.dropdown:hover .dropdown-menu {\r\n    display: block;\r\n    margin-top: 0;\r\n    text-align: left;\r\n}\r\n\r\n.dropdown-menu {\r\n    text-align: right;\r\n    border-radius: 0.25rem;\r\n}\r\n\r\n.navbar-dark .dropdown-menu {\r\n    background-color: #000208;\r\n    border-left: 0px !important;\r\n    border-right: 0px !important;\r\n    border-radius: 0.25rem;\r\n}\r\n\r\n.navbar-light .dropdown-menu{\r\n    background-color: #fff;\r\n    border: 1px solid rgba(0,0,0,0.15);\r\n}\r\n\r\np.disconnect {\r\ncursor: pointer;\r\ntransition: color 0.3s ease-in-out;\r\nmargin: 0;\r\nfont-size: 0.8rem;\r\nline-height: 0.3rem;\r\n}\r\n\r\np.disconnect:hover {\r\ncolor: white;\r\n}\r\n\r\n.navbar-brand img {\r\nmax-height: 40px;\r\n}\r\n\r\n.navbar .navbar-toggler {\r\noutline: none;\r\nborder: none;\r\n}\r\n\r\n.connect-btn:hover {\r\n    background: #771197;\r\n    border-color: #771197;\r\n    color: white;\r\n}\r\n\r\n\r\n\r\nnav .dropdown-item {\r\n    color: #7c8389;\r\n}\r\n\r\nnav .dropdown-item:hover,\r\n.dropdown-item:focus {\r\n    color: var(--primary-color);\r\n    text-decoration: none;\r\n    background-color: transparent;\r\n}\r\n\r\nnav .dropdown-item.active {\r\n    color: var(--primary-color);\r\n    background-color: transparent !important;\r\n}\r\n\r\n.nav-item.dropdown:has(.nav-link){\r\n    background: red;\r\n}\r\n\r\n\r\n\r\n@media (max-width: 992px) {\r\n    .dropdown-menu {\r\n        background-color: none;\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n\r\n    .navbar-nav {\r\n        padding-bottom: 40px;\r\n    }\r\n\r\n    .navbar .nav-item {\r\n        align-self: flex-end !important;\r\n        text-align: right;\r\n        width: 100%;\r\n    }\r\n    .navbar .dropdown-menu {\r\n        border-color: var(--primary-color);\r\n    }\r\n    .dropdown-menu li {\r\n        text-align: right;\r\n    }\r\n\r\n    .navbar-light  .navbar-nav .nav-link.active,\r\n    .navbar-dark  .navbar-nav .nav-link.active {\r\n        font-weight: 500;\r\n        border-bottom: none;\r\n        color: var(--primary-color);\r\n    }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    nav a.nav-link {\r\n        padding: 26px 0;\r\n    }\r\n}\r\n";
styleInject(css_248z$2);

var css_248z$1 = ".address {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n}\r\n\r\n.address span {\r\n    font-weight: 200;\r\n}\r\n\r\n.address .identicon {\r\n    display:inline-block;\r\n    vertical-align: middle;\r\n    border-radius: 50%;\r\n    margin-right: 5px;\r\n}";
styleInject(css_248z$1);

var ECAddress = function ECAddress(props) {
  var _useState = React.useState('-'),
      _useState2 = _slicedToArray(_useState, 2),
      acc = _useState2[0],
      setAcc = _useState2[1];

  var _useState3 = React.useState(6),
      _useState4 = _slicedToArray(_useState3, 2),
      scale = _useState4[0],
      setScale = _useState4[1];

  React.useEffect(function () {
    if (props.address) {
      if (props.short) {
        setAcc(props.address.substr(0, 6) + '...' + props.address.substr(props.address.length - 4, 4));
      } else {
        setAcc(props.address);
      }
    } else {
      setAcc('-');
    }

    if (props.scale) {
      setScale(props.scale);
    } else {
      setScale(6);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [props.address, props.short, props.scale]);
  return /*#__PURE__*/React__default['default'].createElement("span", {
    className: "address"
  }, props.blockie && /*#__PURE__*/React__default['default'].createElement(Blockies__default['default'], {
    seed: acc,
    size: 6,
    scale: scale,
    className: "identicon"
  }), /*#__PURE__*/React__default['default'].createElement("span", null, acc));
};

function ECNav(props) {
  var _useState = React.useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      darkMode = _useState2[0],
      setDarkMode = _useState2[1];

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      toggleNav = _useState4[0],
      setToggleNav = _useState4[1];

  var _useState5 = React.useState(''),
      _useState6 = _slicedToArray(_useState5, 2),
      projectBaseUrl = _useState6[0],
      setProjectBaseUrl = _useState6[1];

  var _useState7 = React.useState(null),
      _useState8 = _slicedToArray(_useState7, 2),
      onboard = _useState8[0],
      setOnboard = _useState8[1];

  var _useState9 = React.useState(null),
      _useState10 = _slicedToArray(_useState9, 2),
      address = _useState10[0],
      setAddress = _useState10[1];

  React.useEffect(function () {}, []);
  React.useEffect(function () {
    if (props.lightMode === null) {
      setDarkMode(false);
    }

    if (props.onboard && onboard === null) {
      setOnboard(props.onboard);
    }

    if (props.address && address !== props.address) {
      setAddress(props.address);
    }

    if (props.projectUrl && projectBaseUrl !== props.projectUrl) {
      setProjectBaseUrl(props.projectUrl);
    }
  }, [props]);

  var handleToggleNav = function handleToggleNav() {
    console.log(toggleNav);
    setToggleNav(toggleNav ? false : true);
  };

  var handleConnect = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!onboard) {
                _context.next = 3;
                break;
              }

              _context.next = 3;
              return onboard.walletSelect();

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleConnect() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleDisconnect = function handleDisconnect() {
    // console.log('disconnect clicked');
    if (onboard) {
      onboard.walletReset();

      if (localStorage) {
        localStorage.removeItem('selectedWallet');
      }

      setAddress(null);
    }
  };

  var ECLink = function ECLink(props) {
    if (!props.url || projectBaseUrl === '') {
      return /*#__PURE__*/React__default['default'].createElement("a", {
        className: "nav-link",
        href: "/"
      }, "ERROR:/");
    }

    if (props.url.startsWith(projectBaseUrl)) {
      var navLnk = props.url.replace(projectBaseUrl, '');
      return /*#__PURE__*/React__default['default'].createElement(reactRouterDom.NavLink, {
        className: props.className ? props.className : '',
        to: navLnk,
        exact: true
      }, props.label);
    }

    return /*#__PURE__*/React__default['default'].createElement("a", {
      className: props.className ? props.className : '',
      href: props.url
    }, props.label);
  };

  return /*#__PURE__*/React__default['default'].createElement("nav", {
    className: "navbar navbar-expand-lg fixed-top ".concat(darkMode ? 'navbar-dark' : 'navbar-light', " ")
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "container"
  }, /*#__PURE__*/React__default['default'].createElement("a", {
    className: "navbar-brand nav-link",
    href: "/"
  }, /*#__PURE__*/React__default['default'].createElement("img", {
    src: img,
    alt: "toolbox"
  })), /*#__PURE__*/React__default['default'].createElement("button", {
    className: "navbar-toggler",
    type: "button",
    onClick: handleToggleNav
  }, /*#__PURE__*/React__default['default'].createElement("span", {
    className: "navbar-toggler-icon"
  })), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "collapse ".concat(toggleNav ? 'show' : '', " navbar-collapse text-right"),
    id: "navbarText"
  }, /*#__PURE__*/React__default['default'].createElement("ul", {
    className: "navbar-nav ml-auto"
  }, /*#__PURE__*/React__default['default'].createElement("li", {
    className: "nav-item dropdown"
  }, /*#__PURE__*/React__default['default'].createElement(ECLink, {
    className: "nav-link",
    url: "https://ether.cards/",
    label: "HOME"
  })), /*#__PURE__*/React__default['default'].createElement("li", {
    className: "nav-item dropdown"
  }, /*#__PURE__*/React__default['default'].createElement("a", {
    className: "nav-link",
    href: "#",
    id: "navbarDropdown",
    role: "button" // data-toggle="dropdown"
    ,
    "aria-expanded": "false"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "dropdown-toggle"
  }, "CARDS")), /*#__PURE__*/React__default['default'].createElement("ul", {
    className: "dropdown-menu",
    "aria-labelledby": "navbarDropdown"
  }, /*#__PURE__*/React__default['default'].createElement("li", null, /*#__PURE__*/React__default['default'].createElement(ECLink, {
    className: "dropdown-item",
    url: "https://ether.cards/cards",
    label: "Ether Cards"
  })), /*#__PURE__*/React__default['default'].createElement("li", null, /*#__PURE__*/React__default['default'].createElement(ECLink, {
    className: "dropdown-item",
    url: "https://explorer.ether.cards/",
    label: "Gallery/Explorer"
  })), /*#__PURE__*/React__default['default'].createElement("li", null, /*#__PURE__*/React__default['default'].createElement(ECLink, {
    className: "dropdown-item",
    url: "https://traits.ether.cards",
    label: "Traits"
  })))), /*#__PURE__*/React__default['default'].createElement("li", {
    className: "nav-item dropdown"
  }, /*#__PURE__*/React__default['default'].createElement("a", {
    className: "nav-link",
    href: "#",
    id: "navbarDropdown",
    role: "button" // data-toggle="dropdown"
    ,
    "aria-expanded": "false"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "dropdown-toggle"
  }, "PLATFORMS")), /*#__PURE__*/React__default['default'].createElement("ul", {
    className: "dropdown-menu",
    "aria-labelledby": "navbarDropdown"
  }, /*#__PURE__*/React__default['default'].createElement("li", null, /*#__PURE__*/React__default['default'].createElement(ECLink, {
    className: "dropdown-item",
    url: "https://ether.cards/events",
    label: "Events"
  })), /*#__PURE__*/React__default['default'].createElement("li", null, /*#__PURE__*/React__default['default'].createElement(ECLink, {
    className: "dropdown-item",
    url: "https://bizdev.ether.cards",
    label: "Business"
  })))), /*#__PURE__*/React__default['default'].createElement("li", {
    className: "nav-item dropdown"
  }, /*#__PURE__*/React__default['default'].createElement("a", {
    className: "nav-link",
    href: "#",
    id: "navbarDropdown",
    role: "button" // data-toggle="dropdown"
    ,
    "aria-expanded": "false"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "dropdown-toggle"
  }, "ABOUT")), /*#__PURE__*/React__default['default'].createElement("ul", {
    className: "dropdown-menu",
    "aria-labelledby": "navbarDropdown"
  }, /*#__PURE__*/React__default['default'].createElement("li", null, /*#__PURE__*/React__default['default'].createElement(ECLink, {
    className: "dropdown-item",
    url: "https://ether.cards/videos",
    label: "Video"
  })), /*#__PURE__*/React__default['default'].createElement("li", null, /*#__PURE__*/React__default['default'].createElement(ECLink, {
    className: "dropdown-item",
    url: "https://blog.ether.cards/",
    label: "Blog"
  })), /*#__PURE__*/React__default['default'].createElement("li", null, /*#__PURE__*/React__default['default'].createElement(ECLink, {
    className: "dropdown-item",
    url: "https://docs.ether.cards/faq",
    label: "FAQ"
  })), /*#__PURE__*/React__default['default'].createElement("li", null, /*#__PURE__*/React__default['default'].createElement(ECLink, {
    className: "dropdown-item",
    url: "https://docs.ether.cards/team",
    label: "Team"
  })))), /*#__PURE__*/React__default['default'].createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/React__default['default'].createElement(ECLink, {
    className: "nav-link",
    url: "https://explorer.ether.cards/wallet",
    label: "WALLET"
  })), onboard && /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, address ? /*#__PURE__*/React__default['default'].createElement("li", {
    className: "nav-item ml-4"
  }, /*#__PURE__*/React__default['default'].createElement(ECAddress, {
    address: address,
    short: true,
    blockie: true,
    scale: 3
  }), /*#__PURE__*/React__default['default'].createElement("p", {
    className: "disconnect",
    onClick: handleDisconnect
  }, "disconnect")) : /*#__PURE__*/React__default['default'].createElement("li", {
    className: "nav-item ml-4"
  }, /*#__PURE__*/React__default['default'].createElement("button", {
    className: "btn btn-peach btn-sm round connect-btn",
    onClick: handleConnect
  }, "CONNECT")))))));
}

var css_248z = "#footer {\r\n    background: black;\r\n    margin-top: auto;\r\n    padding: 30px 0;\r\n    color: #c5c5c5;\r\n  }\r\n  \r\n  #footer p {\r\n    color: #c5c5c5;\r\n    opacity: 0.4;\r\n  }\r\n  \r\n  .footer-light h5 {\r\n    margin-top: 0;\r\n    font-family: \"Poppins\";\r\n    font-weight: 600;\r\n    -webkit-text-fill-color: white;\r\n    color: #35404e;\r\n  }\r\n  \r\n  .footer-container {\r\n    display: flex;\r\n    text-align: center;\r\n    padding: 30px 15px;\r\n    z-index: 10;\r\n    padding: 0 !important; \r\n    justify-content: center;\r\n  }\r\n\r\n  .footer-container img {\r\n    height: 25px;\r\n    margin-left: 10px;\r\n  }\r\n \r\n\r\n  .footer-container #copyright .c-symbol {\r\n    font-size: 24px;\r\n    margin-right: 10px;\r\n  }\r\n\r\n  .footer-container #copyright p {\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    line-height: 24px;\r\n    align-self: center;\r\n    margin: 0;\r\n  }";
styleInject(css_248z);

var ECFooter = function ECFooter() {
  return /*#__PURE__*/React__default['default'].createElement("div", {
    id: "footer"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "footer-container container"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    id: "copyright",
    className: "d-flex"
  }, /*#__PURE__*/React__default['default'].createElement("p", null, /*#__PURE__*/React__default['default'].createElement("span", {
    style: {
      fontSize: '18px'
    }
  }, "\xA9"), " 2021 All Rights Reserved"), /*#__PURE__*/React__default['default'].createElement("img", {
    src: img,
    style: {
      height: '35px',
      opacity: '0.6'
    }
  }))));
};

exports.ECAddress = ECAddress;
exports.ECFooter = ECFooter;
exports.ECNav = ECNav;
