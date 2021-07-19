import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Blockies from 'react-blockies';

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

var css_248z$2 = ":root {\n    --primary-color: #ad33a1;\n  }";
styleInject(css_248z$2);

var css_248z$1 = ".navbar {\n    padding: 0 !important;\n    box-shadow: 0 5px 0 rgba(0, 0, 0, 0.4);\n}\n\n.navbar .nav-link {\n    height: 80px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n}\n\n.navbar .nav-item {\n    text-align: center;\n    align-self: center;\n}\n\nnav ul li a {\n    margin: 0 10px;\n}\n\n.navbar-light .navbar-brand img{\n    filter:brightness(0.2);\n}\n\n.navbar-dark .navbar-brand img{\n    filter:none;\n}\n\n.navbar-light  .navbar-nav .nav-link.active,\n.navbar-dark  .navbar-nav .nav-link.active {\n    font-weight: 500;\n    border-bottom: 3px solid var(--primary-color);\n}\n\n.navbar-dark{\n    background-color: #000208;\n}\n\n.navbar-nav .dropdown-menu .nav-link.active {\n    color: var(--primary-color);\n}\n\n.dropdown:hover .dropdown-menu {\n    display: block;\n    margin-top: 0;\n    text-align: left;\n}\n\n.dropdown-menu {\n    text-align: right;\n    border-radius: 0.25rem;\n}\n\n.navbar-dark .dropdown-menu {\n    background-color: #000208;\n    border-left: 0px !important;\n    border-right: 0px !important;\n    border-radius: 0.25rem;\n}\n\n.navbar-light .dropdown-menu{\n    background-color: #fff;\n    border: 1px solid rgba(0,0,0,0.15);\n}\n\np.disconnect {\ncursor: pointer;\ntransition: color 0.3s ease-in-out;\nmargin: 0;\nfont-size: 0.8rem;\nline-height: 0.3rem;\n}\n\np.disconnect:hover {\ncolor: white;\n}\n\n.navbar-brand img {\nmax-height: 40px;\n}\n\n.navbar .navbar-toggler {\noutline: none;\nborder: none;\n}\n\n.connect-btn:hover {\n    background: #771197;\n    border-color: #771197;\n    color: white;\n}\n\n\n\nnav .dropdown-item {\n    color: #7c8389;\n}\n\nnav .dropdown-item:hover,\n.dropdown-item:focus {\n    color: var(--primary-color);\n    text-decoration: none;\n    background-color: transparent;\n}\n\nnav .dropdown-item.active {\n    color: var(--primary-color);\n    background-color: transparent !important;\n}\n\n.nav-item.dropdown:has(.nav-link){\n    background: red;\n}\n\n\n\n@media (max-width: 992px) {\n    .dropdown-menu {\n        background-color: none;\n        margin: 0;\n        padding: 0;\n    }\n\n    .navbar-nav {\n        padding-bottom: 40px;\n    }\n\n    .navbar .nav-item {\n        align-self: flex-end !important;\n        text-align: right;\n        width: 100%;\n    }\n    .navbar .dropdown-menu {\n        border-color: var(--primary-color);\n    }\n    .dropdown-menu li {\n        text-align: right;\n    }\n\n    .navbar-light  .navbar-nav .nav-link.active,\n    .navbar-dark  .navbar-nav .nav-link.active {\n        font-weight: 500;\n        border-bottom: none;\n        color: var(--primary-color);\n    }\n}\n\n@media (min-width: 768px) {\n    nav a.nav-link {\n        padding: 26px 0;\n    }\n}\n";
styleInject(css_248z$1);

var css_248z = ".address {\n    display: inline-block;\n    vertical-align: middle;\n}\n\n.address span {\n    font-weight: 200;\n}\n\n.address .identicon {\n    display:inline-block;\n    vertical-align: middle;\n    border-radius: 50%;\n    margin-right: 5px;\n}";
styleInject(css_248z);

