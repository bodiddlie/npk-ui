'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));
var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var reactRouterDom = require('react-router-dom');
var ReactDOM = _interopDefault(require('react-dom'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var theme = {
  primary: '#cdcdcd',
  secondary: '#ffb700',
  tertiary: '#525349',
  heading: '#ffb700'
};

var themeFunction = function themeFunction(outerTheme) {
  if (outerTheme) {
    var t = _extends({}, outerTheme);
    if (!t.primary) t.primary = theme.primary;
    if (!t.secondary) t.secondary = theme.secondary;
    if (!t.tertiary) t.tertiary = theme.tertiary;
    if (!t.heading) t.heading = theme.heading;
    return t;
  } else {
    return theme;
  }
};

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  font-family: Lato, Roboto, sans-serif;\n'], ['\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  font-family: Lato, Roboto, sans-serif;\n']);
var _templateObject2 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  background-color: ', ';\n  min-width: 250px;\n'], ['\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  background-color: ', ';\n  min-width: 250px;\n']);
var _templateObject3 = _taggedTemplateLiteral(['\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n'], ['\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n']);
var _templateObject4 = _taggedTemplateLiteral(['\n  flex: 1;\n  overflow: hidden;\n'], ['\n  flex: 1;\n  overflow: hidden;\n']);
var _templateObject5 = _taggedTemplateLiteral(['\n  padding: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 0.5rem;\n'], ['\n  padding: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 0.5rem;\n']);
var _templateObject6 = _taggedTemplateLiteral(['\n  margin: 0 0 0.25rem 0;\n  color: ', ';\n'], ['\n  margin: 0 0 0.25rem 0;\n  color: ', ';\n']);
var _templateObject7 = _taggedTemplateLiteral(['\n  font-size: 0.85rem;\n  color: white;\n'], ['\n  font-size: 0.85rem;\n  color: white;\n']);
var _templateObject8 = _taggedTemplateLiteral(['\n  text-decoration: none;\n  color: ', ';\n  padding: 0.5rem 0.5rem;\n\n  &:hover {\n    color: ', ';\n  }\n'], ['\n  text-decoration: none;\n  color: ', ';\n  padding: 0.5rem 0.5rem;\n\n  &:hover {\n    color: ', ';\n  }\n']);
var _templateObject9 = _taggedTemplateLiteral(['\n  color: white;\n  background: ', ';\n  border-radius: 10px;\n  padding: 2px 7px;\n  min-width: 10px;\n  vertical-align: middle;\n  text-align: center;\n  font-size: 0.8rem;\n  dipslay: inline-block;\n  font-weight: bold;\n'], ['\n  color: white;\n  background: ', ';\n  border-radius: 10px;\n  padding: 2px 7px;\n  min-width: 10px;\n  vertical-align: middle;\n  text-align: center;\n  font-size: 0.8rem;\n  dipslay: inline-block;\n  font-weight: bold;\n']);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// const theme = {
//   primary: '#cdcdcd',
//   secondary: '#ffb700',
//   tertiary: '#525349',
//   heading: '#ffb700',
// }

// const themeFunction = outerTheme => {
//   if (outerTheme) {
//     const t = { ...outerTheme }
//     if (!t.primary) t.primary = theme.primary
//     if (!t.secondary) t.secondary = theme.secondary
//     if (!t.tertiary) t.tertiary = theme.tertiary
//     if (!t.heading) t.heading = theme.heading
//     return t
//   } else {
//     return theme
//   }
// }

var UserInfo = function UserInfo(_ref) {
  var user = _ref.user,
      heading = _ref.heading,
      logo = _ref.logo;
  return React.createElement(
    Container,
    null,
    logo && React.createElement('img', { src: logo, alt: 'City of Goodyear' }),
    React.createElement(
      Heading,
      null,
      heading
    ),
    React.createElement(
      Name,
      null,
      'Hi, ',
      user.name,
      '!'
    )
  );
};

UserInfo.propTypes = {
  user: PropTypes.object.isRequired,
  heading: PropTypes.string.isRequired,
  logo: PropTypes.string
};

var Dashboard = function (_React$Component) {
  _inherits(Dashboard, _React$Component);

  function Dashboard() {
    _classCallCheck(this, Dashboard);

    return _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).apply(this, arguments));
  }

  _createClass(Dashboard, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          user = _props.user,
          routes = _props.routes,
          heading = _props.heading,
          logo = _props.logo;


      return React.createElement(
        styled.ThemeProvider,
        { theme: themeFunction },
        React.createElement(
          Wrapper,
          null,
          React.createElement(
            Sidebar,
            null,
            React.createElement(UserInfo, { user: user, heading: heading, logo: logo }),
            routes.map(function (r) {
              return r.link ? buildLink(r, user) : null;
            })
          ),
          React.createElement(
            Inner,
            null,
            React.createElement(
              Content,
              null,
              React.createElement(
                reactRouterDom.Switch,
                null,
                routes.map(function (r) {
                  return buildRoute(r, user);
                })
              )
            )
          )
        )
      );
    }
  }]);

  return Dashboard;
}(React.Component);

Dashboard.propTypes = {
  user: PropTypes.object.isRequired,
  routes: PropTypes.array.isRequired,
  heading: PropTypes.string,
  logo: PropTypes.string
};
Dashboard.deafultProps = {
  heading: ''
};
function buildLink(route, user) {
  if (route.admin) {
    if (user.admin) {
      return React.createElement(
        SidebarLink,
        {
          key: route.path,
          to: route.path,
          activeOnlyWhenExact: route.activeOnlyWhenExact
        },
        route.icon,
        ' ',
        route.linkText,
        ' ',
        route.badgeCount > 0 && React.createElement(
          Badge,
          null,
          route.badgeCount
        )
      );
    }
    return null;
  }
  return React.createElement(
    SidebarLink,
    {
      key: route.path,
      to: route.path,
      activeOnlyWhenExact: route.activeOnlyWhenExact
    },
    route.icon,
    ' ',
    route.linkText,
    ' ',
    route.badgeCount > 0 && React.createElement(
      Badge,
      null,
      route.badgeCount
    )
  );
}

function buildRoute(route, user) {
  if (route.admin) {
    if (user.admin) {
      return React.createElement(reactRouterDom.Route, {
        key: route.path,
        exact: true,
        path: route.path,
        render: function render(props) {
          return React.createElement(route.component, props);
        }
      });
    }
    return null;
  }

  return React.createElement(reactRouterDom.Route, {
    key: route.path,
    exact: true,
    path: route.path,
    render: function render(props) {
      return React.createElement(route.component, props);
    }
  });
}

var SidebarLink = function SidebarLink(_ref2) {
  var to = _ref2.to,
      activeOnlyWhenExact = _ref2.activeOnlyWhenExact,
      children = _ref2.children;
  return React.createElement(
    reactRouterDom.Route,
    { path: to, exact: activeOnlyWhenExact },
    function (_ref3) {
      var match = _ref3.match;
      return React.createElement(
        StyledLink,
        { to: to, active: !!match },
        children
      );
    }
  );
};

SidebarLink.propTypes = {
  to: PropTypes.string.isRequired,
  activeOnlyWhenExact: PropTypes.bool,
  children: PropTypes.node

  //STYLED-COMPONENTS

};var Wrapper = styled__default.div(_templateObject);

var Sidebar = styled__default.div(_templateObject2, function (props) {
  return props.theme.tertiary;
});

var Inner = styled__default.div(_templateObject3);

var Content = styled__default.div(_templateObject4);

var Container = styled__default.div(_templateObject5);

var Heading = styled__default.h4(_templateObject6, function (props) {
  return props.theme.heading;
});

var Name = styled__default.span(_templateObject7);

// npk - switching the eslint config here because active was always
// gettings flagged as unused, we just need to omit it from the
// Link props