const ECAddress = props => {
  const [acc, setAcc] = useState('-');
  const [scale, setScale] = useState(6);
  useEffect(() => {
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
  return /*#__PURE__*/React.createElement("span", {
    className: "address"
  }, props.blockie && /*#__PURE__*/React.createElement(Blockies, {
    seed: acc,
    size: 6,
    scale: scale,
    className: "identicon"
  }), /*#__PURE__*/React.createElement("span", null, acc));
};

function ECNav(props) {
  const [darkMode, setDarkMode] = useState(true);
  const [toggleNav, setToggleNav] = useState(false);
  const [projectBaseUrl, setProjectBaseUrl] = useState('');
  const [onboard, setOnboard] = useState(null);
  const [address, setAddress] = useState(null);
  useEffect(() => {
    console.log('win');
  }, []);
  useEffect(() => {
    console.log('The PROPS', props);

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

  const handleToggleNav = () => {
    console.log(toggleNav);
    setToggleNav(toggleNav ? false : true);
  };

  const handleConnect = async () => {
    if (onboard) {
      await onboard.walletSelect();
    }
  };

  const handleDisconnect = () => {
    // console.log('disconnect clicked');
    if (onboard) {
      onboard.walletReset();

      if (localStorage) {
        localStorage.removeItem('selectedWallet');
      }

      setAddress(null);
    }
  };

  const ECLink = props => {
    if (!props.url || projectBaseUrl === '') {
      return /*#__PURE__*/React.createElement("a", {
        className: "nav-link",
        href: "/"
      }, "ERROR:/");
    }

    if (props.url.startsWith(projectBaseUrl)) {
      let navLnk = props.url.replace(projectBaseUrl, '');
      return /*#__PURE__*/React.createElement(NavLink, {
        className: props.className ? props.className : '',
        to: navLnk,
        exact: true
      }, props.label);
    }

    return /*#__PURE__*/React.createElement("a", {
      className: props.className ? props.className : '',
      href: props.url
    }, props.label);
  };

  return /*#__PURE__*/React.createElement("nav", {
    className: `navbar navbar-expand-lg fixed-top ${darkMode ? 'navbar-dark' : 'navbar-light'} `
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("a", {
    className: "navbar-brand nav-link",
    href: "/"
  }, /*#__PURE__*/React.createElement("img", {
    src: img,
    alt: "toolbox"
  })), /*#__PURE__*/React.createElement("button", {
    className: "navbar-toggler",
    type: "button",
    onClick: handleToggleNav
  }, /*#__PURE__*/React.createElement("span", {
    className: "navbar-toggler-icon"
  })), /*#__PURE__*/React.createElement("div", {
    className: `collapse ${toggleNav ? 'show' : ''} navbar-collapse text-right`,
    id: "navbarText"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "navbar-nav ml-auto"
  }, /*#__PURE__*/React.createElement("li", {
    className: "nav-item dropdown"
  }, /*#__PURE__*/React.createElement(ECLink, {
    className: "nav-link",
    url: "https://ether.cards/",
    label: "HOME"
  })), /*#__PURE__*/React.createElement("li", {
    className: "nav-item dropdown"
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav-link",
    href: "#",
    id: "navbarDropdown",
    role: "button" // data-toggle="dropdown"
    ,
    "aria-expanded": "false"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dropdown-toggle"
  }, "CARDS")), /*#__PURE__*/React.createElement("ul", {
    className: "dropdown-menu",
    "aria-labelledby": "navbarDropdown"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(ECLink, {
    className: "dropdown-item",
    url: "https://ether.cards/cards",
    label: "Ether Cards"
  })), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(ECLink, {
    className: "dropdown-item",
    url: "https://explorer.ether.cards/",
    label: "Gallery/Explorer"
  })), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(ECLink, {
    className: "dropdown-item",
    url: "https://traits.ether.cards",
    label: "Traits"
  })))), /*#__PURE__*/React.createElement("li", {
    className: "nav-item dropdown"
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav-link",
    href: "#",
    id: "navbarDropdown",
    role: "button" // data-toggle="dropdown"
    ,
    "aria-expanded": "false"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dropdown-toggle"
  }, "PLATFORMS")), /*#__PURE__*/React.createElement("ul", {
    className: "dropdown-menu",
    "aria-labelledby": "navbarDropdown"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(ECLink, {
    className: "dropdown-item",
    url: "https://ether.cards/events",
    label: "Events"
  })), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(ECLink, {
    className: "dropdown-item",
    url: "https://bizdev.ether.cards",
    label: "Business"
  })))), /*#__PURE__*/React.createElement("li", {
    className: "nav-item dropdown"
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav-link",
    href: "#",
    id: "navbarDropdown",
    role: "button" // data-toggle="dropdown"
    ,
    "aria-expanded": "false"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dropdown-toggle"
  }, "ABOUT")), /*#__PURE__*/React.createElement("ul", {
    className: "dropdown-menu",
    "aria-labelledby": "navbarDropdown"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(ECLink, {
    className: "dropdown-item",
    url: "https://blog.ether.cards/",
    label: "Blog"
  })), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(ECLink, {
    className: "dropdown-item",
    url: "https://docs.ether.cards/faq",
    label: "FAQ"
  })), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(ECLink, {
    className: "dropdown-item",
    url: "https://docs.ether.cards/team",
    label: "Team"
  })))), /*#__PURE__*/React.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/React.createElement(ECLink, {
    className: "nav-link",
    url: "https://explorer.ether.cards/wallet",
    label: "WALLET"
  })), onboard && /*#__PURE__*/React.createElement(React.Fragment, null, address ? /*#__PURE__*/React.createElement("li", {
    className: "nav-item ml-4"
  }, /*#__PURE__*/React.createElement(ECAddress, {
    address: address,
    short: true,
    blockie: true,
    scale: 3
  }), /*#__PURE__*/React.createElement("p", {
    className: "disconnect",
    onClick: handleDisconnect
  }, "disconnect")) : /*#__PURE__*/React.createElement("li", {
    className: "nav-item ml-4"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-peach btn-sm round connect-btn",
    onClick: handleConnect
  }, "CONNECT")))))));
}

export { ECAddress, ECNav };