/* eslint no-unused-vars: ["error", {"ignoreRestSiblings": true}] */
var StyledLink = styled__default(function (_ref4) {
  var active = _ref4.active,
      children = _ref4.children,
      rest = _objectWithoutProperties(_ref4, ['active', 'children']);

  return React.createElement(
    reactRouterDom.Link,
    rest,
    children
  );
})(_templateObject8, function (props) {
  return props.active ? props.theme.secondary : props.theme.primary;
}, function (props) {
  return props.theme.secondary;
});

var Badge = styled__default.span(_templateObject9, function (props) {
  return props.theme.secondary;
});

var _createClass$1 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject$1 = _taggedTemplateLiteral$1(['\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: rgba(36, 36, 36, 0.4);\n  width: 100%;\n  height: 100vh;\n'], ['\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: rgba(36, 36, 36, 0.4);\n  width: 100%;\n  height: 100vh;\n']);
var _templateObject2$1 = _taggedTemplateLiteral$1(['\n  position: absolute;\n  top: calc(50% - 150px);\n  left: calc(50% - 350px);\n  width: 700px;\n  height: 300px;\n  background: white;\n  display: flex;\n  flex-direction: column;\n'], ['\n  position: absolute;\n  top: calc(50% - 150px);\n  left: calc(50% - 350px);\n  width: 700px;\n  height: 300px;\n  background: white;\n  display: flex;\n  flex-direction: column;\n']);
var _templateObject3$1 = _taggedTemplateLiteral$1(['\n  display: flex;\n  justify-content: space-between;\n  margin: 0;\n  margin-bottom: 0.5rem;\n  padding: 0.5rem;\n  background-color: ', ';\n  font-weight: bold;\n  color: white;\n'], ['\n  display: flex;\n  justify-content: space-between;\n  margin: 0;\n  margin-bottom: 0.5rem;\n  padding: 0.5rem;\n  background-color: ', ';\n  font-weight: bold;\n  color: white;\n']);
var _templateObject4$1 = _taggedTemplateLiteral$1(['\n  background: transparent;\n  color: hsl(0, 100%, 50%);\n  cursor: pointer;\n  border: none;\n  padding: 0;\n  transition: color: ease 0.3s;\n\n  &:hover {\n    color: hsl(0, 100%, 70%);\n  }\n'], ['\n  background: transparent;\n  color: hsl(0, 100%, 50%);\n  cursor: pointer;\n  border: none;\n  padding: 0;\n  transition: color: ease 0.3s;\n\n  &:hover {\n    color: hsl(0, 100%, 70%);\n  }\n']);

function _taggedTemplateLiteral$1(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$1(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_React$Component) {
  _inherits$1(Modal, _React$Component);

  function Modal(props) {
    _classCallCheck$1(this, Modal);

    var _this = _possibleConstructorReturn$1(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

    _this.overlayContainer = document.createElement('div');
    document.body.appendChild(_this.overlayContainer);
    return _this;
  }

  _createClass$1(Modal, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.body.removeChild(this.overlayContainer);
    }
  }, {
    key: 'render',
    value: function render() {
      return ReactDOM.createPortal(React.createElement(
        styled.ThemeProvider,
        { theme: themeFunction },
        React.createElement(
          Background,
          null,
          React.createElement(
            Container$1,
            null,
            React.createElement(
              Heading$1,
              null,
              this.props.heading || '',
              React.createElement(
                Button,
                { type: 'button', onClick: this.props.handleClose },
                this.props.closeIcon
              )
            ),
            this.props.children
          )
        )
      ), this.overlayContainer);
    }
  }]);

  return Modal;
}(React.Component);

Modal.propTypes = {
  heading: PropTypes.string,
  handleClose: PropTypes.func.isRequired,
  closeIcon: PropTypes.node,
  children: PropTypes.node
};
var Background = styled__default.div(_templateObject$1);

var Container$1 = styled__default.div(_templateObject2$1);

var Heading$1 = styled__default.div(_templateObject3$1, function (props) {
  return props.theme.tertiary;
});

var Button = styled__default.button(_templateObject4$1);

exports.Dashboard = Dashboard;
exports.Modal = Modal;
